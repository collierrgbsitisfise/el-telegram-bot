import { regExp } from './../helpers/index';
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
    const q_id = msg.id;
    const q_query = msg.query;
    const {
        linkRegExp
    } = regExp;
    console.log(q_query);
    console.log(linkRegExp.test(q_query));
    if (!linkRegExp.test(q_query)) {
        let results = [];

        let InlineQueryResultPhoto = {
            'type': 'photo', 
            'photo_url': 'https://climatefeedback.org/wp-content/uploads/tags/HTag_Incorrect.png',
            'thumb_url': 'https://climatefeedback.org/wp-content/uploads/tags/HTag_Incorrect.png',
            'id': +Date.now(),
            'photo_width': 200,
            'photo_height': 200
        };

    
        results.push(InlineQueryResultPhoto);
    
        bot.answerInlineQuery(q_id, results, {switch_pm_text:'INCORRECT LINK ',switch_pm_parameter:'x'});
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

    bot.answerInlineQuery(q_id, results, {switch_pm_text:'SHORT LINK ',switch_pm_parameter:'x'});
}
