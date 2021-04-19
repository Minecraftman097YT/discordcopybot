const {MessageEmbed} = require('discord.js')
const ms = require('ms');
module.exports={
    name: 'giveaway',
    description: 'Create a simple giveaway',
    usage: '<time> <channel> <prize>',
    category: 'fun',
    run: async(bot,message,args)=>{
        if(!args[0]) return message.channel.send(`Du hast keine Zeit angegeben!`)
        if(!args[0].endsWith("d")&&!args[0].endsWith("h")&&!args[0].endsWith("m")) return message.channel.send(`Du musst eine zeit angegeben <s/m/h/d>!`)
        if(isNaN(args[0][0])) return message.channel.send(`Das ist keine Zeit!`)
        let channel = message.mentions.channels.first()
        if(!channel) return message.channel.send(`Du Musst ein Chat Makieren!`)
        let prize = args.slice(2).join(" ")
        if(!prize) return message.channel.send(`Du musst noch einen Preis sagen!`)
        message.channel.send(`*Giveway Startet in ${channel}*`)
        let Embed = new MessageEmbed()
        .setTitle(`Giveaway!`)
        .setDescription(`Der User ${message.author} hat Ein Giveway Gestartet Der Preis ist **${prize}**`)
        .setTimestamp(Date.now()+ms(args[0]))
        .setColor(`BLUE`)
        let m = await channel.send(Embed)
        m.react("🎉")
        setTimeout(() => {
            if(m.reactions.cache.get("🎉").count<=1){
                message.channel.send(`Reactions: ${m.reactions.cache.get("🎉").count}`)
                return message.channel.send(`Es machen nicht genug Leute mit!`)
            }
            
            let winner = m.reactions.cache.get("🎉").users.cache.filter(u=>!u.bot).random()
            channel.send(`Vom Giveway mit dem preis **${prize}** ist ${winner} der Gewinner`)
        }, ms(args[0]));
    }
}
    