type One=string
type Two=string | number
type Three='hello'

let a1:One='hello_man'
let a2=a1 as Two   //less specific
let a3=a1 as Three //more specific
let a4=<string> 'Bye'
let a5=<Two> 10;

const addOrConcat=(a:number,b:number,c: 'add' | 'concat'):string | number=>{
    if(c==='add'){
        return a+b;
    }
    return ''+a+b;
}

// let myVal:string=addOrConcat(1,2,'concat')              //have problem
let myVal:string=addOrConcat(1,2,'concat') as string
// let myVal1:string=addOrConcat(1,2,'add') as string      //no problem, typescript belived assertion

// 10 as string;
(10 as unknown) as string;

//DOM
let img=document.querySelector('img')!;
img.src
let Myimg=document.getElementById('#img') as HTMLImageElement;
Myimg.src
