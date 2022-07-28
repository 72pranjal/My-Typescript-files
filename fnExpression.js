"use strict";
//  function type expression
function greeter(fn) {
    fn('Good morning.....!');
}
function printToconsole(s) {
    console.log(s);
}
greeter(printToconsole);
