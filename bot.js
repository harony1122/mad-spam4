const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("536852233824763915")
setInterval(function() {
channel.send(`haroony love `);
}, 30)
})

client.login(process.env.BOT_TOKEN);
