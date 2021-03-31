const Discord = require("discord.js");

exports.run = (bot, message, args) => {

    const Help = new Discord.RichEmbed()
      .setTitle("**GamingTreff Commands:**", "------------------------")
      .addField("**_partner**","***Sehe unseren Partnertext.***")
      .addField("**_meme**", "***Schau dir Lustige Memes an ;)***")
      .addField("**_ping**", "***Schau dir gerne den Bot-Ping an.***")
      .addField("**_rules**", "***Schau dir die Regeln an.***")
      .setColor("GREEN")
      .setFooter(`Thanks me Later c:`);
    message.channel.send(Help);
    message.delete()
}