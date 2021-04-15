const { MessageEmbed } = require("discord.js");
const ms = require("ms");
module.exports = {
  name: "giveaway",
  description: "Create a simple giveaway",
  usage: "<time> <channel> <prize>",
  category: "fun",
  run: async (bot, message, args) => {
    if (!args[0]) return message.channel.send(`Du Hast keine Zahl Angegeben!`);
    if (
      !args[0].endsWith("d") &&
      !args[0].endsWith("h") &&
      !args[0].endsWith("m")
    )
      return message.channel.send(
        `Du Hast nicht die Richtige Einstellung für die Zeit gemacht!!`
      );
    if (isNaN(args[0][0])) return message.channel.send(`Das ist keine Zahl!`);
    let channel = message.mentions.channels.first();
    if (!channel)
      return message.channel.send(
        `Ich Kann den Channel nicht finden!!`
      );
    let prize = args.slice(2).join(" ");
    if (!prize) return message.channel.send(`Kein Preis!`);
    message.channel.send(`*Giveaway in ${channel} Erstellt!*`);
    let Embed = new MessageEmbed()
      .setTitle(`New giveaway!`)
      .setDescription(
        `Der User ${message.author} Macht ein Giveaway und ihr Könnt **${prize}** Gewinnen!`
      )
      .setTimestamp(Date.now() + ms(args[0]))
      .setColor(`BLUE`);
    let m = await channel.send(Embed);
    m.react("🎉");
    setTimeout(() => {
      if (m.reactions.cache.get("🎉").count <= 1) {
        message.channel.send(`Reactions: ${m.reactions.cache.get("🎉").count}`);
        return message.channel.send(
          `Nicht Genug Member haben Mitgemacht!`
        );
      }

      let winner = m.reactions.cache
        .get("🎉")
        .users.cache.filter((u) => !u.bot)
        .random();
      channel.send(
        `Der Gewinner von **${prize}** ist... ${winner}`
      );
    }, ms(args[0]));
  },
};