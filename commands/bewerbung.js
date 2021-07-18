const Discord = require("discord.js");

exports.run = (bot, message, args) => {

    const Help = new Discord.RichEmbed()
      .setTitle("**: Prime Empire Bug-/Fehlermeldung ⛔️**", "------------------------")
      .setDescription("**Bitte füllt Folgendes Formular aus, um eine Bug-/Fehlermeldung zu Schreiben.**")
      .addField("**Formular:**","**> Name: <dein name> \n> Type: <Bug oder Fehlermeldung> \n> Datum + Uhrzeit: <Heutiges Datum + Uhrzeit> \n> Beschreibung: <beschreibung des Bugs oder Fehlermeldung> \n> Beweis: <screenshot, video etc.>**")
      .setColor("ORANGE")
      .setFooter(``);
    message.channel.send(Help);
    message.delete()
}