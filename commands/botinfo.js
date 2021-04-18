const Discord = require("discord.js");
const moment = require('moment');
require('moment-duration-format');

exports.run = (bot, message, args) => {


    const Help = new Discord.RichEmbed()
      .setTitle("Infos des Bots")
      .addField("``Bot Owner:``", "<@810648022240591893>")
      .addField("``Erstellt am:``", `${moment.utc(bot.user.createdAt).locale('de').format("dddd, Do MMMM YYYY, HH:mm")}`, true)
      .addField("``Server Region:``", "Centreal Europa")
      .addField("Library:", "Discord.JS v12, Node.JS")
      .setColor("RANDOM")
      .setFooter(`Requested by: ${message.author.tag}`,);
    message.channel.send(Help);
    message.delete()
}