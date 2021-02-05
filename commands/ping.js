const Discord = require("discord.js");

exports.run = (bot, message, args) => {
  
  let embed = new Discord.RichEmbed()
   .setTitle("Pong! :ping_pong:")
   .setThumbnail(bot.user.avatarURL) 
   .setDescription(`${bot.ping} ms`) 
   .setTimestamp()
   .setColor("DARKBLUE")
  message.channel.send(embed)
  message.delete()
};