const Discord = require("discord.js");
var math = require("mathjs");
exports.run = (bot, message, args, prefix) => {
  if (message.author.bot) return;
  let input = args.join(" ");
  if (!input) {
    message.reply(
      "Bitte geben Sie eine mathematische Gleichung an, die der Rechner lösen kann!"
    );
    return;
  }

  const question = args.join(" ");

  let answer;
  try {
    answer = math.eval(question);
  } catch (err) {
    return message.reply(`**ungültige mathematische Gleichung:** ${err}`);
  }

  const embed = new Discord.RichEmbed()
    .setTitle("Aufgabe und Lösung:")
    .setThumbnail(
      "https://icon-icons.com/icons2/923/PNG/512/calculator_icon-icons.com_72046.png"
    )
    .setColor("DARKBLUE")
    .addField("**Rechnung:**", question, true)
    .addField("**Lösung:**", answer);

  message.channel.send({
    embed
  });
};
