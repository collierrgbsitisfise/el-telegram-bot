import TelegramBot from 'node-telegram-bot-api';
import { TG_TOKEN } from './config/config';
import { regExp } from './helpers/index';

const bot = new TelegramBot(TG_TOKEN, { polling: true });

bot.onText(/\/link (.+)/, (msg, match) => {
  const { linkRegExp } = regExp;
  const chatId = msg.chat.id;
  const link = match[1];
  
  if (!linkRegExp.test(link)) {
    bot.sendMessage(chatId, 'Invalid link');
    return;  
  }
  
  bot.sendMessage(chatId, link);
});
