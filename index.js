const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./storages/config.json");
const fs = require("fs");
const TOKEN = process.env.TOKEN;

let prefixes = JSON.parse(fs.readFileSync("./storages/prefixes.json", "utf8"));
let log = JSON.parse(fs.readFileSync("./storages/log.json", "utf8"));
let welcome = JSON.parse(fs.readFileSync("./storages/welcome.json", "utf8"));
let leave = JSON.parse(fs.readFileSync("./storages/leave.json", "utf8"));
let level = JSON.parse(fs.readFileSync("./storages/level.json", "utf8"));

bot.on("message", message => {
  //prefix.json
  if (!prefixes[message.guild.id])
    prefixes[message.guild.id] = {
      p: config.prefix
    };
  fs.writeFile("./storages/prefixes.json", JSON.stringify(prefixes), x => {
    if (x) console.error(x);
  });
  const prefix =  prefixes[message.guild.id].p

  //log.json
  if (!log[message.guild.id])
    log[message.guild.id] = {
      cID: ""
    };
  fs.writeFile("./storages/log.json", JSON.stringify(log), x => {
    if (x) console.error(x);
  });

  //welcome.json
  if (!welcome[message.guild.id])
    welcome[message.guild.id] = {
      wID: ""
    };
  fs.writeFile("./storages/welcome.json", JSON.stringify(welcome), x => {
    if (x) console.error(x);
  });

  //leave.json
  if (!leave[message.guild.id])
    leave[message.guild.id] = {
      lID: ""
    };
  fs.writeFile("./storages/leave.json", JSON.stringify(leave), x => {
    if (x) console.error(x);
  });

  //level.json
  if (!level[message.author.id])
    level[message.author.id] = {
      xp: 0,
      level: 0,
      message: 0
    };
  fs.writeFile("./storages/level.json", JSON.stringify(level), x => {
    if (x) console.error(x);
  });

  let args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  let cmd = args.shift().toLowerCase();
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

bot.on("ready", () => {
  console.log(`${bot.user.tag} ist Online!
[${bot.users.size}] User
[${bot.guilds.size}] Server`);
});

bot.on("ready", () => {
  bot.user.setPresence({
    game: {
      name: `ein Update...`,
      type: "STREAMING",
      url: "https://www.twitch.tv/herrputins"
    }
  });
  setTimeout(() => {
    bot.user.setPresence({
      game: {
        name: `deine Mutter an!`,
        type: "WATCHING",
        url: "https://www.twitch.tv/herrputins"
      }
    });
    bot.user.setStatus("idle");
  }, 5000);
});

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

  bot.on('message', async message => {
 
  //This reads the first part of your message behind your prefix to see which command you want to use.
  var command = message.content.toLowerCase().slice("_").split(' ')[0];
 
  //These are the arguments behind the commands.
  var args = message.content.split(' ').slice(1);
 
  //If the user that types a message is a bot account return.
  if (message.author.bot) return;
 
  //When someone sends a message add xp
  var xp = await level[message.author.id].xp
  var levels = await level[message.author.id].level
  level[message.author.id].xp+10;
  level[message.author.id].message++;
  let userInfo = level[message.author.id];
  if (userInfo.xp > 100) {
    userInfo.level++;
    userInfo.xp = 0;
    message.reply("HGW du hast ein Level Up");
  }
 
  //If the message does not start with your prefix return.
  if (!message.content.startsWith("_")) return;
 
  if (command === 'rank') {
    let embed = new Discord.RichEmbed()
        .setTitle("Dein Rank")
        .addField("XP", level[message.author.id].xp +"/100")
        .addField("Level", level[message.author.id].level)
        .addField("Message", level[message.author.id].message)
        .setColor("RANDOM");
        message.channel.send(embed)
  }
 
  if (command === 'setxp') {
 
    var amount = args[0]
    var user = message.mentions.users.first() || message.author
 
    var output = await level.SetXp(user.id, amount)
    message.channel.send(`Hey ${user.tag}! You now have ${amount} xp!`);
  };
 
  if (command === 'setlevel') {
 
    var amount = args[0]
    var user = message.mentions.users.first() || message.author
 
    var output = await level.SetLevel(user.id, amount)
    message.channel.send(`Hey ${user.tag}! You now have ${amount} levels!`);
  };
 
  if (command === 'leaderboard') {
 
    //If you put a mention behind the command it searches for the mentioned user in database and tells the position.
    if (message.mentions.users.first()) {
 
      var output = await level.Leaderboard({
        search: message.mentions.users.first().id
      })
      message.channel.send(`The user ${message.mentions.users.first().tag} is number ${output.placement} on my leaderboard!`);
 
      //Searches for the top 3 and outputs it to the user.
    } else {
 
      level.Leaderboard({
        limit: 3 //Only takes top 3 ( Totally Optional )
      }).then(async users => { //make sure it is async
 
        if (users[0]) var firstplace = await bot.fetchUser(users[0].userid) //Searches for the user object in discord for first place
        if (users[1]) var secondplace = await bot.fetchUser(users[1].userid) //Searches for the user object in discord for second place
        if (users[2]) var thirdplace = await bot.fetchUser(users[2].userid) //Searches for the user object in discord for third place
 
        message.channel.send(`My leaderboard:
 
          1 - ${firstplace && firstplace.tag || 'Nobody Yet'} : ${users[0] && users[0].level || 'None'} : ${users[0] && users[0].xp || 'None'}
          2 - ${secondplace && secondplace.tag || 'Nobody Yet'} : ${users[1] && users[1].level || 'None'} : ${users[0] && users[0].xp || 'None'}
          3 - ${thirdplace && thirdplace.tag || 'Nobody Yet'} : ${users[2] && users[2].level || 'None'} : ${users[0] && users[0].xp || 'None'}`)
 
      })
 
    };
  };
 
  if (command == 'delete') { //You want to make this command admin only!
 
    var user = message.mentions.users.first()
    if (!user) return message.reply('Please specify a user I have to delete in my database!')
 
    if (!message.guild.me.hasPermission(`ADMINISTRATION`)) return message.reply('You need to be admin to execute this command!')
 
    var output = await level.Delete(user.id)
    if (output.deleted == true) return message.reply('Succesfully deleted the user out of the database!')
 
    message.reply('Error: Could not find the user in database.')
 
  }
 
})
}); 
bot.login(TOKEN)