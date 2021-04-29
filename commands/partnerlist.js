const Discord = require("discord.js");

exports.run = (bot, message, args) => {
  const Partner = new Discord.RichEmbed()
    .setTitle("<:PrimeEmpire:820742150915358761> **Prime Empire** ", "------------------------")
    .setDescription(
      "<a:info:827806069404205076> **Hier werden die Partner von** ***Prime Empire*** **Aufgelistet**!"
    )
    .addField("TLF \nInhaber: TLF#0001", "[Klicke Hier](TLF
#0001)\n**---------------**")
    .addField("Prime Empire \nInhaber: Elmar805 ツ#0805", "[Klicke Hier](https://discord.gg/qAjrrkQADQ)\n**---------------**")
    .setColor("ORANGE")
    .setFooter(`Wenn du Möchtest, Kannst du Gerne auch einen Unserem Partner Server Beitreten. Das Beitreten eines Partner Servers ist nicht Pflicht!`);
  message.channel.send(Partner);
  message.delete();
};