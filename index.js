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
      name: "Wartungen! '_partner' Bald Wieder Benutzbar!",
      type: "PLAYING",
      url: "https://www.twitch.tv/minecraftman097"
    }
  }
  );
  bot.user.setStatus("dnd");
});

//Commands Ohne Prefix
bot.on('message', message => {
  if (message.content === 'Hallo') {
    message.channel.send('Hallo. Wie Geht es dir?');
  }
});

bot.on('message', message => {
  if (message.content === 'Gut') {
    message.channel.send('Freut mich');
  }
});

bot.on('message', message => {
  if (message.content === 'Schlecht') {
    message.channel.send('Ok. Ich Hoffe, Dir geht es bald Besser.');
  }
});

bot.on('message', message => {
  if (message.content === 'lol') {
    message.channel.send('Was? Findest du es Etwa Lustig? Komisch...');
  }
});

bot.on('message', message => {
  if (message.content === 'Nice') {
    message.channel.send('Cool! Freut mich!')
  }
})

bot.on('message', message => {
  if (message.content === 'welcome') {
    message.channel.send('<a:info:827806069404205076> **Willkommen Neuling!** <a:info:827806069404205076>\n<a:info:827806069404205076> **Schau mal in <#810900110053081121> Vorbei!** <a:info:827806069404205076>');
  }
});

bot.on('message', message => {
  if (message.content === 'wilkommen') {
    message.channel.send('╔══════ ≪≫°✺°≪ ≫ ══════╗\n♥♡♥♡♥**Willkommen**♥♡♥♡♥\n╚══════ ≪≫°✺°≪ ≫ ══════╝');
  }
});


//Welcome-Bye

//Welcome & goodbye messages\\
bot.on('guildMemberAdd', member => {
    member.roles.add(member.guild.roles.cache.find(i => i.name === ''))

    const welcomeEmbed = new Discord.MessageEmbed()

    welcomeEmbed.setColor('#5cf000')
    welcomeEmbed.setTitle('*Willkommen!*' + member.user.username + '** Du bist nun Mitglied Nummer: **' + member.guild.memberCount + '**')
    welcomeEmbed.setImage('https://cdn.mos.cms.futurecdn.net/93GAa4wm3z4HbenzLbxWeQ-650-80.jpg.webp')

    member.guild.channels.cache.find(i => i.name === 'hauptchat').send(welcomeEmbed)
})

bot.on('guildMemberRemove', member => {
    const goodbyeEmbed = new Discord.MessageEmbed()

    goodbyeEmbed.setColor('#f00000')
    goodbyeEmbed.setTitle('**' + member.user.username + '** Hat uns Verlassen! \n Wir Sind nurnoch**' + member.guild.memberCount + '** Mitglieder **')
    goodbyeEmbed.setImage('https://gamewith-en.akamaized.net/article/thumbnail/rectangle/22183.png')

    member.guild.channels.cache.find(i => i.name === 'hauptchat').send(goodbyeEmbed)
})
//Welcome & goodbye messages end\\

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