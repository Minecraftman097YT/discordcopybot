const Discord = require("discord.js");

exports.run = (bot, message, args) => {

    const Help = new Discord.RichEmbed()
      .setTitle("**GamingTreff Regelwerk**", "------------------------")
      .addField("1.", "Kein Spam oder Beleidigungen im Chat und im Talk")
      .addField("2.", "Keine Werbung für andere Server im Chat oder ")
      .addField("3.", "Feed Clan Member Ingame!")
      .addField("4.", "Do not Teamkilling!")
      .addField("5.", "Always use our Tag (⏤͟͟͞★ᴛᴋ͢ʀ㉶) Ingame!")
      .addField("6.", "Don't Random Team!")
      .setColor("RANDOM")
      .setFooter(`Follow the Rules to get no Warn!`);
    message.channel.send(Help);
    message.delete()
}