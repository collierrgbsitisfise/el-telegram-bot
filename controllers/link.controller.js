import { regExp,inlineQueryResp } from './../helpers/index';
import {
  createShortLink
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

module.exports.inlineQuery = (bot) => async (msg) => {
    const { id, query } = msg;
    const {
        linkRegExp
    } = regExp;

    if (!linkRegExp.test(query)) {
        let results = [];

        let  { invalidLink } = inlineQueryResp;

    
        results.push(invalidLink);
    
        bot.answerInlineQuery(id, results, {switch_pm_text:'INCORRECT LINK ',switch_pm_parameter:'x'});
        return;
    }
    
    let results = [];

    let InlineQueryResultPhoto = {
        'type': 'article', 
        'id': +Date.now(),
        'title': 'http://google.com',
        'input_message_content': {
            'message_text': 'some cool text',
            'disable_web_page_preview': true
        },
        'url': 'http://google.com',
    };

    results.push(InlineQueryResultPhoto);

    bot.answerInlineQuery(id, results, {switch_pm_text:'SHORT LINK ',switch_pm_parameter:'x'});
}
