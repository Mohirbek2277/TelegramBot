const Telegram = require('node-telegram-bot-api')
const TOKEN = '1002372864:AAHl6rFV5gTauQQd085DlkkC7wQOImP3MSQ'

console.log('Bot has been started... ')

const bot = new Telegram(TOKEN, {
    polling: {
        interval: 300,
        autoStart: true,
        params: {
            timeout: 10
        }
    }
})

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, 'Assalomu Aleykum Hurmatli Foydalanuvchi Biz sizga Xizmat qilishdan Mamnunmiz!')
})