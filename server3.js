var http = require('http');
var url = require('url');
var fs = require('fs');
var ultis = require('./utils.js');
const Student = require('./student.js');
const NhanVien = ultis.NhanVien;

http.createServer(function (req, res) {
    fs.readFile('lab.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });

        let st1 = new Student('Le Tuan Anh', 'PH27675');
        res.write(st1.getInfor());
        let st2 = new Student('kieu thanh tung', 'PH27675');
        res.write(st2.getInfor());

        var fs = require('fs');
        var dir = './fileUpload/json';

        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        fs.writeFile(dir+ 'data2.json', '"compilerOtions!":{"module":"common.js","target":"es6"}', function (err) {
            if (err) throw err;
            console.log('Saved!');
        });

        return res.end();
    })
}).listen(8000);