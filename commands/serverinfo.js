const Discord = require('discord.js');
const moment = require('moment');
require('moment-duration-format');

exports.run = (bot, message, prefixes) => {
  
  const embed = new Discord.RichEmbed()
  .setAuthor(message.guild.name, message.guild.iconURL)
  .setColor(3447003)
  .addField("Server ID" , `(${message.guild.id})`)  
  .addField('Owner' , `${message.guild.owner.user}`) // uff bot 
  .addField('Member Counter' , `${message.guild.memberCount}`, true)
  .addField('Region' , message.guild.region, true)
  .addField("Server Erstellt" , `${moment.utc(message.guild.createdAt).locale('de').format("dddd, Do. MMMM YYYY")}`, true)
  .setTimestamp()
  .setColor("GREEN")
  message.channel.send({embed})
  message.react('✅')
};

exports.conf = {
  enabled: true,
  aliases: ['info','stats','serverstats','guildinfo','guildstats'],
  permLevel: 0
};

exports.help = {
  name: 'serverinfo',
  description: 'Displays server information & statistics',
  usage: 'serverinfo',
  category: 'General',
};