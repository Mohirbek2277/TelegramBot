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
    const chatId = msg.chat.id

    if (msg.text === 'Закрыть') {
        bot.sendMessage(chatId, 'Klaviyaturani yopish', {
            reply_makup: {
                remove_keyboard: true
            }
        })
    }else if (msg.text === 'Ответить'){
        bot.sendMessage(chatId, 'Klaviyaturani ochish', {
            reply_makup: {
                force_reply: true
            }
        })
    }else {
        bot.sendMessage(chatId, 'Tegishli bo`limni tanlang! 👇', {
            reply_markup: {
                keyboard: [

                    ['Ответить', 'Закрыть'],
                    ['Mohirbek'],
                    ['Qiwi Hamyon', 'WebMoney', 'Яндекс'],
                    ['Admin', 'Ishonchli to`lov', '1xBet', 'Rubl Kursi'],
                    ['Games 🎲', 'Bitcoin Trade', '942-17 Group', 'UbTUIT']
                ]

            }
        })
    }

})

})




