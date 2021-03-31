const Discord = require("discord.js");

exports.run = (bot, message, args) => {

    const Help = new Discord.RichEmbed()
      .setTitle("**⏤͟͟͞★ᴛᴋ͢ʀ㉶ Clan Rules**", "------------------------")
      .addField("1.", "Do No Multiclanning!")
      .addField("2.", "Don't be Toxic!")
      .addField("3.", "Feed Clan Member Ingame!")
      .addField("4.", "Do not Teamkilling!")
      .addField("5.", "Always use our Tag (⏤͟͟͞★ᴛᴋ͢ʀ㉶) Ingame!")
      .addField("6.", "Don't Random Team!")
      .setColor("RANDOM")
      .setFooter(`Follow the Rules to get no Warn!`);
    message.channel.send(Help);
    message.delete()
}