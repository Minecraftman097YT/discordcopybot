const Discord = require("discord.js");

exports.run = (bot, message, args) => {


    const Help = new Discord.RichEmbed()
      .setTitle("**Requirments**")
      .addField("Level:", "***50+***")
      .addField("Average:", "***950+***")
      .addField("Survival Time:", "***40 Minutes or More***")
      .addField("Highscore:", "***40K+***")
      .setColor("RANDOM")
    message.channel.send(Help);
    message.delete()
}