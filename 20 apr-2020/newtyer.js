//JavaScript interpreter???
// new binding 
/*
The new operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function. The new keyword does the following things:

Creates a blank, plain JavaScript object;
Links (sets the constructor of) this object to another object;
Passes the newly created object from Step 1 as the this context;
Returns this if the function doesn't return its own object.

Syntax
new constructor[([arguments])]

constructor
A class or function that specifies the type of the object instance.
arguments
A list of values that the constructor will be called with.


*/

/*
//tyler take 

The third rule for figuring out what the this keyword is referencing is called the new binding. 
If you’re unfamiliar with the new keyword in JavaScript, whenever you invoke a function with the 
new keyword, under the hood, the JavaScript interpreter will create a brand new object for you 
and call it this. So, naturally, if a function was called with new, the this keyword is referencing 
that new object that the interpreter created.
*/

function User(name, age) {
    /*
      Under the hood, JavaScript creates a new object called `this`
      which delegates to the User's prototype on failed lookups. If a
      function is called with the new keyword, then it's this new object that interpreter created that the this keyword is referencing.
    */

    this.name = name
    this.age = age

}

const me = new User('Tler', 27)

console.log(me)


function User2(nameArg, ageArg) {
    /*
      Under the hood, JavaScript creates a new object called `this`
      which delegates to the User's prototype on failed lookups. If a
      function is called with the new keyword, then it's this new object that interpreter created that the this keyword is referencing.
    */

    // this.name = name
    // this.age = age
    return id = {
        name: nameArg,
        age: ageArg

    }


}

const me2 = User2('Tler', 27)

console.log(me2)

const cars = ['BMW', "Volvo", "Ford", "Fiat"];
let i = 0;
for (i; i < 2; i++) {
    console.log(cars[i]);

}
for (carType of cars) {
    console.log('hello this car type ' + carType)
}
class Hello {

    constructor(name, age) {
        this.name = name,
            this.age = age

    }

    helloID() {
        return `hello my name is ${this.name} and is ${this.age}`
    }

    static hello() {
        return 'hello';
    }

}

const id1 = new Hello('Tom', 31);

console.log(Hello.hello())