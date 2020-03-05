const express = require('express');
const server  = express();
const session = require('express-session');
const bodyParser = require('body-parser');
server.use(bodyParser.urlencoded({ extended: true }));
server.set('view engine', 'ejs');
server.use(session({secret: "whatever"}));
var User = require('../db');
var impo_mail = require('./mail');
const dotenv = require('dotenv');
dotenv.config();

var login = function(req,res){
    if(req.body.username==process.env.USER1 &&  req.body.password == process.env.PASS1){
        req.session.sess_admin_info = req.body.username;
        req.session.sess_admin_pass= req.body.password;
        var doc = [req.body.username]
        res.render('home',{doc: doc});
    }
      else if(req.body.username==process.env.USER2 &&  req.body.password == process.env.PASS2){
        req.session.sess_admin_info = req.body.username;
        req.session.sess_admin_pass= req.body.password;
        var doc = [req.body.username]
        res.render('home',{doc: doc});
    }
    else if(req.body.username==process.env.USER3 &&  req.body.password == process.env.PASS3){
        req.session.sess_admin_info = req.body.username;
        req.session.sess_admin_pass= req.body.password;
        var doc = [req.body.username]
        res.render('home',{doc: doc});
    }
    else if(req.body.username==process.env.USER4 &&  req.body.password == process.env.PASS4){
        req.session.sess_admin_info = req.body.username;
        req.session.sess_admin_pass= req.body.password;
        var doc = [req.body.username]
        res.render('home',{doc: doc});
      }
      else if(req.body.username==process.env.USER5 &&  req.body.password == process.env.PASS5){
          req.session.sess_admin_info = req.body.username;
          req.session.sess_admin_pass= req.body.password;
          var doc = [req.body.username]
          res.render('home',{doc: doc});
      }
      else if(req.body.username==process.env.EVENT &&  req.body.password == process.env.PASS_EVENT){
        req.session.sess_admin_info = req.body.username;
        req.session.sess_admin_pass= req.body.password;
        var doc = [req.body.username]
        res.render('home',{doc: doc});
    }
    else{
      res.redirect("/admin?login=failed");
    }
}


