//generics
const isObj=<Type>(arg:Type):boolean=>{
    return (typeof arg ==='object' && !Array.isArray(arg) && arg !== null )
}
console.log(isObj([1,2,3]));
console.log(isObj({A:1,B:2,C:3}));                //true but every type is accepted
console.log(isObj(2));

class stateObject<Type>{
    private data:Type
    constructor(value:Type){
        this.data=value
    }
    get state():Type{
        return this.data
    }
    set state(value:Type){
        this.data=value
    }
}
const store=new stateObject<string>('john')
store.state='dave'
// store.state=123                           //ts inffered type when intialize with "john"
console.log(store.state);
const myState=new stateObject<(string | number)>(12)
console.log(myState.state);
myState.state="pOp"
console.log(myState.state);

