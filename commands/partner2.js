const Discord = require("discord.js");

exports.run = (bot, message, args) => {

    const Help = new Discord.RichEmbed()
      .setTitle("**Prime Empire**", "------------------------")
      .setDescription("Du Kannst Gerne mal Vorbei Schauen!")
      .addField("Was haben wir?","- Gutes Channel Design \n\n- Viele Chats & Talks \n\n- Einen eigenen Bot \n\n- Self Roles & Ping System \n\n- Gewinnspiele \n\n- Wöchentliche Updates \n\n- Viele Minispiele \n\n- Partnerschaften (ab 80 Usern) \n\n- Ein nettes Server Team \n\n- Free Werbung für jeden \n\n- Keine @everyone Pings")
      .addField("Was bieten wir dir?", "- Levelsystem \n\n- Gewinnspiele wie Nitro etc. \n\n- Viele Nette User \n\n- Minigames \n\n- Schneller Support \n\n- Free Werbung für deinen Server")
      .addField("Wir Hoffen, Das wir dich Überzeugt haben, das du uns gerne Besuchen Kommst!", "LG, Das Oberste Verwaltung Team \n [Server Invite](https://discord.gg/mSwQNQu5Tv)")
      .setImage("https://cdn.discordapp.com/attachments/811928066833776671/849161951081922581/image0.gif")
      .setColor("#FFA000")
      .setFooter(`Kommt Gerne Vorbei ;)`);
    message.channel.send(Help);
    message.delete()
}