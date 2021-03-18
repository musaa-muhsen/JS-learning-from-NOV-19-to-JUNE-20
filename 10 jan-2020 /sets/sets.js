// sets are a list of a set of unique values of any type wethere or reference 
//always unique values for example primitive values objects etc can't have the same one twice 
//The Set object lets you store unique values of any type, whether primitive values or object references.

const set1 = new Set();

//add values to set 
set1.add(100);
set1.add('a string');
set1.add({name: 'joan', age: '22'});
set1.add(true);
set1.add(100);

//same as 

//const set2 = new Set([100,' a string',{name: 'joan', age: '22'}, true ]);

console.log(set1) //set(4)

// //get count
// console.log(set1.size)

// //check for values 
// console.log(set1.has(100)); //true 
// console.log(set1.has(50+50)); //true
// console.log(set1.has({name: 'John'})); //false

//delete from set
//set1.delete(100);
let item;
for (item of set1) {
    console.log(item) // itrates through set1 
}

//convert set to array
//creates an array from a array like object 
const setArr = Array.from(set1);
console.log(setArr); //Array(4) 

//forEach loop 

set1.forEach(value =>console.log(value)); //every value in set1


//for of 
// Iterable Capable of being iterated or repeated.
// The JavaScript for/of statement loops through the values of an iterable objects


const set1 = new Set([1, 2, 3, 4, 5]);

console.log(set1.has(1));

