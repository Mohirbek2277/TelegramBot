const Telegram = require('node-telegram-bot-api')
const debug = require('./helpers')
const TOKEN = '1002372864:AAHl6rFV5gTauQQd085DlkkC7wQOImP3MSQ'

console.log('Bot has been started... ')

const bot = new Telegram(TOKEN, {
    polling: {
        interval: 200,
        autoStart: true,
        params: {
            timeout: 10
        }
    }
})


bot.onText(/\/start/, msg => {
    const { id } = msg.chat

    bot.sendMessage(id, debug(msg))
})

bot.onText(/\/lucky (.+)/, (msg, [sourse, match]) => {
    const { id } = msg.chat

    bot.sendMessage(id, debug(match))
})
