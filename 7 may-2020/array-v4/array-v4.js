//.splice
// splice a funky version of slice 
// Allows you to add and or remove items from anywhere inside of an array. It’s mutative so favor using another method that isn’t mutative like .slice, .map, .filter or the spread operator.

//The API is a bit funky as well. The first argument specifies where to start, the second argument specifies how many elements to remove, and the third argument specifies what to add.

/*
const friends = ['Jake', 'Karl', 'Mikenzi']

//friends.splice(1, 1, 'Simba', 'John') // so at element one delete one  //["Jake", "Simba", "John", "Mikenzi"] so cut off Karl and add in the elements 
//friends.splice(1) // cut off after one ["Jake"]
friends.splice(0, 2) // ['Mikenzi']

console.log(friends) 
*/

// ==============================================================================================
// .unshift
// .unshift is oppisate of .shift 
// Adds one or more elements to the beginning of an array and returns the array’s new length.

const nums = new Array(3, 4, 5, 6);

nums.unshift(9, 8, 7)

console.log(nums) //[9, 8, 7, 3, 4, 5, 6]

// Favor using .concat or the Array spread operator instead of .shift as mutations are 👺.

// .concat
const nums2 = new Array(3, 4, 5, 6);

const nums2Together = nums2.concat(9, 8, 7)
const nums2Together2 = [9, 8, 7].concat(nums2)
console.log(nums2Together2);

// spread operator 
const nums3 = new Array(3, 4, 5, 6);

const nums2Together3 = [9, 8, 7, ...nums3]
console.log(nums2Together3)

// ==============================================================================================

//.from
//.from isn’t an array method on Array.prototype but instead is a static method on the Array class. So you access it with Array.from().
//.from is used to create a new array from an “array-like” or iterable object.
//The most common use case where you see an “array-like” object is with the “arguments” keyword inside of a function.

// ...to be continued 

var obj1 = { id: 101, name: 'Jhon Doe' }

var obj2 = { age: 25, country: 'USA' }

const employee = { ...obj1, ...obj2 }

console.log(employee);


