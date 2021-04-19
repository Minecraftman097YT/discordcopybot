module.exports = {
  name: "dm",
  description: "DM a user in the guild",
  category: "fun",
  run: async (bot, message, args) => {
    if (!message.member.permissions.has("MANAGE_MESSAGES"))
      return message.channel.send("Sie haben nicht genügend Berechtigung [Administrator]!");
    let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    if (!user)
      return message.channel.send(
        `Du Musst den User Ping Oder Die Id eingeben`
      );
    if (!args.slice(1).join(" "))
      return message.channel.send("Sie haben Ihre Nachricht nicht angegeben");
    user.user
      .send(args.slice(1).join(" "))
      .catch(() =>
        message.channel.send("Dieser Benutzer konnte nicht DMed sein!")
      )
      .then(() => message.channel.send(`Sent a message to ${user.user.tag}`));
    message.delete();
  }
};
