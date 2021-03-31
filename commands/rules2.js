const Discord = require("discord.js");

exports.run = (bot, message, args) => {

    const Help = new Discord.RichEmbed()
      .setTitle("**GamingTreff Regelwerk**", "------------------------")
      .addField("1.", "Kein Spam oder Beleidigungen im Chat und im Talk")
      .addField("2.", "Keine Werbung für andere Server im Chat oder per Privat nachricht")
      .addField("3.", "Kein ChannelHopping in Talks (Ständige Wechseln von Talk zu Talk)")
      .addField("4.", "Achte auf deine Wortwahl Überall auf den Server!")
      .addField("5.", "Ränge dürfen nicht Missbraucht werden für JEDEN")
      .addField("6.", "Capslock ist auf den Server Untersagt!")
      .setColor("RANDOM")
      .setFooter(`Bei Verstoßen der Regeln kann es zu Mute/Kick/Warn/Ban Führen!`);
    message.channel.send(Help);
    message.delete()
}