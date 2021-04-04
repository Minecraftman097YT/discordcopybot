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
    let status = ["BETA | V 1.1.1", "Prefix: _ | _help", "Bei Fragen Minecraftman097#9999 Anschreiben!"]
    let randomStatus = status[Math.floor(Math.random() * status.length)]
    bot.user.setActivity(randomStatus, {type: 'LISTENING'});
  } 
  setInterval(changing_status, 20000)
})



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