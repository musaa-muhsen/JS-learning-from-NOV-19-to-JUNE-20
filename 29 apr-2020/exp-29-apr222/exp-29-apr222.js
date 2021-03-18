function add(a, b) {
    return a + b;
}

// Outputs: 3
console.log(add(1, 2));

// Outputs: 3

function toGether(z, c, d) {


    this.hello = z
    return add.call(this.hello, c, d);
}
console.log(toGether('hello', 1, 8));

//=========================================================================================================
//=========================================================================================================
const hello = 'hello ';
const world = 'world';

function Product(a, b) {

    a = hello;
    b = world;
    return a + b;

}
console.log(Product())
function Food(name, price) {

    Product.call(name, price);
    this.category = 'food';
}

console.log(new Food('cheese', 5).name);
// expected output: "cheese"

// this keyword set up in memory 

/* member access operator is the dot func.call(object) to access properties and methods within on a global
 or calleble object then we can use the call method so this is proof that functions are treated as objects
  in js and you can call the object invoke it and you can actually assign a value to the function with the
  "this" keyword. think of it like this equals object for example we are assigning the arguments value here 
  so at the moment what I'm saying is I'm calling and invoking this subroutine and I'm telling the this 
  context the contect of this execution context will be of objects so im taking this object right here that
  I created earlier and I'm passing that into the global function */


// this memory pointer is just pointing to the window context, so by default is the window object and it can change 
// we use dot syntax to access members, properties and methods within object 
// . is a operator type called "member access" 
// [ ] is a operator type called "computed member access" 
// you CAN NOT use both to access members so no ".[]"
// run this execution context aka invoking. furthermore, if you put the parentheses it tell it to run this execution context 

// dynamic way of accessing properties inside of an object, this will be good for more complex applications 

var car = {
    make: "volve",
    speed: 160,
    engine: {
        size: 2.0,
        make: 'bmw'
    }
}

const makez = 'make',
    speedz = 'speed'

console.log(car[speedz])


const object = {
    prop: this,
    method: function () { return this; }

    // where is method in the memory pointer 

}

function global() {
    return this;
    //return this = object;
    // or 
    // this.object = object; // and object in this global function parameter  
}

global.call(object) //{prop: Window, method: ƒ}
