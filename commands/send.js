const Discord = require("discord.js");

exports.run = (bot, message, args) => {


    const Help = new Discord.RichEmbed()
      .setTitle("**GamingTreff**")
      .addField(".", "Hallo und Willkommen auf GamingTreff!========================
Ich hoffe, ihr nimmt euch Zeit, Diesen Text Durchzulesen weil er schon Mühe und Zeit Gebraucht Hatte...
========================
-> Über Uns: 

Wir sind ein Kleines Server Netzwerk Wo ihr Guten Support bekommt und jemanden Finden Könnt, mit dem ihr Spielen Könnt. Außerdem Haben wir noch Kleine Minigames und Viele Talks, damit ihr Spaß auf unserem Server habt. 

-> Das Team: 

Unser Serverteam ist Immer zu Erreichen ob Support-Ticket oder PN (Privatnachricht). Außerdem Ist das serverteam Nett und Hilft euch Bei jeder Kleinigkeit. 

-> Was haben Wir?: 

- Viele Talks zum Reden
- Kompetentes Team
- Gute Server-struktur
- Giveaways 

-> Was bekommt ihr?: 

- Viele Coole Internet Freunde
- Viele Die mit dir Spiele Spielen
- Casino Ränge zum Freischalten
- Viele Giveaways 

Ich Hoffe, Das ich dir Ermutigt Habe, unseren Server beizutreten und ein Teil unseres Netzwerks Wirst!
Wir Freuen Uns auf Dich!
========================
Permanenten Link:
https://discord.gg/HqrHM5UQpk
")
      .setColor("RANDOM")
      .setFooter(`Make it or Kick ^^`,);
    message.channel.send(Help);
    message.delete()
}