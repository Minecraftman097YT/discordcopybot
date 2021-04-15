const Discord = require("discord.js");

exports.run = (bot, message, args) => {

    const Help = new Discord.RichEmbed()
      .setTitle("**Prime Empire**", "------------------------")
      .addField("")
      .setColor("RED")
      .setFooter(`.`);
    message.channel.send(Help);
    message.delete()
}    