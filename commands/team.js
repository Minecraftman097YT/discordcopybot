const Discord = require("discord.js");

exports.run = (bot, message, args) => {
  const Help = new Discord.RichEmbed()
    .setTitle("**PixelBlock.EU Teamliste**", "------------------------")
    .setDescription("**Sehe hier die Person, die im Team von PixelBlock.EU sind.**")
    .addField("**Jetzigen Teammitglieder:**", "\n════════════════════════════════════ \nName ➜ cinimini2006 \nRang ➜ Owner \n════════════════════════════════════ \nName ➜ GameToo \nRang ➜ Manager \n════════════════════════════════════ \nName ➜ Magier\nRang ➜ Support \n════════════════════════════════════\nName ➜ Minecraftman097\nRang ➜ JrSupport\n════════════════════════════════════")
    .setColor("ORANGE")
    .setFooter(``);
  message.channel.send(Help);
  message.delete();
};
