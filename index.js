const Telegram = require('node-telegram-bot-api')
const fs = require('fs')
const debug = require('./helpers')
const TOKEN = '978695376:AAGCfCMajQW9s70mzYcJcBIRPL9FAnjzLRA'

console.log('Bot Ishlap Boshlodi... ')

const bot = new Telegram(TOKEN, {
    polling: {
        interval: 400,
        autoStart: true,
        params: {
            timeout: 10
        }
    }
})

//---------------------------------------------------------------------------
bot.on('message', msg => {

    const chatid = msg.chat.id

    if (msg.text === '📱Telefonlar'){
        bot.sendMessage(chatid, 'Telefonni tanlang👇🏻', {
            reply_markup: {
                inline_keyboard
            }
        })
    }
    else if (msg.text === '📱Telefonlar'){
        bot.sendMessage(chatid, 'Telefonni tanlang👇🏻', {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'Samsung',
                            callback_data: 'samsung'
                        }
                    ],
                    [
                        {
                            text: 'Xiaomi-Redmi',
                            callback_data: 'Redmi'
                        }
                    ]
                ]
            }
        })
    }

    else if (msg.text === '💻Notebook'){
        bot.sendMessage(chatId, 'Noutbukni tanlang👇🏻', {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'ASUS',
                            callback_data: 'ASUS'
                        }
                    ],
                    [
                        {
                            text: 'ACER',
                            callback_data: 'ACER'
                        }
                    ]
                ]
            }
        })
    }

    bot.sendMessage(chatid, 'Texno Bozorga Xush kelibsiz!\nIltimos kerakli bo`limni tanlashingizni so`rayman👇🏻', {
        reply_markup: {
            keyboard: [
                ['📱Telefonlar', '💻Notebook', '🖥Televizor'],
                ['🧹Chang yutkich', 'Dazmollar','Muzlatkich', 'Konditsioner'],
                ['📞Bizga Murojaat',
                    {
                        text: '📃Yangiliklar',
                                            }]
            ]
        }
    })

})
//----------------------------------------------------------------------------
const inline_keyboard = [
    [
        {
            text: 'Note 10+',
            callback_data: 'note10+'
        },
        {
            text: 'S10+',
            callback_data: 'S10+'
        },
        {
            text: 'A8 2018',
            callback_data: 'A82018'
        }
    ],
    [
        {
            text: 'A70',
            callback_data: 'A70'
        },
        {
            text: 'A50 (black, blue)',
            callback_data: 'A50'
        },
        {
            text: 'A30 S (64GB)',
            callback_data: 'A3064'
        }
    ],
    [
        {
            text: 'Note 10',
            callback_data: 'note10'
        },
        {
            text: 'S10',
            callback_data: 'S10'
        },
        {
            text: 'A80',
            callback_data: 'A80'
        }
    ],
    [
        {
            text: 'A20 S',
            callback_data: 'A20S'
        },
        {
            text: 'A10 S',
            callback_data: 'A10S'
        },
        {
            text: 'J2 Core',
            callback_data: 'J2Core'
        }
    ],
    [
        ,
        {
            text: 'A30 S (32GB)',
            callback_data: 'A3032'
        },
        {
            text: 'CLOSE',
            callback_data: 'delete'
        }
    ]
]


//----------------------------------------------------------------------------

//----------------------------------------------------------------------------



//----------------------------------------------------------------------------

const Telefonlar = [
        [
            {
                text: 'Samsung',
                callback_data: 'samsung'
            },
            {
                text: 'Apple IPhone',
                callback_data: 'iphone'
            },
            {
                text: 'Xiaomi-Redmi',
                callback_data: 'redmi'
            },
            {
                text: 'Huawei',
                callback_data: 'huawei'
            }
        ]
]


//----------------------------------------------------------------------------

bot.on('callback_query', query => {

    const  { chat, message_id, text } = query.message

    switch (query.data){
        case 'samsung':
            bot.sendMessage(chat.id, chat.id, 'Iphone ning Telefonlari', {
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: 'Iphone 6',
                                callback_data: 'iphone6'
                            },
                            {
                                text: 'Iphone X',
                                callback_data: 'iphonex'
                            },
                            {
                                text: ''
                            }
                        ]
                    ]
                }
            })
            break

        case 'iphone':
            bot.sendMessage(chat.id, 'I fon bo`limi')
            break

    }

    bot.answerCallbackQuery({
        callback_query_id: query.id
    })
})

//----------------------------------------------------------------------------
