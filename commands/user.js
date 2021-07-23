const Discord = require("discord.js");

exports.run = (bot, message, args) => {
  const Help = new Discord.RichEmbed()
  .setThumbnail(bot.user.avatarURL)   .setTitle("User")
    .addField("**Gesamte User Anzahl von Servern:**", ` ${bot.users.size}`)
    .setColor("GREEN")
  message.channel.send(Help);
  message.delete().catch(O_o=> {}); `message.channel.send(""+UserMessage)` 
};
//helpcommand

//+help active 