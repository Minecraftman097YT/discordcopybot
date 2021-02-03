const Discord = require("discord.js");

exports.run = (bot, message, args) => {

    const Help = new Discord.RichEmbed()
      .setTitle("**ER:LC Roleplay Regeln!**", "------------------------")
      .addField("§1", "Feuerwehr/Medic ist unantastbar (bsw.:nicht als geisel möglich usw.)")
      .addField("2.", "§2 Es gelten die STVO wie ingame. (in einer 50 Zone auch 50 fahren ausgenommen Kriminelle)")
      .addField("3.", "Feed Clan Member Ingame!")
      .addField("4.", "Do not Teamkilling!")
      .addField("5.", "Always use our Tag (⏤͟͟͞★ᴛᴋ͢ʀ㉶) Ingame!")
      .addField("6.", "Don't Random Team!")
      .setColor("RANDOM")
      .setFooter(`Follow the Rules to get no Warn!`);
    message.channel.send(Help);
    message.delete()
}