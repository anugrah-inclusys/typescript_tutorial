"use strict";
let a1 = 'hello_man';
let a2 = a1; //less specific
let a3 = a1; //more specific
let a4 = 'Bye';
let a5 = 10;
const addOrConcat = (a, b, c) => {
    if (c === 'add') {
        return a + b;
    }
    return '' + a + b;
};
// let myVal:string=addOrConcat(1,2,'concat')              //have problem
let myVal = addOrConcat(1, 2, 'concat');
// let myVal1:string=addOrConcat(1,2,'add') as string      //no problem, typescript belived assertion
// 10 as string;
10;
//DOM
let img = document.querySelector('img');
img.src;
let Myimg = document.getElementById('#img');
Myimg.src;
