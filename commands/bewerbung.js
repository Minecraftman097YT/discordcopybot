const Discord = require("discord.js");

exports.run = (bot, message, args) => {

    const Help = new Discord.RichEmbed()
      .setTitle("**Bewerbungsphase als Moderator auf ER:LC RolePlay**", "------------------------")
      .setDescription("**Hier könnt ihr euch Bewerben! Aber nur, Wenn die Bewerbungsphase Offen hat.")
      .addField("**Text:**", "Willkommen in der Bewerbungsphase vom ER:LC RolePlay! Unten steht ein Link, Wo ihr Drauf klicken müsst auf das Blaue. Danach werdet ihr zu einer Seite Geleitet und Los Gehts!")
      .assField("**Speziale Links:**", "[Bewerbe dich Hier!](https://discord.gg/4gKA2qQAx3)")
      .setColor("RANDOM")
      .setFooter(`Viel Glück!`);
    message.channel.send(Help);
    message.delete()
}