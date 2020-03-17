client.on('message', msg => {
  if (msg.content === 'sea') {
    msg.reply(':tada: Tebrikler! Gizli kodu başarıyla buldun. Rolün başarıyla verilmiştir. :tada:');
    msg.guild.roles.find(role => role.name === "Lucky");
    msg.addRole
  }
}); 