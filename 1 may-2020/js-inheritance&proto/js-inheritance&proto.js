function Animal(name, energy) {
    this.nameProp = name
    this.energyProp = energy
}
// so for the default value for energyProp is 500 its the number itializer that will be changed by the method on the Animal   
// amount doesnt replace it adds to the existing 
// prototypes for Animal that will be inside of animal object prototype  
// amount because it means the amount of food
Animal.prototype.eat = function (amount) {
    this.energyProp = amount
}

Animal.prototype.sleep = function (length) {
    this.energyProp = this.energyProp + length;
    //  add the number 1 to the existing number (500)
}

Animal.prototype.play = function (length) {
    this.energyProp -= length;

}

// new object of Animal with protoypes, 1 gets passed into sleep prototype which gets added to this context   
// it becomes a new object 
const animal1 = new Animal('jona', 500)
const animal2 = new Animal('booo', 100)
console.log(animal1)
//console.log(animal2)
animal1.sleep(1) // adds one to animal1 but you can still use -1
animal1.eat(40) // 'this' will be referencing this.energyProp -= length at this point 
animal1.sleep(1)
//console.log(animal1.constructor) //return the source of where the contructor is  //Object.prototype.constructor
console.log(animal1)


/*
console.log(`${this.nameProp} is playing`);
console.log(`${this.nameProp} is sleeping`);
console.log(`${this.nameProp} is eating`)
*/

//https://www.w3schools.com/js/js_object_constructors.asp

// Constructor function for Person objects
function Person(firstName, lastName, age, eyeColor) {
    this.firstName = firstName;
    this.lastName = lastName; // what string is going to be changed 
    this.age = age;
    this.eyeColor = eyeColor;
    this.fullName = function () {
        console.log(this.firstName + ' ' + this.lastName)
    }

}


// The changeName() function assigns the value of name to the person's lastName property.
// Change last name, done in the prototype 
Person.prototype.changeName = function (name) {
    this.lastName = name;
    //this.lastName = this.lastName + name;

}
Person.prototype.changeName2 = function (name) {
    this.lastName = name;
    //this.lastName = this.lastName + name;

}

// Create a Person object
var myMother = new Person("Sally", "Rally", 48, "green");

//JavaScript knows which person you are talking about by "substituting" 'this' with 'myMother' so this.lastName = lastNameArg will be myMother.lastName: "uO" after the changes 
console.log(myMother);
myMother.changeName('YO')
myMother.changeName2('uO') // changeName2 over rides the first prototype pointed at lastName when using add this just adding on to the current value not replacing big difference to realize 

myMother.fullName()

// the goal is for Dog to be able to access all of the prototype methods of Animal
// use Object.create(targetObj.prototype) 
// on Object.create targets the prototype so it will be: Dog.prototype = Object.create(Animal.prototype)
// base class aka superclass 
// subclass is just as known as subclass
