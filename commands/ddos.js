const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
  if (args[1])
    return message.reply("Sage mir Bitte, Wenn du Ddosen  Möchtest!");
  let tohack = args.slice(0).join(" ");
  message.delete();
  let msg = await message.channel.send(`Ddos wird ausgeführt ${tohack}`);

  let time1 = "4s";
  setTimeout(function() {
    msg.edit(`Deine IP wird gesucht...`);
  }, ms(time1));

  let time2 = "7s";
  setTimeout(function() {
    msg.edit(`Deine IP wurde gefunden!`);
  }, ms(time2));

  let time3 = "12s";
  setTimeout(function() {
    msg.edit(`Mirai wird hochgefahren...`);
  }, ms(time3));
  
  let time4 = "15s";
  setTimeout(function() {
    msg.edit(`Mirai wird hochgefahren...`);
  }, ms(time4));
  
  let time5 = "18s";
  setTimeout(function() {
    msg.edit(`Mirai wird hochgefahren...`);
  }, ms(time5));

  let time6 = "22s";
  setTimeout(function() {
    msg.edit(`Gleich ist dein Internet weg!`);
  }, ms(time6));
   
  let time7 = "26s";
  setTimeout(function() {
    msg.edit(`Angriff wird gestartet!`);
  }, ms(time7)); 
  
  let time8 = "29s";
  setTimeout(function() {
    msg.edit(`Angriff läuft...`)
  }, ms(time8));
             
  let time9 = "33s";
  setTimeout(function() {
    msg.edit(`Angriff läuft...`);
  }, ms(time9));
  
  let time10 = "36s";
  setTimeout(function() {
    msg.edit(`Der Angriff wurde erfolgreich abgeschlossen!`);
  }, ms(time10));
};

module.exports.help = {
  name: "Ddos"
};
