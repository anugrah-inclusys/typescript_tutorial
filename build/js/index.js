"use strict";
//index signature
// interface transctionObj{
//     pizza:number,
//     cake:number,
//     job:number
// }
const todayTransaction = {
    pizza: 20,
    cake: 30,
    job: 2
};
console.log(todayTransaction.cake);
console.log(todayTransaction['pizza']);
const prop = 'pizza';
console.log(todayTransaction[prop]); //error when not specifies index type  
const student = {
    name: 'John',
    GPA: 3.5,
};
for (const key in student) {
    console.log(`${key}:${student[key]}`); //used keyof interface
}
Object.keys(student).map(key => {
    console.log(student[key]); //used keyof typeof object
});
