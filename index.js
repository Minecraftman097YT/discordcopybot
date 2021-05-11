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
let welcome = JSON.parse(fs.readFileSync("./storages/welcome.json", "utf8"));
let leave = JSON.parse(fs.readFileSync("./storages/leave.json", "utf8"));
const fs = require("fs");

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
      name: "Chats von Prime Empire",
      type: "LISTENING",
      url: "https://www.twitch.tv/minecraftman097"
    }
  }
  );
  bot.user.setStatus("online");
});

//Commands Ohne Prefix
bot.on('message', message => {
  if (message.content === 'Hallo') {
    message.channel.send('>>> **Hallo. Wie Geht es dir?**');
  }
});

bot.on('message', message => {
  if (message.content === 'Gut') {
    message.channel.send('>>> **Freut mich.**');
  }
});

bot.on('message', message => {
  if (message.content === 'Schlecht') {
    message.channel.send('>>> **Ok. Ich Hoffe, Dir geht es bald Besser.**');
  }
});

bot.on('message', message => {
  if (message.content === 'lol') {
    message.channel.send('>>> **Was? Findest du es Etwa Lustig? Komisch...**');
  }
});

bot.on('message', message => {
  if (message.content === 'ja') {
    message.channel.send('>>> **Was?!**');
  }
});

//Welcome-Bye

bot.on("guildMemberAdd", member => {
  let joinServer = member.guild.channels.get(welcome[member.guild.id].wID);
  let joinEmbed = new Discord.RichEmbed()
    .setTitle("Willkommen")
    .setDescription(
      `${member} kommt sofort! \nSeit nett zu ihn und schreibt **Willkommen**!`
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
    .setTitle("Aufwiedersehn")
    .setDescription(
      `${member} hat unsernen Server ${member.guild.name} verlassen! \nWir hoffen du hattes eine schöne zeit bei uns!`
    )
    .setThumbnail(
      "https://media1.giphy.com/media/l396M3jF14DXr9mog/giphy.gif?cid=790b7611b25f12e79fe8320ecbc63a7289a1dd3808bbc3b1&rid=giphy.gif"
    )
    .setColor("RED");

  if (!leaveChannel) return;
  leaveChannel.send(leaveEmbed);
});


//Irgendwas
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
  await fetch("https://tkrbotiscord.glitch.me").then(console.log("pinged"));
}, 22000);

bot.login(TOKEN);
//https://tkrbotiscord.glitch.me