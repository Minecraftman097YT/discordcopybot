const Discord = require("discord.js");

exports.run = (bot, message, args) => {
  
  const admin = ["522077164175228932"]
  
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Du hast keine Berechtigungen :x:")
  
  if(!args[0]) return message.reply("Bitte ergänz eine Zahl zwischen 1 und 100!")
  
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`Es werden ${args[0]} gelöscht! :white_check_mark:`).then(message => message.delete(5000));
  })
}