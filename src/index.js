const TelegramBot = require('node-telegram-bot-api');
const Token = "946596128:AAFwEH5YIV1rXchTV3iyrO5Hd0_mH0h-2yw";

const bot = new TelegramBot(Token, {
    polling: {
        interval: 300,
        autoStart: true,
        params: {
            timeout: 30
        }
    }
});


bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, `hello ${msg.chat.first_name}`)
    console.log(msg)
})