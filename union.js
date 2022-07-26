"use strict";
function combine(input1, input2) {
    let result;
    if (typeof input1 === 'number' && typeof input2 == 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
let ages = combine(23, 23);
let names = combine('Jack', 'Smith');
console.log(ages);
console.log(names);
