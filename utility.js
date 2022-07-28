"use strict";
// partial<type>
let user = (id, data) => {
    return data;
};
let aa = user(1, {
    name: 'Tom',
    // age:23,
    // developer:true
});
console.log(aa.name);
const obj1 = { x: 4, y: 5, z: 6 };
console.log(obj1);
const obj2 = {
    titel: 'Hello my friends',
};
// obj2.titel='hello'; it gives error
// 4.Record<type>
const obj3 = {
    user2: {
        name: 'Bob',
        age: 26,
        developer: false,
    },
    user3: {
        name: 'Ana',
        age: 34,
        developer: true,
    }
};
console.log(obj3.user2);
const input = {
    name: 'Tom',
    completed: true,
    // description:'clean room',
};
console.log(input.name);
const input4 = {
    description: 'clean room',
};
console.log(input4);
let jhonDrinks;
jhonDrinks = 'Coffee';
let JamesDrinks;
JamesDrinks = 'Coffee';
function paintstarship(id, color) {
    return color;
}
console.log(paintstarship(1, 'red'));
function paintstarship1(id, color) {
    return {
        id,
        color,
    };
}
console.log(paintstarship1(1, 'red'));
