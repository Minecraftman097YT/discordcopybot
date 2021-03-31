const Discord = require("discord.js");

exports.run = (bot, message, args) => {


    const Help = new Discord.RichEmbed()
      .setTitle("**GamingTreff**")
      .addField(".", "Hallo und Willkommen auf GamingTreff! /n======================== /nIch hoffe, ihr nimmt euch Zeit, Diesen Text Durchzulesen weil er schon Mühe und Zeit Gebraucht Hatte.../n ======================== /n -> Über Uns: /nWir sind ein Kleines Server Netzwerk Wo ihr Guten Support bekommt und jemanden Finden Könnt, mit dem ihr Spielen Könnt. Außerdem Haben wir noch Kleine Minigames und Viele Talks, damit ihr Spaß auf unserem Server habt. /n-> Das Team: /nUnser Serverteam ist Immer zu Erreichen ob Support-Ticket oder PN (Privatnachricht). Außerdem Ist das serverteam Nett und Hilft euch Bei jeder Kleinigkeit. /n-> Was haben Wir?: /n- Viele Talks zum Reden /n- Kompetentes Team /n- Gute Server-struktur/n - Giveaways /n-> Was bekommt ihr?: /n- Viele Coole Internet Freunde /n- Viele Die mit dir Spiele Spielen /n- Casino Ränge zum Freischalten /n- Viele Giveaways /n/nIch Hoffe, Das ich dir Ermutigt Habe, unseren Server beizutreten und ein Teil unseres Netzwerks Wirst! /nWir Freuen Uns auf Dich! /n======================== /nPermanenten Link: /n[Link](https://discord.gg/HqrHM5UQpk)")
      .setColor("RANDOM")
      .setFooter(`.`);
    message.channel.send(Help);
    message.delete()
}