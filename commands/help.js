const Discord = require("discord.js");

exports.run = (bot, message, args) => {
  
  
  const Help = new Discord.RichEmbed()
    .setTitle("**Prime Empire Bot Commands:**", "------------------------")
    .setDescription("**Alle Commands wurden in Kategorien aufgeteilt.**")
    .addField("**Admin Commands**", "**_clear <1-100>** - Lösche Beliebig nachrichten aus dem Chat.\n**_joinvc <name>** - Lass den Bot in einen Sprachkanal gehen.\n**_poll** - Mach Umfragen mit dem Bot.\n**_reload** - Starte den bot neu.")
    .addField("**User Commands**", "**_help** - Lass dir diese Nachricht anschauen.\n**_ping** - Sehe den Bot-Ping.\n**_witz** - Der Bot Erzählt dir ein Witz.\n**_8ball <frage>** - Frage dem Bot eine Frage, und der Bot Antwortet mit was Vollkommend Unerwartetem.\n**_ddos** - Lasse dein eigenes Internet angreifen.\n**_botinfo** - Sehe eine Kleine Info über dem Bot.")
    .setColor("FF8000")
    .setFooter(`Angefragt von: ${message.author.tag}. INFO: Die Befehle kann man GROß und in KLEIN schreiben.`);
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