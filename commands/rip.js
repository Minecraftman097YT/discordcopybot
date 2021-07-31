const Discord = require('discord.js');
const moment = require('moment');
require('moment-duration-format');

exports.run = (bot, message, args) => {
  
  let member = message.mentions.members.first() || message.member;
  let grund2 = args.slice(1).join(" ");
  let grund1 = args[0].join(" ");
  
  if (!grund2) {
   let info = new Discord.RichEmbed()
   .setTitle(":ambulance: RIP :ambulance:")
   .addField("Letzte Sätze", ":smiling_imp: Muhahahaha :smiling_imp:")
   .setColor("RED")
   .setTimestamp()
   message.channel.send(info)
   message.delete()
    
  } else {
    
       let info = new Discord.RichEmbed()
   .setTitle(":ambulance: RIP :ambulance:")
   .addField("Name", grund1)
   .addField("Letzte Sätze", grund2)
   .setColor("DARKBLUE")
   .setTimestamp()
   message.channel.send(info)
   message.delete()
  }
   }