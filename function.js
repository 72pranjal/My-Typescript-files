"use strict";
function add(num1, num2) {
    return num1 + num2;
    // return 'Hello'; it gives error
}
function printresult(num) {
    console.log('Result=', num);
}
;
printresult(add(4, 12));
let combinevaluse;
combinevaluse = add;
console.log(combinevaluse(2, 5));
// function types and callbacks
function addAndHandel(n1, n2, cb) {
    let result = n1 + n2;
    cb(result);
}
addAndHandel(12, 23, (result) => {
    console.log(result);
});
