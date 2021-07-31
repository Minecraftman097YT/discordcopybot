const Discord = require("discord.js");

exports.run = (bot, message, args) => {

    const Help = new Discord.RichEmbed()
      .setTitle("**PixelBlock.EU Teamliste**", "------------------------")
      .setDescription("**Sehe hier die Person, die im Team von PixelBlock.EU sind.**")
      .addField("**Jetzigen Teammitglieder:**","\n**════════════════════════════════════** \nIngame-Name ➜ **cinimini2006** \nSpitzname ➜ Fynn \nRang ➜ Owner \nAufgaben ➜ Serverleitung, Teamleitung \nAnsprechpartner für ➜ Serverteam \n**════════════════════════════════════** \nIngame-Name ➜ **GameToo** \nSpitzname ➜ Gamtu \nRang ➜ Manager \nAufgaben ➜ Organisation \nAnsprechpartner für ➜ Verwaltung \n**════════════════════════════════════** \n")
      .setColor("ORANGE")
      .setFooter(``);
    message.channel.send(Help);
    message.delete()
}