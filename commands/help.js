const Discord = require("discord.js");

exports.run = (bot, message, args) => {

    const Help = new Discord.RichEmbed()
      .setTitle("**Bot Commands:**", "------------------------")
      .addField("***help**","***Damit siehst du diese Nachricht.***")
      .addField("***meme**", "***Schau dir paar Lustige Memes an ;).***")
      .addField("***ping**", "***Schau dir an, was für eine Leistung der Bot Gerade hat.***")
      .setColor("RANDOM")
      .setFooter(`Was soll hier hin? xD`);
    message.channel.send(Help);
    message.delete()
}