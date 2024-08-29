"use strict";
class Coder {
    constructor(name, age, music, lang = 'Ts') {
        this.name = name;
        this.age = age;
        this.music = music;
        this.lang = lang;
        this.name = name;
        this.age = age;
        this.music = music;
        this.secondLang = 'JS';
    }
    getAge() {
        return this.age;
    }
}
const Dave = new Coder('dave', 11, 'lofy');
console.log(Dave.getAge());
console.log(Dave.name);
// console.log(Dave.age);    //private
// console.log(Dave.lang);     //protected
console.log(Dave.secondLang);
class webDev extends Coder {
    constructor(name, age, music, lang) {
        super(name, age, music, lang);
        this.lang = lang;
    }
    getlang() {
        // return this.age         //'age' is private and only accessible within class 'Coder'
        return this.lang; //'lang' is protected no problem with subclass
    }
}
const Zara = new webDev('ara', 11, 'pop', 'mla');
console.log(Zara.getlang());
class Guitarist {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    play(action) {
        return `Guitarist ${this.name} is ${action}ing`;
    }
}
const role = new Guitarist('hari', 14);
console.log(role.play('act'));
class Peep {
    getCount() {
        return Peep.count;
    }
    constructor(name, id) {
        this.name = name;
        this.id = ++Peep.count;
        this.name = name;
    }
}
Peep.count = 0;
const role1 = new Peep('john', 1);
const role2 = new Peep('john', 1);
console.log(role1.getCount());
console.log(role1.id);
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else {
            throw new Error('Invalid data');
        }
    }
}
let fole = new Bands();
fole.data = ['a', 'b'];
// fole.data=[...fole,'a']                //check!!!!
console.log(fole.data);
