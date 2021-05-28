const Discord = require("discord.js");

exports.run = (bot, message, args) => {

    const Help = new Discord.RichEmbed()
      .setTitle("**Prime Empire**", "------------------------")
      .setDescription("Du Kannst Gerne mal Vorbei Schauen!")
      .addField("**Wartung!**","***Der Befehl Befindet sich Aktuell in einer Wartungsphase! Bitte Warten.***")
      .setColor("RED")
      .setFooter(`.`);
    message.channel.send(Help);
    message.delete()
}