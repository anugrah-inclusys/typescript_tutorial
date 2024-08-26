"use strict";
let N = [1, 2, 3, 4, 5];
let Zz = ["A", "B", "C"];
let C = ["A", 2, "C", 4];
N.push(6);
//N.push("M");  //type!
C.push(6);
C.push("A");
//tuple
let test;
test = ["A", 2, true];
let test2 = ["B", 3, false]; //test is tuple & test2 is array eventhough both have same values (hover on variable-intellisense)
//test=test2               //test 2 maynot be 3 elements.
test[1] = 4;
let myObj;
myObj = test;
const details = { name: "John", age: 30, city: "New York" };
//details.name=14;
details.name = "new_ohn";
//details.active=true;
console.log(details);
//type & interface same output,but moreover interface depicts class & have methods
let P1 = {
    name: "John",
    age: 30,
    active: true,
    album: ["A", "B", 12]
};
// let P2: Person={
//     age:30,
//     active:true,
//     album:["A","B",12]
// }
let P3 = {
    name: "John",
    age: 30,
    active: true,
};
const greet = (person) => {
    return person.name;
};
const greet2 = (person) => {
    var _a;
    // return person.album;                //noerrro
    // return person.album.toString()      //possibly undefined or use if condition
    return (_a = person.album) === null || _a === void 0 ? void 0 : _a.toString();
};
var Grade;
(function (Grade) {
    Grade[Grade["A"] = 5] = "A";
    Grade[Grade["B"] = 6] = "B";
    Grade[Grade["C"] = 7] = "C";
})(Grade || (Grade = {}));
