const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NTE2NTQ2MzQ0MzY2NjM3MDc4.Dt2L_w.Bg38OPbRzk5hZOHhYBXhjaUQm7M);//where BOT_TOKEN is the token of our bot 
