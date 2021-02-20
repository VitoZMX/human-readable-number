module.exports = function toReadable(num) {

    number = String(num);
    let res = "";

    const SysNameNumber = ["hundred", "thousands", "millions", "billions", "trillions"];
    const NameMumberHundreds = ["ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const RealNameNumber = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

    if (number.length == 1) {
        if (number.slice(0, 1) == 0) {
            res = "zero";
        } else {
            res = RealNameNumber[number.slice(0, 1) - 1];
        }
    }
    if (number.length == 2) {
        if (number.slice(1, 2) == 0) {
            res = NameMumberHundreds[number.slice(0, 1) - 1];
        } else if (number.slice(0, 1) == 1 && number.slice(1, 2) !== 0) {
            res = RealNameNumber[number.slice(0, 2) - 1];
        } else {
            res = NameMumberHundreds[number.slice(0, 1) - 1] + " " + RealNameNumber[number.slice(1, 2) - 1];
        }
    }
    if (number.length == 3) {
        if (number.slice(1, 2) == 0 && number.slice(2, 3) == 0) {
            res = RealNameNumber[number.slice(0, 1) - 1] + " " + SysNameNumber[0];
        } else if (number.slice(2, 3) == 0 && number.slice(1, 2) !== 0) {
            res = RealNameNumber[number.slice(0, 1) - 1] + " " + SysNameNumber[0] + " " + NameMumberHundreds[number.slice(1, 2) - 1];
        } else if (number.slice(2, 3) == 0) {
            res = RealNameNumber[number.slice(0, 1) - 1] + " " + SysNameNumber[0] + " " + NameMumberHundreds[number.slice(1, 2) - 1];
        } else if (number.slice(1, 2) == 0) {
            res = RealNameNumber[number.slice(0, 1) - 1] + " " + SysNameNumber[0] + " " + RealNameNumber[number.slice(2, 3) - 1];
        } else if (number.slice(1, 2) == 1 && number.slice(2, 3) !== 0) {
            res = RealNameNumber[number.slice(0, 1) - 1] + " " + SysNameNumber[0] + " " + RealNameNumber[number.slice(1, 3) - 1];
        } else {
            res = RealNameNumber[number.slice(0, 1) - 1] + " " + SysNameNumber[0] + " " + NameMumberHundreds[number.slice(1, 2) - 1] + " " + RealNameNumber[number.slice(2, 3) - 1];
        }
    }
    return res;
}