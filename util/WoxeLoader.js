const woxe = (event) => require(`../events/${event}`);
module.exports = client => {
  client.on('message', woxe('message'));
 };
//Ekliyeceğiniz Şeylerdeki require kısmını woxe Yapın