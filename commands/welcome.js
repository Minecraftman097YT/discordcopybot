const Discord = require("discord.js");

exports.run = (bot, message, args) => {
  const Help = new Discord.RichEmbed()
    .setTitle("**Willkommen!**")
    .addField("👑", "**Willkommen Neuling!** \n<a:Wel:847095574917283840><a:come:847095686209732649>")
    .setColor("DARKBLUE")
    .setThumbnail(bot.user.avatarURL)
    .setFooter(`Angefragt von: ${message.author.tag}`);

  message.channel.send(Help);
  message.delete();
};