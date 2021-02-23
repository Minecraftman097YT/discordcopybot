const Discord = require("discord.js");

exports.run = (bot, message, args) => {


    const Help = new Discord.RichEmbed()
      .setTitle("**Send a Schreenshot from:**")
      .addField("Discord Server", "***Make a Schreenshot from your Discord servers!***")
      .addField("Agar.io Stats", "***Go on your Agar.io Profile and make from this a Schreenshot!***")
      .setColor("RANDOM")
      .setFooter(`Make it or Kick ^^`,);
    message.channel.send(Help);
    message.delete()
}