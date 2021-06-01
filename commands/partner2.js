const Discord = require("discord.js");

exports.run = (bot, message, args) => {

    const Help = new Discord.RichEmbed()
      .setTitle("**Prime Empire**", "------------------------")
      .setDescription("Du Kannst Gerne mal Vorbei Schauen!")
      .addField("Was haben wir?","- Gutes Channel Design \n- Viele Chats & Talks \n- Einen eigenen Bot \n- Self Roles & Ping System \n- Gewinnspiele \n- Wöchentliche Updates \n- Viele Minispiele \n- Partnerschaften (ab 80 Usern) \n- Ein nettes Server Team \n- Free Werbung für jeden \n- Keine @everyone Pings \")
      .setColor("RED")
      .setFooter(`Kommt Gerne Vorbei ;)`);
    message.channel.send(Help);
    message.delete()
}