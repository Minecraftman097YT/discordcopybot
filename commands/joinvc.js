const Discord = require("discord.js");

exports.run = (bot, message, args, prefixes) => {
  
  // Bot no Permission
  if (!message.guild.me.hasPermission("ADMINISTRATOR")) return message.reply("Mir fehlen folgende Permissions: `ADMINISTRATOR`")
  
  // User no Permission
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Du hast keine Rechte um `join` zu benutzen!")
  
  // channel
  let chan;
  chan = message.guild.channels.find(c => c.name.includes(args[0]))
  if (!chan) chan = message.guild.channels.get(args[1])
  
  // no Channel
  if (!args[0]) return message.reply("Bitte nenne einen Channel, dem ich beitreten kann!")
  if (!chan) return message.reply(`Channel mit dem Namen / der ID \`${args[0]}\` wurde nicht gefunden!`)
  
  // success
  chan.join()
  
}