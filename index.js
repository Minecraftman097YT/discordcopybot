var express = require("express");
var app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);

const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./storage/config.json");
const TOKEN = process.env.TOKEN;

const prefix = config.prefix;

client.on("message", message => {
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

    commandFile.run(client, message, args);
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

client.on("ready", () => {
  console.log(`${client.user.tag} ist nie Offline!`);
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

bot.on('guildMemberAdd', async(member) => { // this event gets triggered when a new member joins the server!
    // Firstly we need to define a channel
    // either using .get or .find, in this case im going to use .get()
    const Channel = member.guild.channels.cache.get('channelid') //insert channel id that you want to send to
    //making embed
    const embed = new mEmbed()
        .setColor('GREEN')
        .setTitle('New Member')
        .setDescription(`**${member.displayName}** welcome to ${member.guild.name}, we now have ${member.guild.memberCount} members!`)
    // sends a message to the channel
    Channel.send(embed)
})
bot.on('guildMemberRemove', async(member) => { // this event gets triggered when a new member leaves the server!
    // Firstly we need to define a channel
    // either using .get or .find, in this case im going to use .get()
    const Channel = member.guild.channels.cache.get('channelid') //insert channel id that you want to send to
    //making embed
    const embed = new mEmbed()
        .setColor('RED')
        .setTitle('A member left the server :(')
        .setDescription(`**${member.displayName}** has left ${member.guild.name}, we now have ${member.guild.memberCount} members!`)
    // sends a message to the channel
    Channel.send(embed)
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

client.login(TOKEN);
//https://tkrbotiscord.glitch.me