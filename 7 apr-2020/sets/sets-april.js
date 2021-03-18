/*
Sets are a new object type with ES6 (ES2015) that allow creating collections of unique values.
The values in a set can be either simple primitives like strings or integers as well as more 
complex object types like object literals or arrays.
*/

let log = console.log;
var set1, set2;

set1 = new Set();

set1.add(100);
set1.add('hello world');
set1.add('hello world');
set1.add({ color: 'yellow', size: 'big' }); 
set1.add(true);
set1.add(true);
set1.add({ color: 'yellow', size: 'big' }); 
set1.add(100);


//same as

set2 = new Set([100, 'hello world', 'hello world', { color: 'yellow', size: 'big' }, true]);
//log(set2)

console.log(set1.size);
log(set1.has(100));
log(set1.has(50 + 50)); //true 
log(set1.has({ color: 'yellow', size: 'big' })); // false

// delete from set 
//set1.delete(100);

//log(set1);

//iterating through sets =======================

// for...of loop 
for (let item of set1) {
    document.getElementById('content').innerHTML += `${item} <br>`;
}

for (let item of set1.values()) {
    log(item);
}

for (let item of set1.keys()) {
    log(item)
}

set1.forEach((value) => {
    log(value);
});


//convert set to array 

const arraySet = Array.from(set1)

log(arraySet);

//x = x - y  10 = 10 - 20 

let x = 20;
x -= 10;
console.log(x); //10

