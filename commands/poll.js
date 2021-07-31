const Discord = require("discord.js");

exports.run = (bot, message, args) => {
  let msg = args.slice(0).join(" ")
  let user1 = message.mentions.users.first();
  
  const admin = ["522077164175228932"]
  
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Du hast keine Berechtigungen :x:")

  if (!msg) return message.reply(".")

  let embed = new Discord.RichEmbed()
  .setTitle("PixelBlock.EU Umfrage!")
  .addField(`Frage:`, `${msg}`)
  .setColor("BLUE")
  .setFooter(`Umfrage von: ${message.author.tag}`)
  .setThumbnail("https://cdn.discordapp.com/attachments/814438593849851936/832556628841988107/image0.jpg")
  .setTimestamp()
  message.delete()
  message.channel.send(embed).then(sentEmbed => {
  sentEmbed.react("✅")
  sentEmbed.react("❌")
  })
};