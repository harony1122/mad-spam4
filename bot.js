const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("544368881460838400")
setInterval(function() {
channel.send(`spaaamamaa`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
