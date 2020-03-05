var nodemailer = require('nodemailer');
var fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();
var qr = require('qr-image');
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');

var mail = function(req){
    var qr_data = {
      gid: req.gid,
      name : req.name,
      event : req.event,
      email : req.email
    };
			
		
    //const hash = cryptr.encrypt(qr_data);
    // const unhash = cryptr.decrypt(hash);
    
var qr_png = qr.image(JSON.stringify(qr_data), { type: 'png' });
qr_png.pipe(fs.createWriteStream('./qrcode/'+req.gid+'.png'));

setTimeout(function(){
	var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL, //add ur gmail id
      pass: process.env.PASS  //add id password
    }
  });
  
  var mailOptions = {
    from: process.env.EMAIL, //add ur gmail id
    to: req.email,
    subject: 'Sucessfully Registered For GENERO\'19',
    html: "<!DOCTYPE html><html><head></head><body style=\"background-image: linear-gradient(-90deg,#A8FF3E, #F8FF98);\"><div class=\"\" style=\"color: black;\"><h1 style=\"font-size: 9vw; text-align: center; margin-top: 10px;\">GENERO'19</h1><div class=\"\" style=\"text-align: center;\"><span style=\"font-size: 3vw;\">Congratulations!&nbsp;</span><span style=\"font-size: 3vw;font-weight:600;\">"+req.name+",</span></div><div class=\"\" style=\"margin-top: 50px;text-align: center;\"><span style=\"font-size: 1.8vw; font-weight: 600;\">Genero ID:</span><span style=\"font-size: 1.8vw; font-weight: 600;\">"+req.gid+"</span></div><p style=\"color: black;font-size: 4vw; text-align: center;\">YOUR BOOKING IS CONFIRMED!</p><p style=\"color: black; font-size: 2vw; text-align: center;\">HOPE YOU'LL ENJOY THE TECHNO-CULTURAL FEST</p></div></body></html>",
    attachments: [
        {
            filename: req.gid+'.png',
            content: fs.createReadStream('./qrcode/'+req.gid+'.png'),
          }
      ]
    
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
     // console.log(error);
     
    } else {
      console.log('Email sent: ' + info.response);
      
    }
  }); 
}, 1000);

//var svg_string = qr.imageSync(req.gid+'.png', { type: 'png' });



}

module.exports = {mail: mail};