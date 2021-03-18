// Symbol — a unique value that's not equal to any other value

const SYM1 = Symbol('sym1');
const SYM2 = Symbol('sym2');

//console.log(sym1 == sym2); // false because they're both unique 
//same as 
//console.log(Symbol('123') === Symbol('123'));// false aswell as no two symbols can be the same 

console.log(typeof sym2); // symbol a pure primitive type 

const KEY1 = Symbol('hello');
const KEY2 = Symbol();


const myObj = {};

myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'world';
myObj.key3 = 'kitty';
myObj.key4 = 'cat';

console.log(myObj); // {Symbol(hello): "Prop1"}

console.log(myObj[KEY1]); //Prop1 

const NAME = Symbol()

//emuerable aka iratable //symbols are not enumerable in "for..in loops" 
for (let i in myObj) {
    console.log(`${i}: ${myObj[i]}`);
}

// symbols are ignored by JSON.stringify 
console.log(JSON.stringify({ key: 'val' }));
console.log(JSON.stringify({ [Symbol('sym1')]: 'val' }));



//below is 2 versions of the "for of" loop =====================

for (const value of ['a', 'b', 'c']) {
    console.log(value) //value
}

for (const [index, value] of ['a', 'b', 'c'].entries()) {
    console.log(index); // index
    console.log(value); // value 
} 