const { MessageEmbed } = require("discord.js")


module.exports = {
  name: "suggest",
  usage: "suggest <message>",
  description: "Send your Suggestion",
  category: "main",
  run: (client, message, args) => {
    
    if(!args.length) {
      return message.channel.send("Bitte Schreibe was Dahinter!")
    }
    
    let channel = message.guild.channels.cache.find((x) => (x.name === "umfragen" || x.name === "suggestions"))
    
    
    if(!channel) {
      return message.channel.send("Es gibt kein Kanal, mit diesen Namen.")
    }
                                                    
    
    let embed = new MessageEmbed()
    .setAuthor("SUGGESTION: " + message.author.tag, message.author.avatarURL())
    .setThumbnail(message.author.avatarURL())
    .setColor("#ff2050")
    .setDescription(args.join(" "))
    .setTimestamp()
    
    
    channel.send(embed).then(m => {
      m.react("✅")
      m.react("❌")
    })
    

    
    message.channel.send("Sended Your Suggestion to " + channel)
    
  }
}