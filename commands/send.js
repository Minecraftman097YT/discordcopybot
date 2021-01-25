const Discord = require("discord.js");

exports.run = (bot, message, args) => {


    const Help = new Discord.RichEmbed()
      .setTitle("**Send**")
      .addField("<@&801879827459211377>", "")
      .addField("", "")
      .addField("``*ban``", "Ban ein User :joy:")
      .addField("``*kill``", "Kill ein User :joy:")
      .setColor("RANDOM")
      .setFooter(`Requested by: ${message.author.tag}`,);
    message.channel.send(Help);
    message.delete()
}