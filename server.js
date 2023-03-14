var http = require('http');
var dt = require('./myData.json');
var url = require('url');
var utils = require('./utils.js');
// import Car from './utils.js';
// import Car from './utils.js';
function tinhThuong(a,b){

  if(typeof a == 'number' && typeof b == 'number'){
    return (a/b);
  }else if(typeof a!= 'number'){
    return "so: "+a + "ko hop le";
  }else if (typeof b!= 'number'){
    return " so: " +b +"ko hop le";
  }else {
    return "loi ko xac dinh";
  }
}
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;

  var query=url.parse(req.url,true);
    
    console.log(query.host); //returns 'localhost:8080'
    console.log(query.pathname); //returns '/default.htm'
    console.log(query.search); //returns '?year=2017&month=february'
  res.write(txt+'\n');
  res.write("tong 2 so 6+7 = " + utils.tinhTong(6,7)+"\n");
  res.write(utils.showInfo('\n ngay 10 thang 3 nam 2023')+'\n');
  // res.write("thuong 2 so 6 : 3 = " + tinhThuong(6,3)+'\n');
  // res.write("thuong 2 so 6 : true = " + tinhThuong(6,true)+'\n');
  // res.write("thuong 2 so a : \"123\ = " + tinhThuong(6,"123")+'\n');


  // let Car = new Car("mi car is: "+ myCar,age() +"year");
  return res.end();
}).listen(8000);
