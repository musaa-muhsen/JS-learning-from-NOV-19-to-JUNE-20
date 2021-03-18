
//array needs to return an object with a length property that delegates to array.prototype (since that’s where we’ll be putting all the methods). As we’ve done in previous sections, we can use Object.create for this.
function array() {
    // we use array.prototype and not just array because the array prototype is where the methods are going to be 
    let arr = Object.create(array.prototype);//targeting the empty array function prototype to add content to be used on all instances // essiantly this is creating the object when the function is invoked // so length property is added to the prototype of the new object within the function using the fucntion itself as the prototype

    arr.eow = 'meoowww' // alphabetical order 

    arr.length = 0; // added to the new object (not on prototype) // "length" is a property set on "arr", but not on "array"
    // remember array is used to used to invoke the object and to use arr 
    arr.yo = 'poo';

    // length is made up 
    //arguments is an Array-like object accessible inside functions that contains the values of the arguments passed to that function.
    // so inside of the condtion of the for in loop the arguements using the WHOLE arguments content 
    // essiantly arguements is the object 
    // below is creating the looped values of the of named passed in as arguements to the array 
    // for in loop is doing two things loop over arguments and add the keys/values to our array and also increment length
    for (let key in arguments) {
        //You can use the key to get the value of the current item in the loop from the object.


        // arguments = 'the arguement string content' so with the property iteration using "for in" it will be 
        // this is making the numbered key  // so the arguements key would 0,1,2 etc added to the prototype 
        arr[key] = arguments[key] // the values of each iteration of arguemnts its now added to arr object  

        // debugging 
        console.log(key, arguments[key]) // the value // the name content iteration been passed to the value of the new object iteration 
        console.log(arr[key])
        console.log(key)
        // arr[0] = arguments[0]

        arr.length += 1 // this is for the main length property // adding 1 to the made up length property on each iteration thats why you see = array {0: "John", 1: "Andy", length: 1, yo: "poo"} 
    }
    console.log(arr[0])



    return arr; // return the value of the whole thing as the value of the function 
}
// does arr become the key to the object properties??? no is arr is the object properties 
//  length has also become a property 
// Since we’re using Object.create to delegate failed lookups to array.prototype, we can now add any methods we want shared across all instances to array.prototype.


array.prototype.push = function (element) {
    // accessing object properties
    this[this.length] = element
    console.log(element)
    this.length++ // this adds to the overall length property of the object 
    return this.length
}

const friends = array('John', 'Andy', 'Mark');
//const friends2 = array('matt', 'tom', 'andy');
friends.push('Weasel')
console.log(friends)

/*
we're going to recieve an element, we'll say this.length, it's going to be what the element is.

first, it needs to add an element to our object at whatever the start length is, then it needs to increment
whatever this.length is by one, and then finally, it needs to return the new length of our fake array.
*/



/*

function arrays2() {
    console.log(arguments[0])
    console.log(arguments[1])
}

const g2 = arrays2('hello', 'world');
const g3 = arrays2('yo', 'mo')

const object = { a: 1, b: 2, c: 3 };

for (const variable in object) {
    console.log(`${variable}: ${object[variable]}`);
    //1 )the key   //2) the object much like object[0]
}

//Required. A variable that iterates over the properties of an object
// object	Required. The specified object that will be iterated

// "variable" = A different property name is assigned to "variable" on each iteration.
*/

/*
const person = {
    isHuman: false,
    printIntroduction: function () {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
};

const me = Object.create(person);

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

console.log(me) // this is using it own contructor but arr is using the array function as it's enviroment
*/
// the array function is the means to invoke the content because the value has been returned