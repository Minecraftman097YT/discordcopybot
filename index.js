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

bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    const messageArray = message.content.split(' ');
	const cmd = messageArray[0];
	const args = messageArray.slice(1);

    if (cmd === 'umfrage'){
        let pollChannel = message.mentions.channels.first();
        let pollDescription = args.slice(1).join(' ');

        let embedPoll = new Discord.MessageEmbed()
        .setTitle('Neue Umfrage!')
        .setDescription(pollDescription)
        .setColor('GREEN')
        let msgEmbed = await pollChannel.send(embedPoll);
        await msgEmbed.react('✅')
        await msgEmbed.react('❌')
    }

})

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
      name: "Mit Netten menschen",
      type: "STREAMING",
      url: "https://www.twitch.tv/minecraftman097"
    }
  }
  );
  bot.user.setStatus("online");
});


bot.on("guildMemberRemove", member => {
  let msgchannel = member.guild.channels.find(`name`, "bye");
  msgchannel.send(`> ${member} hat Prime Empire verlassen! :frowning::sob:`);
});

bot.on("guildMemberAdd", member => {
  let msgchannel = member.guild.channels.find(`name`, "willkommen");
  msgchannel.send(`> ${member} ist Prime Empire beigetreten! :tada:`);
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
  await fetch("https://tkrbotiscord.glitch.me").then(console.log("pinged"));
}, 22000);

bot.login(TOKEN);
//https://tkrbotiscord.glitch.me