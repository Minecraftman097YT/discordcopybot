const Discord = require("discord.js");

exports.run = (bot, message, args) => {
  const Help = new Discord.RichEmbed()
    .setTitle("<:PrimeEmpire:820742150915358761> **Prime Empire** ", "------------------------")
    .setDescription(
      "<a:info:827806069404205076> **Joint** gerne Prime Empire, denn wir bieten sehr viele **Coole** Sachen! **Wie zB:**"
    )
    .addField(":performing_arts: Self Roles \n\n:speech_balloon: Viele Chats \n\n:loud_sound: Viele Sprachkanäle \n\n:heavy_plus_sign: Join4Create \n\n:game_die: Viele Minigames \n\n:tada: Viele Giveaways \n\n<a:Alarm:827807392589676564> Guten Support \n\n:handshake: Partnerschaften ab 80 Usern. \n\n<a:Stern:827807184887873538> Aktive Community \n\n:joy: Viele Memes \n\n:bulb: Wir Hören auf die Community \n\n:no_entry_sign: Keine @everyone Pings \n\n:globe_with_meridians: Und Vieles mehr!", "<a:info:827806069404205076> Unser Ziel sind die **200 Member**, also kommt gerne drauf, du wirst es nicht bereuen!")
    .addField("Link:", "[Klicke Hier](https://discord.gg/qAjrrkQADQ)")
    .setColor("ORANGE")
    .setImage("https://cdn.discordapp.com/attachments/811928066833776671/832110695037927434/image0.gif")
    .setFooter(``);
  message.channel.send(Help);
  message.delete();
};