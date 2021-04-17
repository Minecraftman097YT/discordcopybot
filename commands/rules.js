const Discord = require("discord.js");

exports.run = (bot, message, args) => {
  
  const Help = new Discord.RichEmbed()
    .setTitle("<:PrimeEmpire:820742150915358761> **Prime Empire Regelwerk** ", "------------------------")
    .setDescription(
      "<a:Glocke:830010974710923294> Hier sind die Regel des Servers an die sich jeder halten muss!")
    .addField("**Chats**", ".")
    .addField("<a:info:827806069404205076>", "Kein Spam!")
    .addField("<a:info:827806069404205076>", "Immer Freundlich sein!")
    .addField("<a:info:827806069404205076>", "Keine Beleidigungen!")
    .addField("<a:info:827806069404205076>", "Keine Eigenwerbung mit Links, nur Partner dürfen das!")
    .addField("**Sprachkanäle**", ".")
    .addField("<a:info:827806069404205076>", "Nicht Beleidigen!")
    .addField("<a:info:827806069404205076>", "Freundlich sein!")
    .addField("<a:info:827806069404205076>", "Keine Leute Musik Abspielen!")
    .addField("<a:info:827806069404205076>", "In Videos keine Faxen machen!")
    .addField("<a:info:827806069404205076>", "Leute Ausreden Lassen!")
    .addField("Nun musst du Die Regeln mit dem Haken [:white_check_mark:] akzeptieren. ", "Damit du Mitglied wirst und alles siehst!")
    .addField("Viel Spaß auf diesem Server!", "ggf. gelten die Normalen Discord Regeln")
    .addField("Invite:", "[Klicke Hier](https://discord.gg/qAjrrkQADQ)")
    .setColor("GREEN")
    .setImage("https://cdn.discordapp.com/attachments/810900008219705384/817030736980213780/image0.gif")
    .setFooter(``);
  message.delete();
  message.channel.send(Help).then(sentEmbed => {
  sentEmbed.react("✅")
})
};