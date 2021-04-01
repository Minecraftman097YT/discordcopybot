const Discord = require("discord.js");

exports.run = (bot, message, args) => {

    const Help = new Discord.RichEmbed()
      .setTitle("**GamingTreff Commands:**", "------------------------")
      .addField("**_partner**","***Sehe unseren Partnertext.***")
      .addField("**_meme**", "***Schau dir Lustige Memes an ;)***")
      .addField("**_ping**", "***Schau dir gerne den Bot-Ping an.***")
      .addField("**_rules**", "***Schau dir die Regeln an.***")
      .addField("**_botinfo**", "***Schau dir die Botinfo an.***")
      .addField("**_serverinfo**", "***Schau dir Serverinfo an.***")
      .addField("**_report**", "***Melde ein Mitglied.***")
      .setColor("GREEN")
      .setFooter(`Viel Spaß`);
    message.channel.send(Help);
    message.delete()
}