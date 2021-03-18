//.reverse
// Reverses the order of an array. It’s important to remember that this method mutates the original array.

const sizes = new Array('big', 'bigger', 'biggest');

sizes.reverse()

// remember to re verse twice !!!!1
//const sizes2 = sizes.reverse()
//sizes.prototype.reverse() // cannot write prototype 
//console.log(sizes2) //["big", "bigger", "biggest"] // when reversed twice 
console.log(sizes) // ["biggest", "bigger", "big"]

// using reverse with split 
const helloWorld = 'hello world';

const makeIndie = helloWorld.split(''); // makes into individual arrays 
// const reverseTwo = reverseOne.reverse();
// const makeString = reverseTwo.join('')
const makeString = makeIndie.reverse().join(''); //join makes the array a string 
console.log(makeString)


// ==============================================================================================
//The split() method is used to split a string into an array of substrings, and returns the new array.
//Tip: If an empty string ("") is used as the separator, the string is split between each character.
//Note: The split() method does not change the original string.
// spliting the string as in spliting hairs or primitives 


const str = 'The quick brown fox jumps over the lazy dog.';

const newArr = str.split()
console.log(newArr) // ["The quick brown fox jumps over the lazy dog."]0: "The quick brown fox jumps over the lazy dog."length: 1__proto__: Array(0)

const newArr2 = str.split('') // no gap
console.log(newArr2) // individual letter array of 44

const newArr3 = str.split(' ') //gap of one
console.log(newArr3) // each letter because there's one gap // 9 in the array

const newArr4 = str.split('o')
console.log(newArr4) // array of 5 ["The quick br", "wn f", "x jumps ", "ver the lazy d", "g."]

const newArr5 = str.split('') // no gap
console.log(newArr5[0]) // T

const newArr6 = str.split(' ') // gap of one
console.log(newArr6[1]) //quick


// ==============================================================================================
// .shift
// shift someone from the front of the cue  
// Removes the first element from an array and returns it. Favor using .filter instead of .shift as mutations are 👺.
// shift the first element off the array  

const friends = ['toby', 'mark', 'andy'];

friends.shift()

console.log(friends) // (2) ["mark", "andy"] 0: "mark" 1: "andy" length: 2

// ==============================================================================================
// .slice 
// slice of pie 
/*
Allows you to create a new array from a portion of an existing array. It also doesn’t modify the original array.
.slice takes two arguments. The first argument is the index of the beginning item you want to grab in the array and the second argument is the index of the end item you want to grab in the array, not inclusive. So for example, if you do .slice(1,4), the array that is returned will have whatever elements were in the 1st, 2nd, 3rd index in the original array, not the 4th.
*/
// Zero-based index before which to end extraction. slice extracts up to but not including end. For example, slice(1,4) extracts the second element through the fourth element (elements indexed 1, 2, and 3).
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

const animalsSliced = animals.slice(1)
console.log(animalsSliced) //(4) ["bison", "camel", "duck", "elephant"] 0: "bison"1: "camel"2: "duck"3: "elephant"length: 4


const animalsSliced2 = animals.slice(0, 1)
console.log(animalsSliced2) //["ant"]

const animalsSliced3 = animals.slice(2, 3)
console.log(animalsSliced3) //["camel"]0: "camel"

// ==============================================================================================
// .some 
// Used to determine if ANY element in an array passes a test specified by a given function. The function passed to some gets invoked once for each element in the array. As soon as that function returns a truthy value, some will stop executing and return true. If the function passed to some never returns a truthy value, then some will return false.

/*
const agez = [9, 10, 12, 15, 21, 18]

const ofAge = agez.some(age => age >= 16)
console.log(ofAge) //true 

const overAge = agez.some(age => age > 21)
console.log(overAge) // false which is a good thing in this context 
*/
// ==============================================================================================
// .sort
// Allows you to sort the elements of an array. This one is more complex than I’d like it to be. Here’s my rule of thumb that works _most of the time_™. If what you’re sorting is based on string values, you can call .sort() and you’d get what you’d expect.
// .sort() is good for strings 
// Note that .sort is mutative so each time you invoking it you’re modifying the original array. // but you can make a new array out of it still 
// you can use it for the Date object as well 
// can be decended as well so swap b - a 

const peeps = ['Tom', 'Andy', 'Mizo'];

const peepSorted = peeps.sort()
console.log(peeps) //["Andy", "Mizo", "Tom"]
console.log(peepSorted); //["Andy", "Mizo", "Tom"]


const ages = [21, 19, 35, 38, 18, 23]
ages.sort((a, b) => {
    // orginal above 
    //a 21 - b 19 = 2 so B is first 19,21,35,38,18,23 
    //a 21 - b 35 = -14 so A is first 
    // and so on  
    return a - b
})


// a 55 b 96
// higher as in number and first as in the array index
console.log(55 - 96) // -41 // does 55 go higher than 96? false because 96 is higher and also -41 is returned so negative goes first 

// now what happens is when this function returns a negative value that means that a is going to be before b in the
// finalised sorted array, if you get a positive number sum of this sum callback function then it mean that 
// b will be above a in the sorted form so it depends on the return value of this compare function negative means that 
// a is first positive means that b is first and zero means that they're both the same so they're next to each other 

// array of 3 objects 

const peepz = [
    { name: 'Dom', age: 55 },
    { name: 'Sophie', age: 96 },
    { name: 'Mark', age: 27 }
]
peepz.sort((a, b) => a.age - b.age) // ascending order smallest to biggest 
//peepz.sort((a, b) => b.age - a.age) // descending order biggest to smallest 

console.log(peepz)


//To sort by name, you’d use a similar pattern, but instead of the minus sign, you’d use a greater than sign.


const peepzSortString = [
    { name: 'dom', age: 55 },
    { name: 'sophie', age: 96 },
    { name: 'mark', age: 27 }
]
console.log(peepzSortString)
const showme = peepzSortString.sort((a, b) => a.name > b.name)
console.log(showme) // DOESNT WORK!!!!!!!!!


