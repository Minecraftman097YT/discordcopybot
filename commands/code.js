const Discord = require("discord.js");

exports.run = (bot, message, args) => {

    const Help = new Discord.RichEmbed()
      .setTitle("**Germany RP**", "------------------------")
      .addField("**Code**","***Der Code von unseren RP Server ist: \n***")
      .setColor("RED")
      .setFooter(`.`);
    message.channel.send(Help);
    message.delete()
}