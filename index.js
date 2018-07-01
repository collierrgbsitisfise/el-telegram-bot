import TelegramBot from 'node-telegram-bot-api';
import settings from './config/config';
import {
  getShortLink,
  inlineQuery,
  getPrivateShortLink,
  getOnceAvailableLink,
  getHelpInfo,
  getStartInfo
} from './controllers/link.controller';

const bot = new TelegramBot(settings.TG_TOKEN, { polling: true });

bot.onText(/\/link (.+)/, getShortLink(bot));
bot.onText(/\/private_link (.+)/,getPrivateShortLink(bot));
bot.onText(/\/once_available_link (.+)/,getOnceAvailableLink(bot));
bot.onText(/\/help/, getHelpInfo(bot));
bot.onText(/\/start/, getStartInfo(bot));
bot.on('inline_query', inlineQuery(bot));