var register = function(req,res){
  User.count({}, function( err, count){
    var info = {
      user : req.session.sess_admin_info,
      gid: count+1000
  }
  if(!('user' in info)){
    res.redirect("/admin?status=login");
}
if((info.user==undefined)){
    res.redirect("/admin?status=login");
}
else{
    info = Object.assign({}, info, req.body);
    var events = {event: {}}
    var count=((JSON.stringify(info.event)).split(",").length - 1);
    /*if((JSON.stringify(info.event)).includes(",")){
        count++;
    }*/
        if(count==0){
          if(info.event=="combo"){
            events.event[info.event] = 0 ;
          }
          else if(info.event=="all_events"){
            events.event[info.event] = 0 ;
          }
          else if(info.event=="t-shirt"){
            events.event[info.event] = 0 ;
          }
          else if(info.event=="day2+2event"){
            events.event["SA_Day-2"] = 0 ;
            events.event["Event1"] = 0 ;
            events.event["Event2"] = 0 ;
          }
          else if(info.event=="day3"){
            events.event["SA_Day-3"] = 0 ;
          }
          else if(info.event=="day2&day3"){
            events.event["SA_Day-2"] = 0 ;
            events.event["SA_Day-3"] = 0 ;
          }
          else if(info.event=="Drone_Competition/boeing_aeromodelling"){
            events.event[info.event] = 0 ;
          }
          else if(info.event=="Geeks_of_the_galaxy(hackathon)"){
            events.event[info.event] = 0 ;
          }
          else if(info.event=="Fashion_Show"){
            events.event[info.event] = 0 ;
          }
          else if(info.event=="Business_Conclave"){
            events.event[info.event] = 0 ;
          }
          else if(info.event=="FITATHONE"){
            events.event[info.event] = 0 ;
          }
          else if(info.event=="Blind_Meet"){
            events.event[info.event] = 0 ;
          }
          else if(info.event=="Pubg_Mobile"){
            events.event[info.event] = 0 ;
          }
          else if(info.event=="Tekken3"){
            events.event[info.event] = 0 ;
          }
          else if(info.event=="FIFA'19"){
            events.event[info.event] = 0 ;
          }
          else if(info.event=="Counter_Strike-Go"){
            events.event[info.event] = 0 ;
          }
          else if(info.event=="Need_For_Speed_Most_Wanted"){
            events.event[info.event] = 0 ;
          }
          else if(info.event=="Battle_Of_Bands"){
            events.event[info.event] = 0 ;
          }
          else if(info.event=="Nukkad"){
            events.event[info.event] = 0 ;
          }
        }
        else
        {
            for(var key in info.event)
{
    if(info.event.hasOwnProperty(key)){
          
          if(info.event[key]=="combo"){
            events.event[info.event[key]] = 0 ;
          }
          else if(info.event[key]=="all_events"){
            events.event[info.event[key]] = 0 ;
          }
          else if(info.event[key]=="t-shirt"){
            events.event[info.event[key]] = 0 ;
          }
          else if(info.event[key]=="day2+2event"){
            events.event["SA_Day-2"] = 0 ;
            events.event["Event1"] = 0 ;
            events.event["Event2"] = 0 ;
          }
          else if(info.event[key]=="day3"){
            events.event["SA_Day-3"] = 0 ;
          }
          else if(info.event[key]=="day2&day3"){
            events.event["SA_Day-2"] = 0 ;
            events.event["SA_Day-3"] = 0 ;
          }
          else if(info.event[key]=="Drone_Competition/boeing_aeromodelling"){
            events.event[info.event[key]] = 0 ;
          }
          else if(info.event[key]=="Geeks_of_the_galaxy(hackathon)"){
            events.event[info.event[key]] = 0 ;
          }
          else if(info.event[key]=="Fashion_Show"){
            events.event[info.event[key]] = 0 ;
          }
          else if(info.event[key]=="Business_Conclave"){
            events.event[info.event[key]] = 0 ;
          }
          else if(info.event[key]=="FITATHONE"){
            events.event[info.event[key]] = 0 ;
          }
          else if(info.event[key]=="Blind_Meet"){
            events.event[info.event[key]] = 0 ;
          }
          else if(info.event[key]=="Pubg_Mobile"){
            events.event[info.event[key]] = 0 ;
          }
          else if(info.event[key]=="Tekken3"){
            events.event[info.event[key]] = 0 ;
          }
          else if(info.event[key]=="FIFA'19"){
            events.event[info.event[key]] = 0 ;
          }
          else if(info.event[key]=="Counter_Strike-Go"){
            events.event[info.event[key]] = 0 ;
          }
          else if(info.event[key]=="Need_For_Speed_Most_Wanted"){
            events.event[info.event[key]] = 0 ;
          }
          else if(info.event[key]=="Battle_Of_Bands"){
            events.event[info.event[key]] = 0 ;
          }
          else if(info.event[key]=="Nukkad"){
            events.event[info.event[key]] = 0 ;
          }
}
}
            
        }
    
delete info.event;
counts = {no_events: parseInt(count)+1}
info = Object.assign({}, info, events, counts);
info["registered_by"] = info["user"];
delete info["user"];
//     var myData = new User(info);
//     myData.save()
//       .then(item => {
                    
//                     impo_mail.mail(info);
//         res.redirect("/login?status=success");
        
      
//       })
//       .catch(err => {
//         res.redirect("/login?status=error");
//       });

User
.find({
  txnid: req.body.txnid     
})
.then(doc => {

          
            if(doc.length == 0){
              User
.find({
  id_no: req.body.id_no     
})
.then(doc1 => {
  if(doc1.length == 0){
              var myData = new User(info);
            myData.save()
              .then(item => {
                            
                            impo_mail.mail(info);
                res.redirect("/login?status=success");
                
              
              })
             
             }
            else{
              res.redirect("/login?status=error");
            }
          })
          .catch(err => {
            console.error(err)
          })
        }
        else{
          res.redirect("/login?status=error");
        }
  

})
.catch(err => {
  console.error(err)
})
 }
})
    
    
    
}

