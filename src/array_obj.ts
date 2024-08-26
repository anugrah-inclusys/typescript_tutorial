let N=[1,2,3,4,5];
let Zz:string[]=["A","B","C"];
let C=["A",2,"C",4];

N.push(6);
//N.push("M");  //type!
C.push(6);
C.push("A");

//tuple
let test:[string,number,boolean];
test=["A",2,true];
let test2=["B",3,false];   //test is a tuple, and test2 is an array, even though both have the same values (hover on the variable—IntelliSense).
//test=test2               //test2 may not have 3 elements.

test[1]=4;


let myObj:object;
myObj=test;
const details={name:"John",age:30,city:"New York"};
//details.name=14;
details.name="new_ohn";
//details.active=true;
console.log(details);

// type Person={
//     name:string,
//     age:number,
//     active:boolean,
//     album ?:(string | number)[]      //? opitonal
// }

interface Person{
    name:string,
    age:number,
    active:boolean,
    album ?:(string | number)[]      //? opitonal
}
//type and interface produce the same output, but an interface more closely resembles a class and can have methods.


let P1: Person={
    name:"John",
    age:30,
    active:true,
    album:["A","B",12]
}
// let P2: Person={
//     age:30,
//     active:true,
//     album:["A","B",12]
// }

let P3: Person={
    name:"John",
    age:30,
    active:true,
}

const greet=(person:Person)=>{
    return person.name;
}


const greet2=(person:Person)=>{
   // return person.album;                //noerrro
   // return person.album.toString()      //possibly undefined or use if condition
   return person.album?.toString()

}
  enum Grade{
    A=5,       //Defaults start at 0; now increment the grade from 5, 6, 7.
    B,
    C
  }
