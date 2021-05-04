const Discord = require("discord.js");

exports.run = (bot, message, args) => {
  const Partner = new Discord.RichEmbed()
    .setTitle(
      "<:PrimeEmpire:820742150915358761> **Prime Empire** ",
      "------------------------"
    )
    .setDescription(
      "<a:info:827806069404205076> **Hier werden die Partner von** ***Prime Empire*** **Aufgelistet**!")
    .addField("TLF \nInhaber: TLF#0001","[Klicke Hier](https://discord.gg/92k6PhNtYq)\n**---------------**")
    .addField("Community \nInhaber: Miky#2546", "[Klicke Hier](https://discord.gg/QxczbuRJ87)\n**---------------**")
    .addField("Kuschelecke \nInhaber: Einfach nur ich#1844", "[Klicke Hier](https://discord.com/invite/S6uYxhvUNb)\n**---------------**")
    .addField("Team Toxic \nInhaber: Darky#4331", "[Klicke Hier](https://discord.gg/KUfR7JNV)\n**---------------**")
    .addField("ArrowGaming \nInhaber: unknown", "[Klicke Hier](https://discord.gg/bd7Sa7rRG9)\n**---------------**")
    .addField("GameGash \nInhaber: Cindai#0309", "[Klicke Hier](https://discord.gg/wPeJRU4qF4)\n**---------------**")
    .addField("★Chat & Gaming Lounge★ \nInhaber: flix#8194", "[Klicke Hier](https://discord.gg/u6m2Z4cbJM)\n**---------------**")
    .addField("Drip \nInhaber: Labinnac#0187", "[Klicke Hier](https://discord.gg/wNYBZrNDJW)\n**---------------**")
    .addField("Kyoko Family \nInhaber: GAMIX#3566", "[Klicke Hier](https://discord.gg/zpUufPhCQJ)\n**---------------**")
    .addField("CrazyEmpire \nInhaber: Ko.rex-hi#4904", "[Klicke Hier](https://discord.gg/DSr8HbmPGT)\n**---------------**")
    .addField("TXM \nInhaber: Moritztxm#5312", "[Klicke Hier](https://discord.gg/dHNTkmM)\n**---------------**")
    .addField("» VibeCrew Community \nInhaber: ! Akiroᵛᶤᵇᵉ#0001", "[Klicke Hier]()\n**---------------**")
    .setColor("ORANGE")
    .setFooter(
      `Wenn du Möchtest, Kannst du Gerne auch einen Unserem Partner Server Beitreten. Das Beitreten eines Partner Servers ist nicht Pflicht!`
    );
  message.channel.send(Partner);
  message.delete();
};
