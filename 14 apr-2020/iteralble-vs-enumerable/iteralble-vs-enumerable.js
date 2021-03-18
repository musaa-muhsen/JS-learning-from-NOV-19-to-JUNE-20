// emumerable defination = able to be counted by one-to-one correspondence with the set of all positive integers.

// Object.defineProperty(obj, prop, descriptor)
// The static method Object.defineProperty() defines a new property directly on an object, or modifies an existing property on an object, and returns the object.
/*
obj - The object on which to define the property.
prop - The name or Symbol of the property to be defined or modified.
descriptor - The descriptor for the property being defined or modified.
Return value - The object that was passed to the function.
*/

// for...of loops v for..in loops 
//iterable vs enumberable 
//What enumerable exactly means = It simply means that the property will show up if you iterate over the object using for..in loop or Object.keys

let names = ['Gandalf', 'Bilbo', 'Araggorn', 'Gimli', 'Legolas'];
names.elf = function () {
    return 12345
};
console.log(names);
let middleEarth = {
    'towns': [646556, 1233],
    'races': ['elves', 'hobbits', 'men']
};
middleEarth.creator = 'J.R.R. Tolkien';

console.log(Object.keys(names));


for (let p of middleEarth.races) {
    console.log(p)
}


//The Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
//Syntax Object.keys(obj)

const object1 = {
    z: 'summit',
    p: '42',
    a:  function () {
        return this;
    }
}

console.log(Object.keys(object1));

for (let p of object1.p) {
    console.log(p);

}

/*
Syntax
for (variable in object) {
  statement
  }
variable A different property name is assigned to variable on each iteration.
object Object whose non-Symbol enumerable properties are iterated over.
*/

for (let prop in middleEarth) { `${prop}: ${middleEarth[prop]}` }

