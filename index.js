const Telegram = require('node-telegram-bot-api')

const fs = require('fs')
const TOKEN = '978695376:AAGCfCMajQW9s70mzYcJcBIRPL9FAnjzLRA'

console.log('Bot ishlap boshlodi... ')

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

    console.log(msg.from.first_name, ' Islatmoqda')
    const chatid = msg.chat.id

    if (msg.text === 'Mobil Telefonlar'){
        bot.sendMessage(chatid, 'Telefonni tanlang👇🏻', {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'Samsung',
                            callback_data: 'samsung'
                        },
                        {
                            text: 'Huawei',
                            callback_data: 'huawei'
                        }
                    ],
                    [
                        {
                            text: 'Apple IPhone',
                            callback_data: 'iphone'
                        },
                        {
                            text: 'Xiaomi-Redmi',
                            callback_data: 'redmi'
                        }
                    ]
                ]
            }
        })
        bot.on('callback_query', query => {

            const {chat, message_id, text} = query.message

            switch (query.data){
                case 'samsung':
                    bot.forwardMessage(chat.id, chat.id, message_id)
                    break
            }

        })

    }
    else if (msg.text === 'Maishiy Texnika'){

        bot.sendMessage(chatid, 'Texnika buyumini Tanlang👇🏻', {
            reply_markup: {
                inline_keyboard : [
                    [
                        {
                            text: 'Televizor',
                            callback_data: 'televizor'
                        },
                        {
                            text: 'Muzlatkich',
                            callback_data: 'muzlatkich'
                        }
                    ],
                    [
                        {
                            text: 'Kir Yuvish mashinasi',
                            callback_data: 'kir'
                        },
                        {
                            text: 'Orqaga⤴️',
                            callback_data: 'orqaga'
                        }
                    ]
                ]

            }
        })
    }

    bot.sendMessage(chatid, '',{
        reply_markup: {
            keyboard: [
                ['Maishiy Texnika', 'Mobil Telefonlar'],
                ['Aksessuarlar va oshxona buyumlari', 'Qidirish'],
                ['Kredit ma`lumoti', 'Biz bilan Murojaat']
            ]
        }
    })

})
//----------------------------------------------------------------------------


//----------------------------------------------------------------------------

const inline_keyboard = [
        [
            {
                text: 'Samsung',
                callback_data: 'samsung'
            },
            {
                text: 'Huawei',
                callback_data: 'huawei'
            }
        ],
        [
            {
                text: 'Apple IPhone',
                callback_data: 'iphone'
            },
            {
                text: 'Xiaomi-Redmi',
                callback_data: 'redmi'
            },
        ]
]
//----------------------------------------------------------------------------------------------------------
bot.onText(/\/pic/, msg => {
    bot.setPhoto(msg.chat.id, fs.readFileSync(__dirname + '/01.jpg'))
})