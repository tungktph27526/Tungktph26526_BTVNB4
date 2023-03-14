const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var tinh = require('./maytinh.js');

app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});

// server css as static
app.use(express.static(__dirname));

// get our app to use body parser 
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// app.post("/", (req, res) => {
//   var a = parseInt(req.body.a);
//   var b = parseInt(req.body.b);
//  res.send((a+"+"+b+"=" + (a+b))+"\b"+(a+"*"+b+"=" + (a*b))+"\b"+(a+"-"+b+"=" + (a-b)));
// //  res.send(a+"*"+b+"=" + (a*b));
// //  res.send(a+"-"+b+"=" + (a-b));
// });
app.post("/", (req, res) => {
  var so1 = parseFloat(req.body.a);
  var so2 = parseFloat(req.body.b);
  var dau = req.body.dau;
  var kq=0;
  if(dau=="+"){
    kq=tinh.add(parseFloat(so1),parseFloat(so2));
  }else if(dau=="-"){
    kq=tinh.subtract(parseFloat(so1),parseFloat(so2));
  }else if(dau=="x"){
    kq=tinh.multiply(parseFloat(so1),parseFloat(so2));
  }
  else if(dau=="/"){
    kq=tinh.division(parseFloat(so1),parseFloat(so2));
  }
 res.send(so1+" "+dau+" "+so2+" = "+kq);
});


