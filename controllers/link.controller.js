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
            bot.sendMessage(chatId, 'Invalid link');
            return;
        }

        let res = await createShortLink(link);
        bot.sendMessage(chatId, res);
}
