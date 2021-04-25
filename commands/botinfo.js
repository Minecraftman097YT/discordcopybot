const Discord = require("discord.js");

exports.run = (bot, message, args) => {
  const Help = new Discord.RichEmbed()
    .setTitle("**__Bot Info__**")
    .addField("👑BotName👑:", "``Prime Empire Bot``")
    .addField("👷‍Erstellt am👷‍:", "``Unknown``")
    .addField(
      "👨‍💼BotOwner👨‍💼:",
      "`Minecraftman097#9999`"
    )
    .addField("🤖Botversion🤖:", "`12.0.0`")
    .addField("👽BotSprache👽:", "`Javascript`")
    .addField("**User**", `Unknown`)
    .setColor("DARKBLUE")
    .setThumbnail(bot.user.avatarURL)
    .setFooter(`Angefragt von: ${message.author.tag}`);

  message.channel.send(Help);
  message.delete();
};

