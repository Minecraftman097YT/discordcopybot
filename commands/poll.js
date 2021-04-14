const Discord = require("discord.js");

exports.run = (bot, message, args) => {
  let msg = args.slice(0).join(" ")
  let user1 = message.mentions.users.first();

  if (!msg) return message.reply("Bitte schreibe noch ein Satz dahinter.")

  let embedPoll = new Discord.RichEmbed()
  .setTitle("Neue Umfrage")
  .setDescription(`${msg}`)
  .setColor("BLUE")
  .setTimestamp()
  message.delete()
  let msgEmbed = await pollChannel.send(embedPoll);
  await msgEmbed.react("✅")
  await msgEmbed.react("❌")
};