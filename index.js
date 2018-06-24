import TelegramBot from 'node-telegram-bot-api';
import settings from './config/config';
import {
  getShortLink,
  inlineQuery,
  getPrivateShortLink
} from './controllers/link.controller';

const bot = new TelegramBot(settings.TG_TOKEN, { polling: true });

bot.onText(/\/link (.+)/, getShortLink(bot));
bot.onText(/\/private-link (.+)/,getPrivateShortLink(bot))
bot.on('inline_query', inlineQuery(bot));