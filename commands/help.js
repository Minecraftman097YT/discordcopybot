const Discord = require("discord.js");

exports.run = (bot, message, args) => {
  
  
  const Help = new Discord.RichEmbed()
    .setTitle("**PixelBlock.EU Bot Commands:**", "------------------------")
    .addField("**_partner**", "Benutzung: **_partner**\n**In Wartungen**")
    .addField("**_meme**", "Benutzung: **_meme**")
    .addField("**_ping**", "Benutzung: **_ping**")
    .addField("**_rules**", "Benutzung: **_rules**\n**In Wartungen**")
    .addField("**_botinfo**", "Benutzung: **_botinfo**")
    .addField("**_report**", "Benutzung: **_report <@user> <grund>**\nBeispiel: **_report <@793165733185978448> Beste**")
    .addField("**_witz**", "Benutzung: **_witz**")
    .addField("**_8ball**", "Benutzung: **_8ball <frage>**\nBeispiel: **_8ball Bin ich Cool?**")
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