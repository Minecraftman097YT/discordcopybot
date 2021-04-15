const Commando = require('discord.js-commando')

module.exports = class KickCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'kick',
      group: 'moderation',
      memberName: 'kick',
      description: 'Kicks a member from the discord server',
      clientPermissions: ['KICK_MEMBERS'],
      userPermissions: ['KICK_MEMBERS'],
    })
  }

  async run(message) {
    const target = message.mentions.users.first()
    if (!target) {
      message.reply('Bitte Tag ein Benutzer, um ihn zu Kicken.')
      return
    }

    const { guild } = message

    const member = guild.members.cache.get(target.id)
    if (member.kickable) {
      member.kick()
      message.reply('User Wurde Gekickt!')
    } else {
      message.reply('Ich kann den User nicht Kicken...')
    }
  }
}