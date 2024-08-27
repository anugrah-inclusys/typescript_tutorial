"use strict";
//Literal Types
let username1;
username1 = 'admin';
//functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (msg) => {
    console.log(msg);
};
logMsg('Hello');
logMsg(add(5, 3));
// interface mathFn {
//     (a: number, b: number): number;
// }
let multiply = (a, b) => a * b;
logMsg(multiply(5, 2));
//optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
logMsg(addAll(1, 2));
//Rest Parameters
const total = (...nums) => nums.reduce((prev, curr) => prev + curr);
logMsg(total(1, 3, 4, 6, 7, 9));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) { //return type never beacause infinity loop
        i++;
    }
};
//use of never type
const numberOrString = (value) => {
    if (typeof value === 'number')
        return 'number';
    if (isNumber(value))
        return 'string'; //custom TypeGuard used as isNumber
    return createError('this is never happen');
};
//custom TypeGuard
const isNumber = (value) => {
    return typeof value === 'number'
        ? true : false;
};
