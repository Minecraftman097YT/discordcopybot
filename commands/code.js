const Discord = require("discord.js");

exports.run = (bot, message, args, tools) => {
  let msg = args.slice(0).join(" ")
  
  let embed = new Discord.RichEmbed()
  .setTitle(`**New Code!**`)
  .setDescription(`${msg}`)
  .setTimestamp()
  .setThumbnail(bot.user.avatarURL)
  .setColor("RED");
  message.channel.send(embed)
  message.react(":white_check_mark:");
  message.react(":x:");
  message.delete()
};