const Discord = require("discord.js");

exports.run = (bot, message, args) => {
  const Partner = new Discord.RichEmbed()
    .setTitle("<:PrimeEmpire:820742150915358761> **Prime Empire** ", "------------------------")
    .setDescription(
      "<a:info:827806069404205076> **Hier werden die Partner von** ***Prime Empire*** **Aufgelistet**!"
    )
    .addField("Partner1 ", "[Link]")
    .setColor("ORANGE")
    .setFooter(``);
  message.channel.send(Partner);
  message.delete();
};