"use strict";
var Days;
(function (Days) {
    Days["Mon"] = "Monday";
    Days["tue"] = "Tuesday";
    Days["wed"] = "Wednesday";
    Days["thu"] = "thursday";
    Days["fir"] = "Firday";
    Days["sat"] = "Saturday";
    Days["sun"] = "Sunday";
})(Days || (Days = {}));
;
// let whichday:Days;
// whichdays=Days.sun;
// console.log(whichdays);
function whichday(day) {
    return day;
}
let a = whichday(Days.Mon);
console.log(a);
