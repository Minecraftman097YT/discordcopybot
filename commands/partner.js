const Discord = require("discord.js");

exports.run = (bot, message, args) => {
  const Help = new Discord.RichEmbed()
    .setTitle("**Prime Empire** ", "------------------------")
    .setDescription(
      "<a:info:827806069404205076> **Joint** gerne Prime Empire, denn wir bieten sehr viele **Coole** Sachen! **Wie zB:**"
    )
    .addField(":performing_arts: Self Roles", ".")
    .addField(":speech_balloon: Viele Chats", ".")
    .addField(":loud_sound: Viele Sprachkanäle", ".")
    .addField(":heavy_plus_sign: Join4Create", ".")
    .addField(":game_die: Viele Minigames", ".")
    .addField(":tada: Viele Giveaways", ".")
    .addField("<a:Alarm:827807392589676564> Guten Support", ".")
    .addField(":handshake: Partnerschaften ab 80 Usern.", ".")
    .addField("<a:Stern:827807184887873538> Aktive Community", ".")
    .addField(":joy: Viele Memes", ".")
    .addField(":bulb: Wir Hören auf die Community", ".")
    .addField(":no_entry_sign: Keine @everyone Pings", ".")
    .addField(":globe_with_meridians: Und Vieles mehr!", ".")
    .addField("<a:info:827806069404205076>", "Unser Ziel sind die **200 Member**, also kommt gerne drauf, du wirst es nicht bereuen!")
    .addField("Link:", "[Klicke Hier](https://discord.gg/qAjrrkQADQ)")
    .setColor("ORANGE")
    .setImage("https://cdn.discordapp.com/attachments/811928066833776671/832110695037927434/image0.gif")
    .setFooter(``);
  message.channel.send(Help);
  message.delete();
};