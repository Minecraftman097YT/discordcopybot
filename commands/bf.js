const Discord = require("discord.js");

exports.run = (bot, message, args) => {

    const Help = new Discord.RichEmbed()
      .setTitle("**Prime Empire Bug-/Fehlermeldung**", "------------------------")
      .setDescription("**Bitte füllt Folgendes Formular aus, um eine Bug-/Fehlermeldung zu Schreiben.")
      .addField("**Formular:**","**Name: <dein name> \nType: <Bug oder Fehlermeldung> \nDatum + Uhrzeit: <Heutiges Datum + Uhrzeit> \nBeschreibung: <beschreibung des Bugs oder Fehlermeldung> \nBeweis: <screenshot, video etc.>**")
      .setColor("ORANGE")
      .setFooter(``);
    message.channel.send(Help);
    message.delete()
}