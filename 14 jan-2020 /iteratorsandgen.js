// Iterators are like advanced loops 
function nameIterator(names) {
    let nextIndex = 0;

    return {
        nextFunc: () => {
            return nextIndex < names.length ? {value: names[nextIndex++], doneKey: false} : 
            { doneKey: true}
        } 
    }
}

// create an array of names
const namesArr = ['jack', 'jill', 'john'];
//console.log(namesArr) // the array contains Symbol.iterator
// init iterator and pass in the names array 
const names = nameIterator(namesArr);

console.log(names.nextFunc());



// Iterable values in Javascript
// The following values are iterable:
// Arrays
// Strings
// Maps
// Sets
// DOM data structures (work in progress)

//Plain objects are not iterable.

//below are all iterable 
//sets
//weak sets 
//maps 
//weak maps 

// let mySet = new Set([1,2,3,4,4])
// console.log(mySet)









//Default iterators

/*
const array = [1, 2, 3];

// get a fresh, new iterator to iterate over the array
const iterator = array[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
*/



//conditional (ternary) operator 
// condition ? exprIfTrue : exprIfFalse

//A simple example:

var age = 26;
var beverage = (age >= 21) ? "Beer" : "Juice";
console.log(beverage); // "Beer"


// ... Some built-in constructs, such as the spread syntax, use the same iteration protocol under the hood:

// basic for loop 
// const peopleNames = ['john', 'mike', 'paul', 'robert'];

// for (let index = 0; index < peopleNames.length; index++) {
//     console.log(index);
// }


//irrator if just a fancy for loop 

//Iterators

// Technically, iterables must implement the method named Symbol.iterator.
// The result of obj[Symbol.iterator] is called an iterator. It handles the further iteration process.
// An iterator must have the method named next() that returns an object {done: Boolean, value: any}, here done:true denotes the iteration end, otherwise the value is the next value.
