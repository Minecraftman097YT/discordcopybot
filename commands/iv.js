const Discord = require("discord.js");

exports.run = (bot, message, args) => {

    const Help = new Discord.RichEmbed()
      .setTitle("**GamingTreff:**", "------------------------")
      .addField("**Invite:**","***Drücke [Hier](https://discord.com/oauth2/authorize?client_id=826067410607407155&scope=bot&permissions=8) Um den Bot zu deinen Server Einzuladen!***")
      .setColor("GREEN")
      .setFooter(`.`);
    message.channel.send(Help);
    message.delete()
}