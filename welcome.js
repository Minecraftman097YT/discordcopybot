module.exports = (client) => {
  const channelID = "831429040198909965";
  client.on("guildMemberAdd", (member) => {
    console.log(member);
    
    const message = '>>> Willkommen \n**<@${member.id}**! \nAuf ***PrimeEmpire***'
    
    const Channel = member.guild.channels.cache.get(channelID);
    channel.send(message);
  })
}