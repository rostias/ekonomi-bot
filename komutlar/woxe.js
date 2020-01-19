const Discord = require("discord.js");

exports.run = (client ,message, args,) =>{
  
  const emoji = new Discord.RichEmbed()
  .setDescription("<a:woxeload:652817885869375508>")
  message.channel.sendEmbed(emoji);
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['altyapı-info'],
    permLevel: 0
}

exports.help = {
    name: 'altyapı-info',
    description: 'İAltyapıyı Yapan Kişiyi Söyler',
    usage: 'altyapı-info'
}