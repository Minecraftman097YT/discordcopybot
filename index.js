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
const fetch = require("node-fetch");
const fs = require("fs");
let welcome = JSON.parse(fs.readFileSync("./storage/welcome.json", "utf8"));
let leave = JSON.parse(fs.readFileSync("./storage/leave.json", "utf8"));

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

bot.on("ready", async () => {
  console.log(`${bot.user.username}, is online and is in ${bot.guilds.size}`);
  function changing_status() {
    let status = [
      "BETA | V 1.1.1",
      "Bei Bugs/Fragen Minecraftman097#9999 Anschreiben."
    ];
    let randomStatus = status[Math.floor(Math.random() * status.length)];
    bot.user.setActivity(randomStatus, { type: "PLAYING" });
    bot.user.setStatus("online");
  }
  setInterval(changing_status, 20000);
});

bot.on("guildMemberAdd", member => {
  let joinServer = member.guild.channels.get(welcome[member.guild.id].wID);
  let joinEmbed = new Discord.RichEmbed()
    .setTitle("Welcome")
    .setDescription(
      `${member} Is Comming! \nBe Happy an Write to ${member} **Willkommen**!`
    )
    .setThumbnail(
      "https://media3.giphy.com/media/OkJat1YNdoD3W/giphy.gif?cid=790b7611fc6e28fa8241890e432333a4d2c5926ca4437b4a&rid=giphy.gif"
    )
    .setColor("GREEN");

  if (!joinServer) return;
  joinServer.send(joinEmbed);
});

bot.on("guildMemberRemove", member => {
  let leaveChannel = member.guild.channels.get(leave[member.guild.id].lID);
  let leaveEmbed = new Discord.RichEmbed()
    .setTitle("Goodbye")
    .setDescription(
      `${member} Have Leave ${member.guild.name}! \nWe Hope you come Back Later!`
    )
    .setThumbnail(
      "https://media1.giphy.com/media/l396M3jF14DXr9mog/giphy.gif?cid=790b7611b25f12e79fe8320ecbc63a7289a1dd3808bbc3b1&rid=giphy.gif"
    )
    .setColor("RED");

  if (!leaveChannel) return;
  leaveChannel.send(leaveEmbed);
});

setInterval(async () => {
  await fetch("https://tkrbotiscord.glitch.me").then(console.log("Pinged!"));
}, 240000);

bot.login(TOKEN);