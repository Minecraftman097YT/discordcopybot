const Discord = require("discord.js");
const fs = require("fs");

exports.run = (bot, message, args, prefixes, log, leave, welcome, level) => {
  
  let member = message.mentions.members.first() || message.member;
  
        let embed = new Discord.RichEmbed()
        .setTitle("Dein Rank")
        .addField("XP", ""+ level[message.author.id].xp +"/100")
        .addField("Level", level[message.author.id].level)
        .addField("Message", level[message.author.id].message)
        .setColor("RANDOM");
        message.channel.send(embed)
}