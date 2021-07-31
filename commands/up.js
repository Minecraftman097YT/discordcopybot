const Discord = require("discord.js");

exports.run = (bot, message, args) => {
  let msg = args.slice(0).join(" ")
  let user1 = message.mentions.users.first();
  
  const admin = ["522077164175228932"]
  
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Du hast keine Berechtigungen :x:")

  if (!msg) return message.reply(".")

  let embed = new Discord.RichEmbed()
  .setTitle("PixelBlock.EU Update!")
  .addField(` `, `${msg}`)
  .setColor("BLUE")
  .setTimestamp()
  message.delete()
  message.channel.send(embed).then(sentEmbed => {
  sentEmbed.react("✅")
  })
};