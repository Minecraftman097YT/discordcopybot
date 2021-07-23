const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!kUser) message.channel.send("Can't find user");
  let kReason = args.join(" ").slice(22);
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Du Hast Keine Berechtigung dafür!");
  if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Dieses Mitglied Kann nicht Gekickt werden");
}