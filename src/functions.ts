//Type ALias
type Person2={
    name:string,
    age:number,
    active:boolean,
    album ?:(string | number)[]      //? opitonal
}
type stringOrNumber= (number |string) []

//Literal Types
let username1 :'admin' | 'user' | 'super_admin';
username1 = 'admin'

//functions
const add=(a:number,b:number) => {
    return a+b;
}
const logMsg=(msg:any):void=>{
    console.log(msg);
}
logMsg('Hello')
logMsg(add(5,3))
type mathFn=(a:number,b:number)=>number;
// interface mathFn {
//     (a: number, b: number): number;
// }
let multiply:mathFn=(a,b)=> a*b;
logMsg(multiply(5,2));

//optional parameters
const addAll=(a:number,b:number,c?:number)=>{
    if(typeof c !== 'undefined'){
        return a+b+c
    }
        return a+b
}
logMsg(addAll(1,2))

//Rest Parameters
const total=(...nums:number[])=>nums.reduce((prev,curr)=>prev+curr);
logMsg(total(1,3,4,6,7,9))
const createError=(errMsg:string):never=>{
    throw new Error(errMsg)
}
const infinite=()=>{
    let i:number=1
    while(true){               //return type never beacause infinity loop
        i++;
    }
}

//use of never type
const numberOrString=(value:number|string):string=>{
    if(typeof value === 'number') return 'number'
    if(isNumber(value)) return 'string'            //custom TypeGuard used as isNumber
    return createError('this is never happen')
}

//custom TypeGuard
const isNumber=(value:any):boolean=>{
    return typeof value === 'number'      
    ? true : false
}