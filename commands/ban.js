const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission(`BAN_MEMBERS`))
  return message.reply("Du hast nicht die benötigten Berechtigung dazu! (ADMINISTRATOR)");
  let member = message.mentions.members.first() || message.guild.members.get(args[0]);
  if(message.member.id === member.id) return message.channel.send("Du kannst keine Admins Bannen.")
  if(!member)
  return message.channel.send('Bitte geben Sie einen gültigen Benutzer an!');
  if(!member.bannable)
  return message.channel.send('Dieses Mitglied kann nicht gebannt werden!');
  let reason = args.slice(1).join(' ')
  if(!reason) return message.channel.send("Bitte gebe noch ein Grund an.")
  await member.ban(reason)
  message.channel.send(`:white_check_mark: **${member.user.tag}** has been succefully banned.`);
}