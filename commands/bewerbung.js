const Discord = require("discord.js");

exports.run = (bot, message, args) => {

    const Help = new Discord.RichEmbed()
      .setTitle("**:man_in_tuxedo: Prime Empire Bewerbung :woman_in_tuxedo:**", "------------------------")
      .setDescription("**Bitte füllt Folgendes Formular aus, um eine Bewerbung zu Schreiben.**")
      .addField("**Formular:**","> **Name: <dein name>** \n> **Alter: <Alter>** \n> **Warum auf den Server: <beschreibung hier>** \n> **Erfahrung: <erfahrung hier>**")
      .setColor("ORANGE")
      .setFooter(``);
    message.channel.send(Help);
    message.delete()
}