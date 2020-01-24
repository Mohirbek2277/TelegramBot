const Telegram = require('node-telegram-bot-api')
const debug = require('./helpers')
const TOKEN = '1002372864:AAHl6rFV5gTauQQd085DlkkC7wQOImP3MSQ'

console.log('Bot has been started... ')

const bot = new Telegram(TOKEN, {
    polling: {
        interval: 400,
        autoStart: true,
        params: {
            timeout: 10
        }
    }
})

const inline_keyboard = [
    [
        {
            text: '1 - Bo`lim',
            callback_data: '1'
        },
        {
            text: '2 - Bo`lim',
            callback_data: '2'
        }
    ],
    [
        {
            text: 'HUMO Kartalar',
            callback_data: '3'
        },
        {
            text: 'Naqd Pul Olish',
            callback_data: '4'
        }
    ],
    [
        {
            text: 'Yopish: Close',
            callback_data: 'delete'
        }
    ]
]

//------------------------------------------------------------//

bot.on('message', msg => {

    const chatid = msg.chat.id

    if (msg.text === 'Dasturchi haqida'){
        bot.sendMessage(chatid, `Salom, HURMATLI ${msg.from.first_name}!.\nMen Ro'zmetov Mohirbek Toshkent Axborot Texnologiyalari Universiteti Urganch Filliali talabasiman. \nBu Botni men Python Dasturlash Tili asosida Yaratdim.`)
    }
    else if (msg.text === '942-17'){
        bot.sendMessage(chatid, `21 ta talabadan iborat bo'lgan TaTU UF ning erkatoy guruppasi hisoblanadi.\nBu yerda Guruh rahbari Quronboyev Akbar domla\nGuruh Sardori esa Nurmatov Nurmuhammad.`)
    }

    bot.sendMessage(chatid, 'Omad bo`limiga Xush kelibsiz! Bu Yerda Siz Misli ko`rinmagan Boyliklar to`plash imkoniyatiga ega bo`lasiz.', {
        reply_markup: {
            keyboard: [
                ['Dasturchi haqida'],
                [{
                    text: 'TATU UF',
                    request_location: true
                }, '942-17'],
                ['Mohirbek', 'Omad', 'Omadsizlik'],
                ['1','2','3','4']
            ]


        }
    })

})

//----------------------------------------------------------//

bot.onText(/\/start/, (msg, [source, match]) => {

    const chatId = msg.chat.id

    bot.sendMessage(chatId, 'Klaviyatura', {
        reply_makup: {  inline_keyboard  }
    })
})

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/--/-/-/-/-/-/-/-/-/-/-//

bot.onText(/\/lucky/, (msg, [source, match])=> {
    bot.sendMessage(msg.chat.id, 'Omad Bo`limiga xush Kelibsiz!', {
        reply_markup: { inline_keyboard }
    })
})