var express = require("express");
var app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);

const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./storage/config.json");
const TOKEN = process.env.TOKEN;

const prefix = config.prefix;

bot.on("message", message => {
  let args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  let cmd = args.shift().toLowerCase();
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

function doMagic8BallVoodoo() {
  var rand = [
    "Yes",
    "No",
    "Why are you even trying?",
    "What do you think? NO",
    "Maybe",
    "Never",
    "Yep"
  ];

  return rand[Math.floor(Math.random() * rand.length)];
}

bot.on("ready", () => {
  console.log(`${bot.user.tag} ist Online!
[${bot.users.size}] User
[${bot.guilds.size}] Server`);
});

bot.on("ready", () => {
  bot.user.setPresence({
    game: {
      name: `Maintance | Wartung!`,
      type: "PLAYING",
      url: ""
    }
  });
  setTimeout(() => {
    bot.user.setPresence({
      game: {
        name: `.`,
        type: "WATCHING",
        url: ""
      }
    });
    bot.user.setStatus("idle");
  }, 5000);
});



bot.on("guildMemberRemove", member => {
  let msgchannel = member.guild.channels.find(`name`, "👋join-leavs👋");
  msgchannel.send(`${member} hat ***LeetGames*** verlassen! :frowning::sob:`);
});

bot.on("guildMemberAdd", member => {
  let msgchannel = member.guild.channels.find(`name`, "👋join-leavs👋");
  msgchannel.send(`${member} ist ***LeetGames*** beigetreten! :tada:`);
});

bot.on("message", message => {
   if (message.content.toLowerCase() === 'TMSf8ball') {
    let sEmbed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle("8ball")
  .addDescriptition('Your anwser is:' + doMagic8BallVoodoo())
    message.channel.send(sEmbed)
  }
});

bot.login(TOKEN);