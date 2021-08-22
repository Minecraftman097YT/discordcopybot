const Discord = require("discord.js");

exports.run = (bot, message, args) => {
  const Help = new Discord.RichEmbed()
    .setTitle("**__Bot Info__**")
    .addField("👑BotName👑:", "``Prime Empire``")
    .addField("👨‍💼BotOwner👨‍💼:","<@810648022240591893>, <@643825307790344193>")
    .addField("🤖Botversion🤖:", "`12.0.0`")
    .addField("👽BotSprache👽:", "`Javascript`")
    .setColor("DARKBLUE")
    .setThumbnail(bot.user.avatarURL)
    .setFooter(`Angefragt von: ${message.author.tag}`);

  message.channel.send(Help);
  message.delete();
};

