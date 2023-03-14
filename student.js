module.exports = class student {
    constructor(ten,mssv){
        this.ten = ten;
        this.mssv = mssv;
    }

    getInfor = function () {
        return `${this.ten} - ${this.mssv} - ${this.getDiemTB()}`;
    }

    getDiemTB = function () {
        let diemTB = 5 + Math.floor(Math.random() * 6);
        return diemTB;
    }
}