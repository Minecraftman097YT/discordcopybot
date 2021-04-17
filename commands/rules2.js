const Discord = require("discord.js");

exports.run = (bot, message, args) => {
  const Help = new Discord.RichEmbed()
    .setTitle("<:PrimeEmpire:820742150915358761> **Prime Empire Regelwerk** ", "------------------------")
    .setDescription(
      "<a:info:827806069404205076> Lest euch die Regeln Durch, um keine Verwarnung zu Bekommen."
    )
    .addField("", ".")
    .addField("", ".")
    .addField("", ".")
    .addField("", ".")
    .addField("", ".")
    .addField("", ".")
    .addField("", ".")
    .addField("", ".")
    .addField("", ".")
    .addField("", ".")
    .addField("", ".")
    .addField("", ".")
    .addField("", ".")
    .addField("")
    .addField("Invite:", "[Klicke Hier](https://discord.gg/qAjrrkQADQ)")
    .setColor("GREEN")
    .setFooter(``);
  message.channel.send(Help);
  message.delete();
};