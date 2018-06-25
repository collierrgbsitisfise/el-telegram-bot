import TelegramBot from 'node-telegram-bot-api';
import settings from './config/config';
import {
  getShortLink,
  inlineQuery,
  getPrivateShortLink,
  getOnceAvailableLink
} from './controllers/link.controller';

const bot = new TelegramBot(settings.TG_TOKEN, { polling: true });

bot.onText(/\/link (.+)/, getShortLink(bot));
bot.onText(/\/private-link (.+)/,getPrivateShortLink(bot));
bot.onText(/\/once-available-link (.+)/,getOnceAvailableLink(bot));
bot.on('inline_query', inlineQuery(bot));