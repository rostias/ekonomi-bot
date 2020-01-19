const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Woxe - Gerekli kurulum tamamlandı!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Woxe - ${client.user.tag} olarak giriş sağlandı...`);
  client.user.setActivity(`WoxeOfficial#0001 CodAre`, {type: 4})


};