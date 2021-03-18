//console.log(this); // points to the window object
//In JavaScript all functions are object methods.

const object = {
    prop: this,
    'method yel': function () { return this; },
    hello: 'hello'
}
console.log(object.prop) // points to the window object 
console.log(object['method yel']()) //invokes the object itself, prop as a window, it's changing the context // this pointer is now going outside of the scope of the function by one so what it's doing is it's jumping outside of the function and it's going to the object that contains the method which is this object  


const array = [
    this, 1, function () { return this; }
]
//array[2](); // the whole array of 3 
console.log(array[0]); // the window object


//window {}
function global() {
    return this;
}
//console.log(global().innerWidth) // stepping out one and calling the window object then called the innerWidth property

function global2(object) {
    return this;
}

console.log(global2);
console.log(global2.call(object));



function global3(name) {
    console.log('from global 3 yo', this);
    function sub() { console.log('from sub', this) };
    sub();
}

//global3();  // this makes 'from global 3 yo WINDOW'
console.log(global3()); // from global 3 yo, global3 object



const object2 = {}

object2['prop2'] = this;
object2.method = function () { return this; };


console.log(object2);



const obj4 = {
    prop: this,
    method: function () { return this; }
}

function global4() {
    return (5 * 'hello');
    //return this = object;
}

console.log(obj4['method'].call(global4()));

/*================================================================================================================
================================================================================================================
================================================================================================================
*/


function global5(dog) {
    return this.dog = dog;
    //return this = object;
}
global5.prototype.helloWorld = function () {
    return 'hello' + this.dog;
}

let dogObj = []
const dogName1 = global5('puff')
const dogName2 = new global5('jeff')
const dogName3 = new global5('kev')

console.log(dogName2);
const prototypeVar = Object.getPrototypeOf(dogName2)
console.log(prototypeVar);

//console.log(dogName1.helloWorld()); // Uncaught TypeError: dogName1.helloWorld is not a function
//console.log(new dogName1.helloWorld()); //Uncaught TypeError: dogName1.helloWorld is not a constructor
console.log(dogName2.helloWorld()); // hello jeff
console.log(new dogName2.helloWorld()); // returns the object itself //global5.helloWorld {}


// array push method 
dogObj.push(dogName1);
dogObj.push(dogName2);
dogObj.push(dogName3);

console.log(dogObj)

dogObj.forEach((dogName) => {
    document.getElementById('content').innerHTML += dogName.dog + '<br>';
})

//console.log(global4.call(obj4));






//The call() method calls a function with a given this value and arguments provided individually.