var search = function(req,res){
   
  if(req.body.type=="gid"){
    var regex = new RegExp("^" + req.body.search + "$", "i");
    User
    .find({
      gid: regex     
    })
    .then(doc => {
      var user = {user:req.session.sess_admin_info}
      doc = Object.assign({}, doc, user);
      res.render('search_res',{doc: doc, res:res});
    })
    .catch(err => {
      console.error(err)
    })
      }
    
    else if(req.body.type=="email"){
        User
  .find({
    email: req.body.search     
  })
  .then(doc => {
    var user = {user:req.session.sess_admin_info}
    doc = Object.assign({}, doc, user);
    res.render('search_res',{doc: doc, res:res});
  })
  .catch(err => {
    console.error(err)
  })
    }

    else if(req.body.type=="mob_no"){
      User
.find({
  mobile : req.body.search     
})
.then(doc => {
  var user = {user:req.session.sess_admin_info}
  doc = Object.assign({}, doc, user);
  res.render('search_res',{doc: doc, res:res});
})
.catch(err => {
  console.error(err)
})
  }

  else if(req.body.type=="txnid"){
      User
.find({
  txnid: req.body.search     
})
.then(doc => {
  var user = {user:req.session.sess_admin_info}
  doc = Object.assign({}, doc, user);
  res.render('search_res',{doc: doc, res:res});
})
.catch(err => {
  console.error(err)
})
  }

  else if(req.body.type=="id_no"){
    var regex = new RegExp("^" + req.body.search + "$", "i");
    User
.find({
  id_no: regex
})
.then(doc => {
var user = {user:req.session.sess_admin_info}
doc = Object.assign({}, doc, user);
res.render('search_res',{doc: doc, res:res});
})
.catch(err => {
console.error(err)
})
}

}


// var attend = function(req,res){
//   User
//     .find({
//       gid: req.body.gid     
//     })
//     .then(doc => {
//       for( var key in doc) {
//       //HAVE TO BE UPDATED HERE
//       for (var i in req.body.check){
//         var up = (req.body.check[i]);
//         //console.log(doc[key].event)
//          var x = doc[key].event[up];
//         // var query = { gid: req.body.gid  };
//          var up_val = {[up]:"1"}
//          var eve = {event:{}}
//         eve.event = Object.assign({}, doc[key].event , up_val);
//         // console.log(eve)
//          delete doc[key].event;
//         // console.log(doc[key])
//          doc[key] = Object.assign({}, doc[key], eve);
//          res.send(doc[key])
//          //console.log(doc[key].event)
//         // console.log(doc[key])
//         // doc[key].save
//         // res.send(doc[key])
//        /* User.updateOne({gid: req.body.gid   }, {$set : {[doc[key].event[up]]: "1"}}, (err, item) => {
//           if (err) {
//             console.log("Something wrong when updating data!");
//         }
//         res.send(item);
//     }); */
//         //console.log([doc[key].event[up]])
//       /*User.findOneAndUpdate({gid: req.body.gid}, {$set:{[doc[key].event[up]]: "1"}}, {new: true}, (err, doc) => {
//         if (err) {
//             console.log("Something wrong when updating data!");
//         }
//         res.send(doc);
//     });*/
//     }
//   }
      
//       //res.render('search_res',{doc: doc});
//     })
//     .catch(err => {
//       console.error(err)
//     })
// } 

var attend = function(req,res){
  User
  .find({
    gid: req.body.gid     
  })
  .then(doc => {
      var to_update = { [req.body.check] : "1"}
      var eve = {}
      eve = Object.assign({}, doc[0].event , to_update);
     User.updateOne({gid: req.body.gid   }, {$set : {  event : eve }}, (err, item) => {
                if (err) {
                  console.log("Something wrong when updating data!");
              }
              
              res.redirect("/login?status=attended");
          });
     
  })
  .catch(err => {
    console.error(err)
  })
}

var search_user = function(req,res){
    User
    .find({
      gid: req.params.gid    
    })
    .then(doc => {
      var user = {user:req.session.sess_admin_info}
  doc = Object.assign({}, doc, user);
  res.render('search_res',{doc: doc});
    })
    .catch(err => {
      console.error(err)
    })
      }


module.exports = {login: login, register: register, search: search, attend: attend, search_user: search_user};