const Discord = require("discord.js");

exports.run = (bot, message, args) => {

    const Help = new Discord.RichEmbed()
      .setTitle("**Our DNS Is:**", "------------------------")
      .addField("8.8.8.8", "------------------------")
      .addField("Or", "------------------------")
      .addField("EU-Central-1", "------------------------")
      .setColor("RANDOM")
      .setFooter(`Thanks me Later c:`);
    message.channel.send(Help);
    message.delete()
}