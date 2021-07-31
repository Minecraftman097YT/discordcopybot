const Discord = require("discord.js");

exports.run = (bot, message, args) => {
  
  
  const Help = new Discord.RichEmbed()
    .setTitle("**PixelBlock.EU Bot Commands:**", "------------------------")
    .setDescription("**Alle Commands wurden in Kategorien aufgeteilt.**")
    .addField("**Admin Commands**", "**/clear <1-100>** - Lösche Beliebig nachrichten aus dem Chat.\n**/joinvc <name>** - Lass den Bot in einen Sprachkanal gehen.\n**/poll** - Mach Umfragen mit dem Bot.\n**/reload** - Starte den bot neu.")
    .addField("**User Commands**", "**/help** - Lass dir diese Nachricht anschauen.\n**/ping** - Sehe den Bot-Ping.\n**/team** Sehe die Teamliste.\n**/witz** - Der Bot Erzählt dir ein Witz.\n**/8ball <frage>** - Frage dem Bot eine Frage, und der Bot Antwortet mit was Vollkommend Unerwartetem.\n**/ddos <@user>** - Pranke deine Freunde indem du diesen Befehl machst.\n**/botinfo** - Sehe eine Kleine Info über dem Bot.\n**/shop** - Bekomme einen Link, der zu unserem Shop führt.")
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