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
const fs = require("fs");
const db = require("quick.db") //using quick.db package

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

bot.on("ready", async () => {
  console.log(`${bot.user.username}, is online and is in ${bot.guilds.size}`);
  function changing_status() {
    let status = [
      "Willkommen auf PixelBlock.EU",
      "/help | Discord",
      "/help | Community",
      "/help | PixelBlock.EU",
      "/help | v.12.2.7"
    ];
    let randomStatus = status[Math.floor(Math.random() * status.length)];
    bot.user.setActivity(randomStatus, { type: "PLAYING" });
                                               //"LISTENING"
                                              //"STREAMING"
                                            //"PLAYING"
    bot.user.setStatus("online");
  }
  setInterval(changing_status, 5000);
});

//Commands Ohne Prefix
bot.on('message', message => {
  if (message.content === 'Hallo') {
    message.channel.send('Hallo. Wie Geht es dir?');
  }
});

bot.on('message', message => {
  if (message.content === 'hallo') {
    message.channel.send('Hallo. Wie Geht es dir?');
  }
});


bot.on('message', message => {
  if (message.content === 'Gut') {
    message.channel.send('Freut mich, dass es dir gut geht.');
  }
});

bot.on('message', message => {
  if (message.content === 'gut') {
    message.channel.send('Freut mich, dass es dir gut geht.');
  }
});

bot.on('message', message => {
  if (message.content === 'Schlecht') {
    message.channel.send('Ok. Ich hoffe, dir geht es bald besser.');
  }
});

bot.on('message', message => {
  if (message.content === 'schlecht') {
    message.channel.send('Ok. Ich hoffe, dir geht es bald besser.');
  }
});

bot.on('message', message => {
  if (message.content === 'lol') {
    message.channel.send('Was? Findest du das etwa lustig? Komisch...');
  }
});

bot.on('message', message => {
  if (message.content === 'Lol') {
    message.channel.send('Was? Findest du das etwa lustig? Komisch...');
  }
});

bot.on('message', message => {
  if (message.content === 'Nice') {
    message.channel.send('Cool! Freut mich!')
  }
})

bot.on('message', message => {
  if (message.content === 'nice') {
    message.channel.send('Cool! Freut mich!')
  }
})



bot.on('message', message => {
  if (message.content === 'willkommen') {
    message.channel.send('╔══════ ≪≫°✺°≪ ≫ ══════╗\n♥♡♥♡♥**Willkommen**♥♡♥♡♥\n╚══════ ≪≫°✺°≪ ≫ ══════╝');
  }
});

bot.on('message', message => {
  if (message.content === 'Willkommen') {
    message.channel.send('╔══════ ≪≫°✺°≪ ≫ ══════╗\n♥♡♥♡♥**Willkommen**♥♡♥♡♥\n╚══════ ≪≫°✺°≪ ≫ ══════╝');
  }
});

setInterval(async () => {
  await fetch("https://tkrbotiscord.glitch.me").then(console.log("pinged"));
}, 22000);

bot.login(TOKEN);
//https://tkrbotiscord.glitch.me