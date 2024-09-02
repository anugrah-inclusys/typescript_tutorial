//index signature

interface transctionObj{
    readonly[key: string]: any        //value of key index shouldnt be boolean
}
// interface transctionObj{
//     pizza:number,
//     cake:number,
//     job:number
// }

const todayTransaction:transctionObj={
    pizza:20,
    cake:30,
    job:2
}

console.log(todayTransaction.cake);
console.log(todayTransaction['pizza']);
const prop:string='pizza'
console.log(todayTransaction[prop]);      //error when not specifies index type  

// todayTransaction.pizza=4
// todayTransaction.prop=5                //readonly

interface Student {
    name:string,
    GPA:number,
    classes?:number[]
}
const student:Student={
    name:'John',
    GPA:3.5,

}

for (const key in student){
    console.log(`${key}:${student[key as keyof Student]}`)       //used keyof interface
}

Object.keys(student).map(key=>{
    console.log(student[key as keyof typeof student]);           //used keyof typeof object
    
})