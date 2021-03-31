const Discord = require("discord.js");

exports.run = (bot, message, args) => {
  const Help = new Discord.RichEmbed()
    .setTitle("Hallo und Willkommen zu **GamingTreff**")
    .addField(
      "========================",
      "Ich hoffe, ihr nimmt euch Zeit, Diesen Text Durchzulesen weil er schon Mühe und Zeit Gebraucht Hatte... -Viele Talks zum Reden /n- Kompetentes Team /n- Gute Server-struktur/n - Giveaways /n-> Was bekommt ihr?: /n- Viele Coole Internet Freunde /n- Viele Die mit dir Spiele Spielen /n- Casino Ränge zum Freischalten /n- Viele Giveaways /n/nIch Hoffe, Das ich dir Ermutigt Habe, unseren Server beizutreten und ein Teil unseres Netzwerks Wirst! /nWir Freuen Uns auf Dich! /n======================== /nPermanenten Link: /n[Link](https://discord.gg/HqrHM5UQpk)"
    )
    .addField(
      "-> Über uns:",
      "Wir sind ein Kleines Server Netzwerk Wo ihr Guten Support bekommt und jemanden Finden Könnt, mit dem ihr Spielen Könnt. Außerdem Haben wir noch Kleine Minigames und Viele Talks, damit ihr Spaß auf unserem Server habt."
    )
    .addField("-> Das Team:", "Unser Serverteam ist Immer zu Erreichen ob Support-Ticket oder PN (Privatnachricht). Außerdem Ist das serverteam Nett und Hilft euch Bei jeder Kleinigkeit.")
    .addField("-> Was haben wir:", "-Viele Talks zum Reden - Kompetentes Team - Gute Server-struktur - Giveaways")
    .addField("", "- Kompetentes Team")
    .addField("", "- Gute Server-Strukr")
    .addField("", "")
    .addField("", "")
    .setColor("RANDOM")
    .setFooter(`.`);
  message.channel.send(Help);
  message.delete();
};
