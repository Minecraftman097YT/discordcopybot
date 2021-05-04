const Discord = require("discord.js");

exports.run = (bot, message, args) => {
  setInterval(function() {
    message.channel.send(args.slice(0).join(" ")).catch(console.error);
  }, 1 * 1000);
};
