const Discord = require("discord.js");

exports.run = (bot, message, args) => {
  let msg = args.slice(0).join(" ")
  let user1 = message.mentions.users.first();

  if (!msg) return message.reply("Bitte schreibe noch ein Satz dahinter.")

  let embed = new Discord.RichEmbed()
  .setDescription(`${msg}`)
  .setColor("BLUE")
  .setTimestamp()
  message.channel.send(embed)
  message.delete()
};