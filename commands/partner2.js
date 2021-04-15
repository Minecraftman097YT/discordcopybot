const Discord = require("discord.js");

exports.run = (bot, message, args) => {
  const Help = new Discord.RichEmbed()
    .setTitle(" **Prime Empire** ", "------------------------")
    .setDescription(
      "<a:info:827806069404205076> **Joint** gerne Prime Empire, denn wir bieten sehr viele **Coole** Sachen! **Wie zB:**"
    )
    .addField(":performing_arts:", "Self Roles")
    .addField(":speech_balloon:", "Viele Chats")
    .addField(":loud_sound:", "Viele Sprachkanäle")
    .setColor("ORANGE")
    .setFooter(``);
  message.channel.send(Help);
  message.delete();
};
