const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let replies = [
"Was sagt ein Esel zur Giraffe? - Alter, komm mal runter!",
    "Was ist der Unterschied zwischen kostenlos und umsonst? Meine Schulbildung war kostenlos, deine umsonst",
    "Team = Täglich einen anderen mobben",
    "Legt euer Geld in Alkohol an. Wo sonst gibt es 40 Prozent!",
    "Deine Ehre ist wie die Titanic, gesunken!",
"Nicht mal Briefmarken machst du Feucht!",
"Warum will Fritzchens Freundin kein S*x? - Weil er keine Freundin hat.",
"Was sagt eine Blondine, wenn man sie fragt, ob der Blinker noch an ist? Der Blinker ist an, aus, an, aus, an, aus ...",
"Was ist der Unterschied zwischen Bungeejumping und Tennis? Beim Tennis hat man zwei Aufschläge",
"Was macht ein Leprakranker auf dem Fußballfeld? 1. Er fault!  2. Er lässt ein Bein stehen!",
"Was ist grausamer als sieben Kinder in einer Mülltonne? Ein Kind in sieben Mülltonnen.",
"Alle Kinder sind gesund, nur nicht Jürgen, der muss würgen",
"Alle Kinder essen Lasagne - außer Gerd der mag kein Pferd",
"Alle Kinder haben Haare. Nur nicht Torsten - der hat Borsten.",
"Alle Kinder schauen aufs brennende Haus, außer Klaus der schaut raus!",
"Warum mag niemand FN Kiddies? - Weil sie Fortnite zocken",
"Was steht auf dem Grabstein eines Penners? Endlich hat er ein Zuhause :D",
"Was spielen die Kinder im Kriegsgebieten? wer sucht der findet, wer drauf tritt verschwindet :D",
"Zombies essen Gehirne aber mach dir keine sorgen, du bist in Sicherheit :D",
"Was Heißt Fernsehverbot auf Russisch? Netflix & Chill",
"Ich habe dich als Hintergrund-Bild, das hilft gegen meine Handysucht",
"Warum haben Frauen nur 4 Gehirnzellen? Der Herd hat auch nur 4 Platten",
"Du bist so Hässlich das nicht mal ein Dieb dich anfassen würde",
"Dein Mundgeruch ist schlimmer als Corona :D",
"",
"",
];
  

  let result = Math.floor(Math.random() * replies.length);
  let question = args.slice(0).join(" ");

  let ballembed = new Discord.RichEmbed()
    .setTitle(":joy: | Witz | :joy:")
    .addField("Witz", replies[result])
    .setColor("RANDOM")
    .setThumbnail(bot.user.avatarURL) .setAuthor(message.author.tag);
  
  message.channel.send(ballembed);
  message.delete()
};

module.exports.help = {
  name: "witz"
};
