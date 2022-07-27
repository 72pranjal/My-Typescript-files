enum Days{
    Mon="Monday",tue="Tuesday",wed="Wednesday",thu="thursday",fir="Firday",sat="Saturday",sun="Sunday"
};
// let whichday:Days;
// whichdays=Days.sun;
// console.log(whichdays);
function whichday(day:Days){
    return day;
}
let a=whichday(Days.Mon)
console.log(a);