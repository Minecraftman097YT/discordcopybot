const Discord = require("discord.js");

exports.run = (bot, message, args) => {
  
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Du hast keine Rechte um `clear` zu benutzen!")
  
  if(!args[0]) return message.reply("Bitte wähle eine Zahl zwischen 1 und 100!")
  
  message.channel.bulkDelete(args[0]).then(() => {
  let Embed = new Discord.RichEmbed()
  .setTitle(`${args[0]} Nachrichten gelöscht!`)
  .setDescription(`Es wurden **${args[0]}** Nachrichten gelöscht :white_check_mark:`)
  .setTimestamp()
  .setColor("GREEN")
  message.channel.send(Embed)
  message.react(':white_check_mark:')
  });
};
