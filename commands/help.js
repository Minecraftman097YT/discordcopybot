const Discord = require("discord.js");

exports.run = (bot, message, args) => {

    const Help = new Discord.RichEmbed()
      .setTitle("**Bot Commands:**", "------------------------")
      .addField("***dns**","***See What Our DNS Is or our Region.***")
      .addField("***require**", "***See what a Member Need to have.***")
      .addField("***send**", "***This command is only for*** <#801833138497519697> ***Because You can use it in All Channels!***")
      .setColor("RANDOM")
      .setFooter(`Thanks me Later c:`);
    message.channel.send(Help);
    message.delete()
}