const Discord = require("discord.js");

exports.run = (bot, message, args) => {
  
  
  const Help = new Discord.RichEmbed()
    .setTitle("**PixelBlock.EU Bot Commands:**", "------------------------")
    .setDescription("**Alle Commands wurden in Kategorien aufgeteilt.**")
    .addField("**Admin Commands**", "**!clear <1-100>** - Lösche Beliebig nachrichten aus dem Chat.\n")
    .setColor("FF8000")
    .setFooter(`Angefragt von: ${message.author.tag}`);
  message.channel.send(Help);
  message.delete();
};
module.exports.command = {
  name: "help",
  aliases: ["ui"],
  description: "Gives user information of tagged user of you!",
  category: "Util",
  usage: "help"
};