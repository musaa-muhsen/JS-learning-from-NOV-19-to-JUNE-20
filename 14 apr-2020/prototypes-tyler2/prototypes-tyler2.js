
const friends = [];
// same as 
const friendsWithOutSugar = new Array()

console.log(friends)
console.log(friendsWithOutSugar)

// every instance of an array has prototype methods like push,pop,conact,    

// arrays prototypes = pop, push etc

//const friends = new Array() //new instance of array will give access to the methods inside of array prototype 

//ways of looking at array prototypes 
console.log(Array.prototype);

const prototypeVar = Object.getPrototypeOf(friends)
console.log(prototypeVar);


const hello = function () {
    return 'hello world1';
}

console.log(new hello())

const hello2 = () => {
    return 'hello world2';
}
console.log(hello2())
// arrow functions don't have their own this keyword, as a result arrow functions can't be constructor functions, and if you 