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

bot.on('message', msg => {
    const { id } = msg.chat

    if (msg.text.toLowerCase() === 'salom') {
        bot.sendMessage(id, ${msg.from.first_name})
    }else {
        bot.sendMessage(id, debug(msg))
    }

})


