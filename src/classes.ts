class Coder{
    // name :string
    // age:number
    // music:string
    secondLang !:string
     constructor(
         public name:string,
         private age:number,
         public readonly music:string,
         protected lang:string='Ts'
     ){
         this.name = name;
         this.age = age;
         this.music = music;
         this.secondLang='JS'
     }
     public getAge(){
         return this.age;
     }
 }
 
 const Dave=new Coder('dave',11,'lofy')
 console.log(Dave.getAge());
 console.log(Dave.name);
 // console.log(Dave.age);    //private
 // console.log(Dave.lang);     //protected
 console.log(Dave.secondLang);



 class webDev extends Coder{
    constructor(name: string, age: number, music: string, lang: string) {
        super(name, age, music, lang);
        this.lang = lang;
    }
    public getlang(){
       // return this.age         //'age' is private and only accessible within class 'Coder'
       return this.lang;          //'lang' is protected no problem with subclass
    }
 }
 const Zara=new webDev('ara',11,'pop','mla')
 console.log(Zara.getlang());
//  console.log(Zara.age);          //'age' is private and only accessible within class 'Coder'
// console.log(Zara.lang);             //'lang' is protected and only accessible within class 'Coder' and its subclasses.

interface Musician{
    name: string;
    age: number;
    play(action:string):string
}

class Guitarist implements Musician{
    name: string;
    age: number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    public play(action:string):string{
        return `Guitarist ${this.name} is ${action}ing`
    }
}
const role=new Guitarist('hari',14)
console.log(role.play('act'));

class Peep {
    static count :number=0
    public getCount(){
        return Peep.count
    }
    public id:number
    constructor(public name:string,id:number){
        this.id=++Peep.count
        this.name=name
    }
}
const role1=new Peep('john',1);
const role2=new Peep('john',1);
console.log(role1.getCount());
console.log(role1.id);


class Bands{
    private dataState:string[]
    constructor(){
        this.dataState=[]
    }
    public get data():string[]{
        return this.dataState;
    }
    public set data(value:string[]){
        if(Array.isArray(value) && value.every(el=>typeof el === 'string')){
            this.dataState=value;
            return
        }else{
            throw new Error('Invalid data');
        }
    }
}

let fole=new Bands()
fole.data=['a','b']
// fole.data=[...fole,'a']                //check!!!!
console.log(fole.data);

