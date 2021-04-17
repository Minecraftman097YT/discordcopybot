const Discord = require("discord.js");
const client = new Discord.Client({ ws: { intents: Discord.Intents.ALL } });

exports.run = async (bot, message, args) => {
  let member =
    message.mentions.members.first() ||
    message.guild.members.cache.get(args[0]);
  let reason = args.slice(1).join(" ");

  let embed1 = new Discord.MessageEmbed()
    .setTitle(`You Do Not Have The Permissions For This Command!`)
    .setDescription(`<@!${message.member.user.id}> you are not an Admin`)
    .setColor("RED")
    .setFooter(``);
  let embed2 = new Discord.MessageEmbed()
    .setTitle(`Ungültiger User`)
    .setDescription(
      `<@!${message.member.user.id}> Bitte Taggen sie ein Gültigen User \n **Achtung** !kick [@User] [reason]`
    )
    .setColor("ORANGE")
    .setFooter(``);
  let embed3 = new Discord.MessageEmbed()
    .setTitle(`Kick Nicht Erfolgreich!`)
    .setDescription(
      `<@!${message.member.user.id}> Du kannst die Person nicht Kicken!`
    )
    .setColor("RED")
    .setFooter(``);
  let embed4 = new Discord.MessageEmbed()
    .setTitle(`Kick Erfolgreich!`)
    .setDescription(
      `**<@!${member.user.id}>** Wurde **Gekickt** für **${reason}** von **<@!${message.author.id}>**`
    )
    .setColor("GREEN")
    .setFooter(``);

  if (!message.member.hasPermission("MANAGE_ROLES"))
    return message.channel.send(embed1);

  if (member) return message.channel.send(embed2);

  if (member.roles.highest.position > message.member.roles.highest.position)
    return message.channel.send(embed3);
  if (!reason) {
    reason = "Kein Grund Angegeben";
  }
  member.kick(reason);
  message.channel.send(embed4);
  console.log(
    `**${member.user.tag}** has been kicked for ${reason} by ${message.author.tag}`
  );
};

exports.help = {
  name: "kick"
};
