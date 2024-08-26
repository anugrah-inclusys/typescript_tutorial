let username:number | string='anugrah' //union type
username=112;
//username=true   //Error because of "type strict."
let Z:any;
Z=true;
Z="a";
Z=12;
let a:string="c";
a="d";
let b:number=45
//b="lol"
const sum=(a:string,b:number)=>{     //IntelliSense says sum returns a string.
    return a+b;
}
let ex :RegExp=/\w+/g       //By pointing at the variable, IntelliSense specifies what type it is.

let mytuple:[string,number,boolean]=['sh',12,true]
let myArr=[a,b];
myArr.push('shift')
console.log(myArr);
myArr.unshift('d')

