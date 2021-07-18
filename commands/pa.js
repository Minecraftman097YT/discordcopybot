const Discord = require("discord.js");

exports.run = (bot, message, args) => {

    const Help = new Discord.RichEmbed()
      .setTitle("**Prime Empire Partnerschaftsanfrage**", "------------------------")
      .addField("**Allgemein:**","**1.Ihr müsst einen Inhaber, der das Ticket Bearbeitet, euren Server per Privat Nachricht schicken. \n\n2. Ihr müsst <#811927633931141160> Lesen / Gelesen haben. \n\n3.Ihr müsst auf die Bestätigung warten, bis die Anfagen Angenommen/Abgelehnt wurde. \n\n4. Ihr müsst <#811928066833776671> in euren Partnerchannel Folgen.**")
      .addField("**Fragen:**", "**Ihr könnt uns gerne Fragen Stellen.**")
      .setColor("ORANGE")
      .setFooter(``);
    message.channel.send(Help);
    message.delete()
}