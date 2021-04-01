const Discord = require("discord.js");

exports.run = (bot, message, args) => {

    const Help = new Discord.RichEmbed()
      .setTitle("**GamingTreff Team Commands:**", "------------------------")
      .addField("**_warn**","***Verwarne ein Mitglied.***")
      .addField("**_clear**", "***Lösche die Nachrichten in einen Chat.***")
      .setColor("GREEN")
      .      . dir Serverinfo an.***")
      setColor("GREEN")
      .setFooter(`Vi
el Spaß`);
    message.channel.send(Help);
    message.delete()}