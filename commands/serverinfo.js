const Discord = require("discord.js")
const moment = require("moment")

module.exports.command = {
    name: "serverinfo",
    aliases: ["si"],
    description: "Shows the current servers information",
    category: "Util",
    usage: "serverinfo"
}

exports.run = async (bot, message, args) => {
    let embed = new Discord.MessageEmbed()
        .setTitle("Server Info")
        .setColor("WHITE")
        .setThumbnail(message.guild.splash)
        .addField("Server Name:", message.guild.name, true)
        .addField("Erstellt am:", moment(message.guild.createdAt).format(), true)
        .addField("Du Bist Gejoint am:", moment(message.member.joinedAt).format(), true)
        .addField("Server region:", message.guild.region, true)
        .addField("Server Owner:", message.guild.owner, true)
        .addField("Mitglieder:", message.guild.memberCount, true)

    return message.channel.send(embed)
}