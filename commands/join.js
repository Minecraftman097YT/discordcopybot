const Discord = require("discord.js");

exports.run = (bot, message, args) => {

    const Help = new Discord.RichEmbed()
      .setTitle("**PixelBlock.EU**", "------------------------")
      .setDescription("Hier siehst du unsere Server Adresse und Version.")
      .addField("Adresse:", "**PixelBlock.EU**")
      .addField("Version:", "**1.12.2 bis 1.16.5**")
      .addField("Shop:", "**Benutze den Befehl** ***/shop***!")
      .setColor("ORANGE")
      .setFooter(``);
    message.channel.send(Help);
    message.delete()
}