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
    msg.edit(`Suche Wlan Name ...`);
  }, ms(time1));

  let time2 = "7s";
  setTimeout(function() {
    msg.edit(`Wlan: ${tohack}zensiert `);
  }, ms(time2));

  let time3 = "12s";
  setTimeout(function() {
    msg.edit(`Suche Passwort..`);
  }, ms(time3));
  
  let time4 = "15s";
  setTimeout(function() {
    msg.edit(`Suche Passwort..`);
  }, ms(time4));
  
  let time5 = "18s";
  setTimeout(function() {
    msg.edit(`Suche Passwort....`);
  }, ms(time5));

  let time6 = "22s";
  setTimeout(function() {
    msg.edit(`Passwort: wurde identifiziert`);
  }, ms(time6));
   
  let time7 = "26s";
  setTimeout(function() {
    msg.edit(`ID/IP: Wurde identifiziert`);
  }, ms(time7)); 
  
  let time8 = "29s";
  setTimeout(function() {
    msg.edit(`Hintergehe Sämtliche Schutzprogramme/VPN`)
  }, ms(time8));
             
  let time9 = "33s";
  setTimeout(function() {
    msg.edit(`Spamme Befehle an den Router x1000...`);
  }, ms(time9));
  
  let time10 = "36s";
  setTimeout(function() {
    msg.edit(`Internetverbindung vom WLAN-Router wure Deaktiviert!`);
  }, ms(time10));


  let time11 = "39s";
  setTimeout(function() {
    msg.edit(`Lade Viruse auf den Router herunter...`); 
  }, ms(time11));

  let time12 = "41s";
  setTimeout(function() {
    msg.edit(`Viruse wurde erfolgreich installiert`);
  }, ms(time12));

  let time13 = "45s";
  setTimeout(function() {
    msg.edit(`Ddos wurde erfolgreich  Abgeschlossen...`);
  }, ms(time13));
};

module.exports.help = {
  name: "Ddos"
};
