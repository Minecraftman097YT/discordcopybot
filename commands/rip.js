const Discord = require('discord.js');
const moment = require('moment');
require('moment-duration-format');

exports.run = (bot, message, args) => {
  
  let member = message.mentions.members.first() || message.member;
  let member1 = message.mentions.users.first() || message.author;
  let grund2 = args.slice(1).join(" ");
  
  if (!grund2) {
   let info = new Discord.RichEmbed()
   .setTitle(":ambulance: RIP :ambulance:")
   .addField("User", member, true)
   .addField("Letzte Sätze", ":smiling_imp: Muhahahaha :smiling_imp:")
   .addField("Datum" , `${moment.utc(member.now).locale('de').format("dddd, Do MMMM YYYY, HH:mm:ss")}`, true)
   .setThumbnail(member1.avatarURL)
   .setColor("RED")
   .setTimestamp()
   message.channel.send(info)
   message.delete()
    
  } else {
    
       let info = new Discord.RichEmbed()
   .setTitle(":ambulance: RIP :ambulance:")
   .addField("User", member, true)
   .addField("Letzte Sätze", grund2)
   .addField("Datum" , `${moment.utc(member.now).locale('de').format("dddd, Do MMMM YYYY, HH:mm:ss")}`, true)
   .setColor("DARKBLUE")
   .setTimestamp()
   .setThumbnail(member1.avatarURL)
   message.channel.send(info)
   message.delete()
  }

   
   }