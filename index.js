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
const fetch = require('node-fetch')


const prefix = config.prefix;

bot.on("message", message => {
  let args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  let cmd = args.shift().toLowerCase();
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  // Command Handler
  try {
    delete require.cache[require.resolve(`./commands/${cmd}.js`)];

    let commandFile = require(`./commands/${cmd}.js`);

    commandFile.run(bot, message, args);
  } catch (e) {
    console.log(e.stack);
  }
});

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
  console.log(`${bot.user.tag} ist nie Offline!`);
  bot.user.setPresence({
    game: {
      name: `Maintance`,
      type: "WATCHING",
      url: "https://www.twitch.tv/minecraftman097"
    }
  });
  bot.user.setStatus("dnd");
});


bot.on("guildMemberRemove", member => {
  let msgchannel = member.guild.channels.find(`name`, "👋✔willkommen-und-bye👋✔");
  msgchannel.send(`${member} hat ShadowClan verlassen! :frowning::sob: (bot hosting by Minecraftman097#9490)`);
});

bot.on("guildMemberAdd", member => {
  let msgchannel = member.guild.channels.find(`name`, "【👋】𝗪𝗲𝗹𝗰𝗼𝗺𝗲");
  msgchannel.send(`>>> ${member} ***Welcome to ⏤͟͟͞★ᴛᴋ͢ʀ㉶Family🌟!*** **Plese Send your Discord Server and Agar.io Stats when you will Join the Clan!** **When you will be a** <@&803229525558951987>**, Write** ``I Will be a Guest```);
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

setInterval(async () => {
  await fetch('https://tkrbotiscord.glitch.me').then(console.log('Pinged!'))
}, 240000)

bot.login(TOKEN);