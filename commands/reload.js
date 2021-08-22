const Discord = require("discord.js");

exports.run = (bot, message, args) => {
  const admin = ["810648022240591893"];
                 //Minecraftman097   
  
if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Du hast keine Berechtigungen :x:")

  let embed0 = new Discord.RichEmbed()
    .setTitle(":x:")
    .setDescription("Da du kein Admin bist, kannst du diesen Befehl nicht Verwenden.")
    .setTimestamp()
    .setColor("#8b0000");
  if (!admin.some(admin => message.author.id === admin))
    return message.channel.send(embed0).then(message.react("❌"));

  const restart = new Discord.RichEmbed()
    .setTitle(":white_check_mark:")
    .setDescription("Der Bot wird nun neugestartet.")
    .setFooter(message.author.tag)
    .setColor("#8b0000");
  message.channel.send(restart).then(() => {
    process.exit(1);
  });
};
