import TelegramBot from 'node-telegram-bot-api';
import { TG_TOKEN } from './config/config';
import {
  getShortLink,
  inlineQuery
} from './controllers/link.controller';

const bot = new TelegramBot(TG_TOKEN, { polling: true });

bot.onText(/\/link (.+)/, getShortLink(bot));
bot.on('inline_query', inlineQuery(bot));