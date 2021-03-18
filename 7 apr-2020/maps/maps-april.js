//create a new constructor, then create the keys, then set map values by key, then get values by key 

const map1 = new Map();

const key1 = 'this is key1';
const key2 = {};
const key3 = function () { };

map1.set(key1, 'key1 value');
map1.set(key2, 'key2 value');
map1.set(key3, 'key3 value');

//console.log(map1.get(key1), map1.get(key2), map1.get(key3));
//map1.delete(key1);
console.log(map1);

//iterating maps 
//iterate through the map using a for of loop 

for (let [key, value] of map1) {
    console.log(`${key} : ${value}`);
}

//loop with forEach 
map1.forEach(mapIterateFunc)

function mapIterateFunc(value, key, arr) {
    // console.log(`${key} : ${value} ${arr}`);
    // x = 10 + 5;
    document.getElementById('content').innerHTML = `${key} : ${value} <br>`;
}

/* forEach 
value Required. The value of the current element
index Optional. The array index of the current element
arr	Optional. The array object the current element belongs to
*/


// Convert to arrays 
// create an array of the key value pairs 
const keyValArr = Array.from(map1);
console.log(keyValArr); //an array of making it 2 deminsional  

// create an array of the keys 
const keyArr = Array.from(map1.keys());
console.log(keyArr);

// create an array of the values 
const valArr = Array.from(map1.values());
console.log(valArr);

// create an array of the values 
//const valArr = Array.from


// Array.from learning ==========================================
//The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.
const myArr = Array.from("ABCDEFG");
document.getElementById('content').innerHTML = myArr;



// ================================== for in/for of learning ============================================
// for in = objects && for of = iterables/arrays 
const personDetails = {
    name: 'John Doe',
    age: 32,
    city: 'Miami',
    gender: 'Male',
    sayHello: function () {
        console.log('Hello');
    }
}

/* for in syntax 
  for (variable in object) {
    //execute code here 
  }
*/

for (let detail in personDetails) {
    //console.log(personDetails); //{name: "John Doe", age: 32, city: "Miami", gender: "Male", sayHello: ƒ} *5
    //console.log(detail); // keys/propeties
    console.log(personDetails[detail]); // get the values by referencing the original object
}

/* "for in" with arrays, works but not well */

const numbersArr = [1, 3, 5, 7, 9];
for (let number in numbersArr) {
    //console.log(number); // 0,1,2,3,4
    //console.log(numbersArr[number])
}

/*

for of = arrays =======================================================
for (variable of iterable) {
  // execute code here 
}
*/

for (let number of numbersArr) {
    //console.log(number); //1, 3, 5, 7, 9
}

// old school way of doing it ====================================================
for (i = 0; i < numbersArr.length; i++) {
    //console.log(i); //0, 1, 2, 3
    //console.log(numbersArr[i]); //1, 3, 5, 7, 9
}



