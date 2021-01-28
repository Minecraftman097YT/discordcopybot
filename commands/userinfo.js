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
    let embed = new Discord.MessageEmbed()
        .setTitle(`Info from ${user.tag}`)
        .setColor("RANDOM")
        .setThumbnail(user.avatarURL)
        .addField("Nickname", message.guild.member(user).displayName)
        .addField("Member ID", user.id)
        .addField("Status", user.presence.status)
        .addField("Account Creation", user.createdAt)
    return message.channel.send(embed)
}