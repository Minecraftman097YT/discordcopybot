const Discord = require("discord.js");

exports.run = (bot, message, args) => {
  const Partner = new Discord.RichEmbed()
    .setTitle("**Prime Empire Partnerliste** ", "------------------------")
  
    .setDescription("<a:info:827806069404205076> **Wenn euer Server nicht Dabei sein Sollte oder wir ihn Entfernen Sollen, Schreib Minecraftman097#2021 eine DM!**")
  
    .addField("TLF \nInhaber: TLF#0001","Invite: [Klicke Hier](https://discord.gg/92k6PhNtYq)\n**---------------**")
  
    .addField("Community \nInhaber: Miky#2546", "Invite: [Klicke Hier](https://discord.gg/QxczbuRJ87)\n**---------------**")
  
    .addField("Kuschelecke \nInhaber: Einfach nur ich#1844", "Invite: [Klicke Hier](https://discord.com/invite/S6uYxhvUNb)\n**---------------**")
  
    .addField("Team Toxic \nInhaber: Darky#4331", "Invite: [Klicke Hier](https://discord.gg/KUfR7JNV)\n**---------------**")
  
    .addField("ArrowGaming \nInhaber: ₳ⱤⱤØ₩₲₳₥ł₦₲#3389", "Invite: [Klicke Hier](https://discord.gg/bd7Sa7rRG9)\n**---------------**")
  
    .addField("GameGash \nInhaber: Cindai#0309", "Invite: [Klicke Hier](https://discord.gg/wPeJRU4qF4)\n**---------------**")
  
    .addField("★Chat & Gaming Lounge★ \nInhaber: flix#8194", "Invite: [Klicke Hier](https://discord.gg/u6m2Z4cbJM)\n**---------------**")
  
    .addField("Drip \nInhaber: Labinnac#0187", "Invite: [Klicke Hier](https://discord.gg/wNYBZrNDJW)\n**---------------**")
  
    .addField("Kyoko Family \nInhaber: GAMIX#3566", "Invite: [Klicke Hier](https://discord.gg/zpUufPhCQJ)\n**---------------**")
  
    .addField("CrazyEmpire \nInhaber: Ko.rex-hi#4904", "Invite: [Klicke Hier](https://discord.gg/DSr8HbmPGT)\n**---------------**")

    .addField("Breadcord \nInhaber: MrBrotstange シ#1234", "Invite: [Klicke Hier](https://discord.gg/C7s4ugaQfw)\n**---------------**")
  
    .addField("PleRex‘s CΩmmunity© \nInhaber: PleRexTV#5721", "Invite: [Klicke Hier](https://discord.gg/dtkbPQEVyx)\n**---------------**")
  
    .addField("Weebland \nInhaber: Youtub#8259", "Invite: [Klick Hier](https://discord.gg/b9jNVyQd)\n**---------------**")
    
    .addField(":video_game: | GamersOnly \nInhaber: its Redz 🧃#0001", "Invite: [Klicke Hier](https://discord.gg/agGvFCw69E)\n**---------------**")
  
    .addField("𝕊𝔼  | 𝕆𝕗𝕗𝕚𝕫𝕚𝕖𝕝𝕝𝕖𝕣 𝕊𝕖𝕣𝕧𝕖𝕣 \nInhaber: KingX#4389", "Invite [Klicke Hier](https://discord.gg/6V49xjjb2y)\n**---------------**")
  
    .addField(":gem: • berkan.png \nInhaber: berkan#0001", "Invite [Klicke Hier](https://discord.gg/SNfaYdbA)\n**---------------**")
    
    .addField("Gaming Community \nInhaber: Nat©#2710", "Invite [Klicke Hier](https://discord.gg/GEN8tTsDz2)\n**---------------**")
  
    .addField("Friends4all \nInhaber: Cha0snc#2270", "Invite [Klicke Hier](https://discord.gg/KtYCkWDx)\n**---------------**")

    .setColor("009EE0")
  
    .setFooter(`Wenn du Möchtest, Kannst du Gerne auch einen Unserem Partner Server Beitreten. Das Beitreten eines Partner Servers ist nicht Pflicht!`);
  
  message.channel.send(Partner);
  message.delete();
};