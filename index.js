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
bot.on("guildMemberRemove", member => {
  let msgchannel = member.guild.channels.find(`name`, "bye");
  msgchannel.send(`> ${member} hat Prime Empire verlassen!`);
});

bot.on("guildMemberAdd", (member) => {
  let channelID = '831429040198909965'
  
  let embed = new Discord.MessageEmbed()
  .setTitle('Neuling')
  .setDescription('Ein Neues Mitglied ist auf den Server Gelandet.')
  .addField(`${member.user.tag`)
})

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