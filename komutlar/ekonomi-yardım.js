const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix

exports.run = async (client, message, args) => {
  const embed = new Discord.RichEmbed()
  .addField(`Ekonomi Komutları ${client.ekoayarlar.botismi}`, `${client.commands.filter(x => x.conf.katagori === "Ekonomi").map(x => `• | **${client.ekoayarlar.botunuzunprefixi}` + x.help.name + `** = ${x.help.description}`).join('\n ')}`)
  .setColor(client.ekoayarlar.renk)
  message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['ekonomi-yardım', 'ekonomiyardım'],
    permLevel: 0,
    katagori: "Ekonomi"
}

exports.help = {
    name: 'ekonomi',
    description: 'Ekonomi komutlarını gösterir.',
    usage: 'ekonomi'
}