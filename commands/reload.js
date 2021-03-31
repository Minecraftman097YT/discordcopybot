const Discord = require("discord.js");

exports.run = (bot, message, args) => {
  const admin = ["795727523749036092"];

  let embed0 = new Discord.RichEmbed()
    .setTitle(":x: You are not the Bot Owner!! :x:")
    .setDescription("You Cant use this Command!")
    .setTimestamp()
    .setColor("#8b0000");
  if (!admin.some(admin => message.author.id === admin))
    return message.channel.send(embed0).then(message.react("❌"));

  const restart = new Discord.RichEmbed()
    .setTitle("RESTART")
    .setDescription("The Bot will now Restarting")
    .setFooter(message.author.tag)
    .setColor("#8b0000");
  message.channel.send(restart).then(() => {
    process.exit(1);
  });
};
