const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
  if(!args[2]) return message.reply("Please make a Normal Question!");
  let replies = ["Yes.", "No.", "I Dont know", "Answer later again"];
  
  let result = Math.floor((Math.random() *replies.lenght));
  let question = args.slice(1).join(" ");
  
  let ballembed = new Discord.RichEmbed()
  .sethAuthor(message.author.tag)
  .setColor("RANDOM")
  .addField("Frage", question)
  .addField("Antwort", replies[result]);
  
  message.channel.send(ballembed);
}


module.exports.help = {
  name: "8ball"
}