exports.run = (client, message, args, dc) => {

    const warten = new dc.RichEmbed()
    .setTitle("Bitte Warten")
    .setDescription("Ich muss laden... \n Das kann bis zu 3 Sekunden dauern.")
    .setColor("ORANGE")
  
  const help = new dc.RichEmbed()
  .setTitle(`> Help Liste | ${client.user.username}`)
  .setDescription("Die Sachen die in dieser Klammer <> sind notwendig anzugeben aber die in diesen Klammern [] nicht.")
  .addField("🌐 ・ Global", "`globalchannel set <channel>` **|** `globalchannel reset`**,** \n`globalstatus on` **|** `globalstatus off`")
  .addField("⚙️ ・ Einstellungen", "`prefix set <new Prefix>` **|** `prefix reset`**,** ")
  .addField("ℹ️ ・ Informationen", "`help`**,** \n`bot-info`**,** \n`server-info`**,** \n`user-info [user]`")
  .setFooter(`Angefordert von ${message.author.tag}`, message.author.avatarURL())
  .setTimestamp()
  .setColor("GREEN")

  message.channel.send(warten)
  .then((msg) => {
  setTimeout(function() {
   msg.edit(help)
  }, 3000)    
  })
} 