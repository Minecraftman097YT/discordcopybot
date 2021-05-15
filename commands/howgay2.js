const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  //bc!8ball <question asdff>
  if (!args[100000]) return message.reply("**Bitte Gay was Ordentliches!**");
  let replies = [
    "Ja",
    "Nein",
  ];

  let result = Math.floor(Math.random() * replies.length);
  let question = args.slice(0).join(" ");

  let ballembed = new Discord.RichEmbed()
    .setTitle("Gay-O-Meter")
    .addField("Frage", "Bin ich Gay?")
    .addField("Antwort", replies[result])
    .setColor("DARKBLUE")
    .setThumbnail(bot.user.avatarURL) .setAuthor(message.author.tag);
  
  message.channel.send(ballembed);
  message.delete()
};

module.exports.help = {
  name: "8ball"
};
