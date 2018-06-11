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
    var q_id = msg.id;
    var q_query = msg.query;
//  var q_from = msg.from;
//  var q_offset = msg.offset;

    var results = [];

    for (var i = 0; i < 10; ++i) {
        var InlineQueryResultPhoto = {
            'type': 'article', 
            'id': +Date.now() + '' + i,
            'title': 'Short Link',
            'input_message_content': {
                'message_text': 'some cool text',
                'disable_web_page_preview': true
            },
            'url': 'http://google.com',
        };
        results.push(InlineQueryResultPhoto);
    }

    try {
        bot.answerInlineQuery(q_id, results, {switch_pm_text:'SHORT LINK',switch_pm_parameter:'x'});
    } catch (err) {
        console.log('it is error');
        console.log(err);
    }
}
