"use strict";
function identify(org, arg) {
    return org;
}
console.log(identify(2));
function findlength(a) {
    console.log(a.length);
    return a;
}
console.log(findlength([1, 2, 3, 4, 5, 6]));
function identify1(arg) {
    return arg;
}
let myidentify = identify1;
console.log(myidentify([1, 2, 3, 4, 5, 5]));
function identity2(arg) {
    return arg;
}
let myIdentity1 = identity2;
console.log(myIdentity1(4));
//   Generic Classes
class sum {
    constructor(a, b, c) {
        this.name = a;
        this.age = b;
        this.add = c;
    }
    print() {
        return {
            name: this.name,
            age: this.age,
            address: this.add
        };
    }
}
let obj = new sum(23, 23, 34);
console.log(obj.print());
// typeof operator
let s = 'helo';
let n = typeof s;
console.log(typeof n);
