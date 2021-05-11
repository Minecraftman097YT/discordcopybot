const Discord = require("discord.js");

exports.run = (bot, message, args) => {
  
  
  const Help = new Discord.RichEmbed()
    .setTitle("**Prime Empire Bot Commands:**", "------------------------")
    .addField("**_partner**", "Benutzung: **_partner**\n**In Wartungen**")
    .addField("**_meme**", "Benutzung: **_meme**")
    .addField("**_ping**", "Benutzung: **_ping**")
    .addField("**_rules**", "Benutzung: **_rules**\n*In Wartungen!")
    .addField("**_botinfo**", "Benutzung: **_botinfo**")
    .addField("**_report**", "Benutzung: **_report <@user> <grund>**")
    .setColor("GREEN")
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