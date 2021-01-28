const Discord = require("discord.js");

const bot = new Discord.Client();

const snekfetch = require("snekfetch");

exports.run = async (bot, message, args) => {
  try {
    const { body } = await snekfetch

      .get("https://www.reddit.com/r/dankmemes.json?sort=top&t=week")

      .query({ limit: 800 });

    const allowed = message.channel.nsfw
      ? body.data.children
      : body.data.children.filter(post => !post.data.over_18);

    if (!allowed.length)
      return message.channel.send("I'm Sry i have no more Memes to send :c");

    const randomnumber = Math.floor(Math.random() * allowed.length);

    const embed = new Discord.RichEmbed()

      .setColor("RANDOM")

      .setTitle(allowed[randomnumber].data.title)
      .addField("(bot hosting by Minecraftman097#9490)", "bot hosting by Minecraftman097#9490)")

      .setDescription("Geposted bei: " + allowed[randomnumber].data.author)

      .setImage(allowed[randomnumber].data.url)

      .addField(
        "Up Votes/Kommentare:",
        "Up Votes: " +
          allowed[randomnumber].data.ups +
          " / Kommentare: " +
          allowed[randomnumber].data.num_comments
      );

    message.channel.send(embed);
  } catch (err) {
    return console.log(err);
  }
}