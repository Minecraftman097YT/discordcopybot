const Discord = require("discord.js")

module.exports.command = {
    name: "userinfo",
    aliases: ["ui"],
    description: "Gives user information of tagged user of you!",
    category: "Util",
    usage: "userinfo @user"
}

exports.run = async (bot, message, args) => {
    let user = message.mentions.users.first() || + message.author
    let embed = new Discord.RichEmbed()
        .setTitle(`Info von ${user.tag}`)
        .setColor("RANDOM")
        .setThumbnail(user.avatarURL)
        .addField("Mitglied ID", user.id)
        .addField("Status", user.presence.status)
        .addField("Erstellt am", user.createdAt)
    message.channel.send(embed)
}