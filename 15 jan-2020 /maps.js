/*
Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

Methods and properties are:

new Map() – creates the map.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the value by the key.
map.clear() – removes everything from the map.
map.size – returns the current element count.
also .keys() and .values()
*/

/*
new keyword 
It creates a new object. The type of this object is simply object.
It sets this new object's internal, inaccessible, [[prototype]] (i.e. __proto__) property to be the constructor function's external, accessible, prototype object (every function object automatically has a prototype property).
It makes the this variable point to the newly created object.
It executes the constructor function, using the newly created object whenever this is mentioned.
It returns the newly created object, unless the constructor function returns a non-null object reference. In this case, that object reference is returned instead.
*/

//MAPS = key-value pairs - can use ANY type as a key or value

const map1 = new Map();

//Set keys 
const key1 = 'some string',
      key2 = {},
      key3 = function() {};

//set map values by key
map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');

// get values by key 
// console.log(map1.get(key1), map1.get(key2), map1.get(key3));

// //count values 
// console.log(map1.size); //3

//iterating maps 
//loop using for...of to get keys and values 
/*
for (let [key,value] of map1) {
    //console.log(`${key} = ${value}`);
}

//iterate keys only key() is a method 
//The Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
for(let key of map1.keys()) {
   // console.log(key)
}

//iterate values only 
 for(let value of map1.values()) {
    //console.log(value);
}

// loop with forEach 
map1.forEach((key, value) => {
    //console.log(`${key} = ${value}`)
});
*/
//convert to arrays 

//create an array of the key value pairs
const keyValArr = Array.from(map1);
console.log(keyValArr);

// create an array of the values
const valArr = Array.from(map1.values());
console.log(valArr)

//create an array of the keys 
const keyArr = Array.from(map1);
console.log(valArr);
