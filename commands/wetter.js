const weather = require('weather-js');
const discord = require('discord.js')




//TIME TO END STREAM
module.exports = {
  name: "weather",
  description: "Get the weather of anywhere",
  category: "info",
  usage: "weathet <>",
  run: (client, message, args) => {
    
    
    if(!args.length) {
      return message.channel.send("Bitte Gebe ein Wetter Standort an!")
    }
    
 weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
try {
 
let embed = new discord.MessageEmbed()
.setTitle(`Wetter in - ${result[0].location.name}`)
.setColor("#ff2050")
.setDescription("Temperatureinheiten können manchmal unterschiedlich sein")
.addField("Temperatur", `${result[0].current.temperature} Celcius`, true)
.addField("Wetter", result[0].current.skytext, true)
.addField("Feuchtigkeit", result[0].current.humidity, true)
.addField("Windgeschwindigkeit", result[0].current.windspeed, true)//What about image
.addField("Beobachtungszeit", result[0].current.observationtime, true)
.addField("Windanzeige", result[0].current.winddisplay, true)
.setThumbnail(result[0].current.imageUrl);
   message.channel.send(embed)
} catch(err) {
  return message.channel.send("Konnte nicht den Standort finden!")
}
});   
    //LETS CHECK OUT PKG
    
  }
}