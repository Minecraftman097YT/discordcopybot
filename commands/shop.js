const Discord = require("discord.js");

exports.run = (bot, message, args) => {

    const Help = new Discord.RichEmbed()
      .setTitle("**PixelBlock.EU Shop**", "------------------------")
      .setDescription("**Hier wirst du auf unseren Shop weitergeleitet!**")
      .addField("**Link:**","``https://shop.pixelblock.eu/`` oder **[Klicke Hier](https://shop.pixelblock.eu/)**")
      .setColor("ORANGE")
      .setFooter(``);
    message.channel.send(Help);
    message.delete()
}