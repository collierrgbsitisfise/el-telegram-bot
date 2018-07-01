import { regExp,inlineQueryResp,cmd } from './../helpers/index';
import {
  createShortLink,
  createPrivateShortLink,
  createOnceAvailableShortLink
} from './../service/api.service';

module.exports.getStartInfo = (bot) => async (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, cmd.start.ru, {
        parse_mode: 'html'
    });
    bot.sendMessage(chatId, cmd.start.en, {
        parse_mode: 'html'
    });
}

module.exports.getHelpInfo = (bot) => async (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, cmd.help.en, {
        parse_mode: 'html'
    });
    bot.sendMessage(chatId, cmd.help.ru,{
        parse_mode: 'html'
    });
    bot.sendPhoto(chatId,require('fs').readFileSync('./utils/photo/inline_exmp_1.png'), {
        caption: '🇺🇸 Bot available as inline query from any chat. Just enter @easy_link_service_bot <link> (🇷🇺 Бот доступен из других чатов. Введи @easy_link_service_bot <ссылка> )'
    });
}

module.exports.getShortLink = (bot) => async (msg, match) => {
        const {
            linkRegExp
        } = regExp;

        const chatId = msg.chat.id;
        const link = match[1];

        if (!linkRegExp.test(link)) {
            bot.sendMessage(chatId, 'mmmm.... invalid link 😞😞😞');
            return;
        }

        let res = await createShortLink(link);
        bot.sendMessage(chatId, res);
}

module.exports.getPrivateShortLink = (bot) => async (msg, match) => {
    const {
        linkRegExp
    } = regExp;

    const chatId = msg.chat.id;
    const link = match[1];

    if (!linkRegExp.test(link)) {
        bot.sendMessage(chatId, 'mmmm.... invalid link 😞😞😞');
        return;
    }

    let res = await createPrivateShortLink(link);
    bot.sendMessage(chatId, res);
}

module.exports.getOnceAvailableLink = (bot) => async (msg, match) => {
    const {
        linkRegExp
    } = regExp;

    const chatId = msg.chat.id;
    const link = match[1];

    if (!linkRegExp.test(link)) {
        bot.sendMessage(chatId, 'mmmm.... invalid link 😞😞😞');
        return;
    }

    let res = await createOnceAvailableShortLink(link);
    bot.sendMessage(chatId, res);
}

module.exports.inlineQuery = (bot) => async (msg) => {
    const { id, query } = msg;
    const {
        linkRegExp
    } = regExp;

    if (!linkRegExp.test(query)) {

        let  { invalidLink } = inlineQueryResp;
    
        bot.answerInlineQuery(id, [invalidLink], {switch_pm_text:'INCORRECT LINK ',switch_pm_parameter:'x'});
        
        return;
    }
        
    let shortLink = await createShortLink(query);
    let privateShortLink = await createPrivateShortLink(query);
    let onceAvailableLink = await createOnceAvailableShortLink(query);

    let InlineQueryResultShortLink = {
        'type': 'article', 
        'id': +Date.now(),
        'title': '🇺🇸 Short Link (🇷🇺 Короткая ссылка)',
        'input_message_content': {
            'message_text': shortLink,
            'disable_web_page_preview': true
        }
    };

    let InlineQueryResultPrivateShortLink = {
        'type': 'article', 
        'id': +Date.now() + 1,
        'title': '🇺🇸 Private Short Link (🇷🇺 Приватная и Короткая ссылка)',
        'input_message_content': {
            'message_text': privateShortLink,
            'disable_web_page_preview': true
        }
    };

    let InlineQueryResultOnceAvailableShortLink = {
        'type': 'article', 
        'id': +Date.now() + 2,
        'title': '🇺🇸 Once available Short Link (🇷🇺 Единожды доступная и Короткая ссылка)',
        'input_message_content': {
            'message_text': onceAvailableLink,
            'disable_web_page_preview': true
        }
    }

    bot.answerInlineQuery(
        id,
        [InlineQueryResultShortLink,
        InlineQueryResultPrivateShortLink,
        InlineQueryResultOnceAvailableShortLink],
        {switch_pm_text:'SHORT LINK ',switch_pm_parameter:'x'}
    );
}
