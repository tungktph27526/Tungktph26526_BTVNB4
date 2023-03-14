exports.tinhTong = function (a,b){
    return (a + b);
}
exports.showInfo = function(mess){
    mess += "";
    var sInfo = "thong tin ra la: "+mess.toUpperCase();
    return sInfo;
}
// export default class Car {
//     constructor(name, year) {
//       this.name = name;
//       this.year = year;
//     }
//     age() {
//         let date = new Date();
//         return date.getFullYear() - this.year;
//       }
//   }