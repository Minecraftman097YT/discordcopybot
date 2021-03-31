const Discord = require("discord.js");

exports.run = (bot, message, args) => {
  let user = message.mentions.members.first();
  let user1 = message.mentions.users.first();
  let grund = args.slice(1).join(" ");
  const admin = ["522077164175228932"]
  if (!message.guild.me.hasPermission("KICK_MEMBERS"))
    return message.reply("Mir fehlen die Rechte dazu!");

  if (!message.member.hasPermission("KICK_MEMBERS"))
    return message.reply("Du hast keine Premission `Mitglider Kicken` um diesen Befehl auszuführen!");

  if (!user)
    return message.reply("Bitte erwähne einen User, um ihn zu warnen!");

  if (user.id === message.author.id)
    return message.reply("Du kannst dich nicht selbst warnen!");

  if (!grund)
    return message.reply(
      `Bitte nenne einen Grund, um ${user1.username} zu warnen!`
    );

  let warn = new Discord.RichEmbed()
  .setTitle(`${user1.tag} wurde verwarnt!`)
  .addField("User" , `${user1.tag}`)
  .addField("Grund" , `${grund}`)
  .addField("Von", `${message.author}`)
  .setTimestamp()
  .setColor("GREEN")
  message.channel.send(warn)
  message.react('✅')
};