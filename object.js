"use strict";
;
let stdata = {
    name: 'Tom',
    age: 'df',
    address: 'USA',
    intrest: 'Cricket',
    hobby: ['cricket', 'cooking']
};
console.log(stdata);
for (let phobby of stdata.hobby) {
    console.log(phobby.toUpperCase());
}
