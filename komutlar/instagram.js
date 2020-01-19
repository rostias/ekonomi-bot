const Discord = require("discord.js");
const instagram = require("user-instagram");
const Canvas = require("canvas"),
  Image = Canvas.Image,
  Font = Canvas.Font,
  path = require("path");
const request = require("node-superfetch");

exports.run = async (client, message, args) => {
  let kullanici = args.join(" ");
  if (!kullanici) return message.reply(`Bir kullanıcı adı girmediniz.`);

  instagram("https://www.instagram.com/" + kullanici).then(async data => {
    const biocuk = data.bio.length === 0 ? "Yok" : data.bio;
    const isimcik = data.fullName.length === 0 ? "Yok" : data.fullName;

    var gizlimi;
    var onaylimi;

    if (data.isPrivate === false) gizlimi = "Hayır";
    if (data.isPrivate === true) gizlimi = "Evet";
    if (data.isVerified === false) onaylimi = "Hayır";
    if (data.isVerified === true) onaylimi = "Evet";

    const { registerFont, createCanvas, loadImage } = require("canvas");
    const canvas = Canvas.createCanvas(401, 202);
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = 'white';
    ctx.fillRect(0,0,canvas.width, canvas.height);
    
    const avatar = await Canvas.loadImage(`${data.avatarHD}`)
    ctx.drawImage(avatar , 25 , 25 , 75 , 75)
    
    ctx.font = '15px sans-serif';
    ctx.fillStyle = "BLACK";
    ctx.fillText("İsim:" , 115, 40 )
    ctx.font = '15px sans-serif';
    ctx.fillStyle = "BLACK";
    ctx.fillText(`${isimcik}` , 115, 60 )
    
    
    ctx.font = '15px sans-serif';
    ctx.fillStyle = "BLACK";
    ctx.fillText("Takipçi Sayısı:" , 115, 140 )
    ctx.font = '15px sans-serif';
    ctx.fillStyle = "BLACK";
    ctx.fillText(`${data.subscriberCount}` , 115, 160 )
    
    
    
     ctx.font = '15px sans-serif';
    ctx.fillStyle = "BLACK";
    ctx.fillText("Gönderi Sayısı:" , 115, 90 )
    ctx.font = '15px sans-serif';
    ctx.fillStyle = "BLACK";
    ctx.fillText(`${data.postCount}` , 115, 110 )
        
    if(gizlimi == "Evet"){
     const kilitli = await Canvas.loadImage(`https://img.icons8.com/flat_round/64/000000/lock--v1.png`)
      ctx.drawImage(kilitli , 335 , 15 , 50 , 50)
    
    }else{
      const kilitsiz = await Canvas.loadImage(`https://img.icons8.com/flat_round/64/000000/unlock.png`)
      ctx.drawImage(kilitsiz , 335 , 15 , 50 , 50)
    }
    if(onaylimi == "Evet"){
      const onay = await Canvas.loadImage(`https://img.icons8.com/office/16/000000/checked.png`)
      ctx.drawImage(onay, 192 , 47 , 15 , 15)
    }
    const attachment = new Discord.Attachment(
              canvas.toBuffer(),
              "Hoşgeldin.png"
            );
    
    message.channel.send(attachment)
    
    

  });
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "c",
  description: "Belirlenen instagram hesabı hakkında bilgi verir.",
  usage: "instagram <hesap ismi>"
};
