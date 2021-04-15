const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "report",
  category: "moderation",
  description: "Report a user of your choice!",
  usage: "<User mention>",
  run: async (bot, message, args) => {
    if (!message.member.permissions.has("MANAGE_MESSAGES"))
      return message.channel.send(`Nope ;)`);
    let User = message.mentions.users.first() || null;

    if (User == null) {
      return message.channel.send(`Du Hast kein User Getagt`);
    } else {
      let Reason = message.content.slice(bot.prefix.length + 22 + 7) || null;
      if (Reason == null) {
        return message.channel.send(
          `Du hast keinen Grund Angegeben!`
        );
      }
      let Avatar = User.displayAvatarURL();
      let Channel = message.guild.channels.cache.find(
        (ch) => ch.name === "reports"
      );
      if (!Channel)
        return message.channel.send(
          `Es gibt auf diesen Server keinen Channel Namens #reports`
        );
      let Embed = new MessageEmbed()
        .setTitle(`Neuer report!`)
        .setDescription(
          `Der User \`${message.author.tag}\` Hat \`${User.tag}\` Gemeldet! `
        )
        .setColor(`RED`)
        .setThumbnail(Avatar)
        .addFields(
          { name: "Mod ID", value: `${message.author.id}`, inline: true },
          { name: "Mod Tag", value: `${message.author.tag}`, inline: true },
          { name: "Reported ID", value: `${User.id}`, inline: true },
          { name: "Reported Tag", value: `${User.tag}`, inline: true },
          { name: "Reason", value: `\`${Reason.slice(1)}\``, inline: true },
          {
            name: "Date (M/D/Y)",
            value: `${new Intl.DateTimeFormat("en-US").format(Date.now())}`,
            inline: true,
          }
        );
      Channel.send(Embed);
    }
  },
};