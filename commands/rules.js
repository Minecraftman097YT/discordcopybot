const Discord = require("discord.js");

exports.run = (bot, message, args) => {

    const Help = new Discord.RichEmbed()
      .setTitle("**ER:LC Roleplay Regeln!**", "------------------------")
      .addField("§1", "Feuerwehr/Medic ist unantastbar (bsw.:nicht als geisel möglich usw.)")
      .addField("§2", "§2Es gelten die STVO wie ingame. (in einer 50 Zone auch 50 fahren ausgenommen Kriminelle)")
      .addField("§3", "Undercover fahrzeuge von der Polizei- und  Sheriff department darf man nur als normales auto beachten.")
      .addField("§4", "Das M249 MG (Gamepass) ist verboten sowie Spieler und Teammitglieder die garage nicht ausnutzen dürfen.")
      .addField("§5", "Jeder der einer Staatlich Anerkannten fraktion beitritt und das Training bestanden hat muss sich eine Vierstellige Dienstnummer aussuchen zB. 1234")
      .addField("§6", "Sobald ein Fahrzeug das Kennzeichen TEAM besitzt ist es ein Teammitglied was nicht angehalten werden darf u.s.w.")    
      .addField("§7", "Wenn ein gangmitglied von der Polizei/Sheriff verfolgt wird ist keine flucht in die Hood gestattet.")    
      .addField("§8", "Man darf sich nicht freikaufen also seine sterne wegmachen.")    
      .addField("§9", "Man darf kein Auto wechseln wenn man in eine Verfolgung ist.")
      .addField("§10", "Der Juwelier darf erst verlassen werden wenn ein polizist anwesend ist.")
      .addField("§11", "Beim Hausraub darf erst weggefahren wird wenn ein cop in der nähe ist.")
      .setColor("RANDOM")
      .setFooter(`Es gelten normale Rp regeln und ausnahmen die hier stehen!`);
    message.channel.send(Help);
    message.delete()
}