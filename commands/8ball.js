const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  //bc!8ball <question asdff>
  if (!args[1]) return message.reply("Bitte Frage was Ordentliches!");
  let replies = [
    "Ja",
    "Nein",
    "Ich weiß es nicht",
    "Frage mich Später erneut!",
    "Sehr gut Dir?",
    "Hast du mich jetzt beleidigt?",
    "Es wäre eine Lüge wenn ich Nein Sage",
    "Es wäre eine Lüge wenn ich Ja Sage",
    "Bist du dir da echt sicher?",
    "War das jetzt nh Beleidigung?",
    "bin ich ein schlechter Bot?",
    "alter das war doch nh witz oder?😅",
    "ja bleibt ein ja!!",
    "das beantworte ich dir nicht, hab gerade kein bock dazu",
    "ich muss lernen mal die klappe zu halten :D",
    "Ich sollte echt lernen mal nicht zu Antworten....",
    "Nein, auf gar keinen Fall!",
    "Mach dich jetzt endlich aus meiner Leitung raus😅",
    "Ich mach gleich mit du🤣",
    "Dies sehe ich jetzt als beleidigung!",
    "Hallo",
    "xD",
    "Geh weg und lass mich Alleine"
  ];

  let result = Math.floor(Math.random() * replies.length);
  let question = args.slice(0).join(" ");

  let ballembed = new Discord.RichEmbed()
    .setTitle(":8ball: | 8Ball | :8ball:")
    .addField("Frage", question)
    .addField("Antwort", replies[result])
    .setColor("DARKBLUE")
    .setThumbnail(bot.user.avatarURL) .setAuthor(message.author.tag);
  
  message.channel.send(ballembed);
  message.delete()
};

module.exports.help = {
  name: "8ball"
};
