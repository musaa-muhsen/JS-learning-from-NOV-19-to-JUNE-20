function mainFunc(hello) {
    this.hello = hello
    console.log('from global', this.hello) // new global object //global {}
    const funk = {
        yo1: function () { console.log('from funk', this) }, // object itself funk 
        yo2: function () { console.log('from funk', this.hello) } // undefined 
    }
    return funk;

}
const ming = 'yo1',
    fanny = 'yo2'
const getYo = mainFunc('tony')
//console.log(getYo)
getYo[ming]()
//new mainFunc('hello');

// so we know that inside of dog we want to call the animal constructor function 
// but what we need to figure out is how we can invoke animal in the contect of dog
// so what that means is thagt we want to call animal but with "this" keyword from dog 
// so when the animal function runs, we want this to reference the dog instance and not 
// the animal.

// need to use the function excution for content more 

// this as this context to be used when invoked 

function product(nam, pric) {
    this.name = nam;
    this.price = pric;
}
// new to use for what the new object is pointing at 
//const newProduct = product('chav', 5); //this is pointing at nothing but because product.call(this, name, price) hasnt been used with the new keyowrd it will be later on when the function instance is created 
var newProduct = new product('chav', 5);
console.log(newProduct) //product {name: "chav", price: 5}

function testFunc(nam2) {
    product.call(this, nam2) // basically becomes === function testFunc(nam, pric) {this.name = nam;this.price = pric;}
    // there is no //this.name = name;this.price = price; in this scope ????
    // its in the prototype constructor this is known as prototype chaining???
    // the product constructor function is in the prototype of this one 
    // 2 primitive values to be passed into the product when invoked so 
    // the 2 values passed into product name and price comes from testfunc
    // thisArg The value to use as "this" when calling product
    // testFunc will be invoked as new object changing the context the "this" pointer in the constructor of product 
    // the this context is this scope/object/function 
    // it binds the properties to this the new object context 
    this.category = 'food';

    // product gets invoked when the testFunc is called with the new keyword making a new object 
    // product gets passed into this function scope context instead of products context 
    // product initialized the properties name and price s
}
const k2 = new testFunc('chalk', 5)
console.log(k2) //  this.name = name; this.price = price; are only usefull when this funcion uses the new keyword 

function MyFunc() {
    var myVar = 1;
    this.x = 100;
}

// the arguements/paraemtor are used to point back to the 'this' in the constructor 
MyFunc.prototype.tomtom = {
    tommy: this.tommy,
    ben: this.ben
};

var obj1 = new MyFunc();
console.log(obj1)
//obj1.x; // 100
//obj1.y; // 200

function gogo(bitch) {
    this.bitch = bitch;
}

gogo.prototype.m = 200;

const gigi = new gogo('heyyyyy')
const bibi = new gogo('Yeeeey')
console.log(gigi)
console.log(bibi)

// green is when its a constructor function usually done by the this keyword as pointing to it 


function greet(l1, l2, l3) {
    console.log(
        `Hello, my name is ${this.name} and I know ${l1}, ${l2}, and ${l3}`
    )
}

const user = {
    name: 'Tyler',
    age: 27,
}

const languages = ['JavaScript', 'Rby', 'Python']

window.addEventListener("load", greet(languages[0], languages[1], languages[2])
);
//In regular functions the this keyword represented the object that called the function, which could be the window, the document, a button or whatever.
// line 35 the new instance of product, therefore newProduct contains the name property so the 'this.name' is chav 
