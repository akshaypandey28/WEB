const { Telegraf } = require('telegraf')
const axios=require('axios') 
const codes=require('./codes')
/**
 * How to get the secret token for creating a bot ?
 * -> Open Telegram and search for BotFather 
 * -> To read instruction type /start and press enter
 * -> to create a new bot type /newbot and presss enter
 * -> It will ask for a bot name, give a bot name without  / for ex: coding_bot
 * -> then it will ask for a username ending with bot, ex: code_examples_js_cpp_java_bot
 * // https://t.me/code_examples_js_cpp_java_bot
 */


const bot=new Telegraf('7053831069:AAFVqXHC7Ox2L_QUuJj9O9Nam5H_7khswoI') //this is a token

bot.start((ctx)=>{
    ctx.reply('welcome to the new coding bot by akshay')
})

bot.command('binarysearchjs',(ctx)=>{
    ctx.reply(codes.binarySeacrh)
})

bot.command('binaryTree' , async function (ctx){
    const response=await axios.get('https://raw.githubusercontent.com/akshaypandey28/C-PLUS-PLUS/main/.vscode13-BT/binary_tree.cpp')
    //console.log(response.data)
    return ctx.reply(response.data)
});

bot.command('whomadethis', (ctx) => ctx.reply('akshay pandey'));

bot.command('hi', (ctx) => ctx.reply('chutiye bkl mc bc'));

bot.on('sticker', (ctx) => ctx.reply('❤️'));


// Command handler for /hello
bot.command('hello', (ctx) => { //for finding the name of the user
    // Fetch user's first name
    const firstName = ctx.from.first_name;
    
    // Fetch user's last name
    const lastName = ctx.from.last_name || '';
    
    // Combine first name and last name
    const fullName = `${firstName} ${lastName}`;
    
    // Send a greeting message to the user
    ctx.reply(`Hello, ${fullName}! Welcome to the bot.`);
});

// Middleware to log incoming messages from the user
bot.use((ctx, next) => {
    console.log(`Received message from: ${ctx.from.first_name} ${ctx.from.last_name}`);
    next();
});

bot.launch()
