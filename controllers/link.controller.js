import { regExp,inlineQueryResp } from './../helpers/index';
import {
  createShortLink,
  createPrivateShortLink,
  createOnceAvailableShortLink
} from './../service/api.service';

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
        'title': 'Short Link',
        'input_message_content': {
            'message_text': shortLink,
            'disable_web_page_preview': true
        }
    };

    let InlineQueryResultPrivateShortLink = {
        'type': 'article', 
        'id': +Date.now() + 1,
        'title': 'Private Short Link',
        'input_message_content': {
            'message_text': privateShortLink,
            'disable_web_page_preview': true
        }
    };

    let InlineQueryResultOnceAvailableShortLink = {
        'type': 'article', 
        'id': +Date.now() + 2,
        'title': 'Once available Short Link',
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
