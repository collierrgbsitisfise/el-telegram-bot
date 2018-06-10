import TelegramBot from 'node-telegram-bot-api';
import { TG_TOKEN } from './config/config';



//init bot
const bot = new TelegramBot(TG_TOKEN, { polling: true });

bot.onText(/\/link (.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message
  
    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"
  
    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
  });
