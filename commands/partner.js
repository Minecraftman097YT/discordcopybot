const Discord = require("discord.js");

exports.run = (bot, message, args) => {
  const Help = new Discord.RichEmbed()
    .setTitle("Hallo und Willkommen zu **GamingTreff**")
    .addField(
      "========================",
      "Ich hoffe, ihr nimmt euch Zeit, Diesen Text Durchzulesen weil er schon Mühe und Zeit Gebraucht Hatte..."
    )
    .addField(
      "-> Über uns:",
      "Wir sind ein Kleines Server Netzwerk Wo ihr Guten Support bekommt und jemanden Finden Könnt, mit dem ihr Spielen Könnt. Außerdem Haben wir noch Kleine Minigames und Viele Talks, damit ihr Spaß auf unserem Server habt."
    )
    .addField(
      "-> Das Team:",
      "Unser Serverteam ist Immer zu Erreichen ob Support-Ticket oder PN (Privatnachricht). Außerdem Ist das serverteam Nett und Hilft euch Bei jeder Kleinigkeit."
    )
    .addField("-> Was haben wir:", ".")
    .addField("1.", "Viele Talks zum Reden")
    .addField("2.", "Kompetentes Team")
    .addField("3.", "Gute Server-Struktur")
    .addField("4.", "Giveaways")
    .addField("-> Was bekommt ihr:", ".")
    .addField("1.", "Viele Coole Internet Freunde")
    .addField("2.", "Viele Die mit dir Spiele Spielen")
    .addField("3.", "Casino Ränge zum Freischalten")
    .addField("4.", "Viele Giveaways")
    .addField(
      "Ich Hoffe, Das ich dir Ermutigt Habe, unseren Server beizutreten und ein Teil unseres Netzwerks Wirst!",
      "Wir Warten auf Dich!"
    )
    .addField("Invite:", "https://discord.gg/HqrHM5UQpk")
    .setImage('https://cdn.discordapp.com/attachments/823359908690919455/826910403128721408/PicsArt_03-30-10.10.02.jpg')
    .setColor("ORANGE")
    .setFooter(``);
  message.channel.send(Help);
  message.delete();
};