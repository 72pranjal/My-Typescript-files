"use strict";
const b = document.getElementById('addbtn');
let input1 = document.getElementById('num1');
let input2 = document.getElementById('num2');
function add(num1, num2) {
    let a = num1 + num2;
    let ele = document.getElementById('dd');
    ele.innerHTML = a.toString();
    // resetthevalue();
    return a;
}
b === null || b === void 0 ? void 0 : b.addEventListener('click', () => {
    console.log(add(+input1.value, +input2.value));
});
