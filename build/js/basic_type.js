"use strict";
let username = 'anugrah'; //union type
username = 112;
//username=true   //Error because of "type strict."
let Z;
Z = true;
Z = "a";
Z = 12;
let a = "c";
a = "d";
let b = 45;
//b="lol"
const sum = (a, b) => {
    return a + b;
};
let ex = /\w+/g; //By pointing at the variable, IntelliSense specifies what type it is.
let mytuple = ['sh', 12, true];
let myArr = [a, b];
myArr.push('shift');
console.log(myArr);
myArr.unshift('d');
