// new object
//The most common way to create an object is with curly braces {} and you add properties and methods to an object using dot notation.
/*
let animal = {}
animal.name = 'Leo';
animal.energy = 10;
animal.eat = function (amount) {
    console.log(`${this.name} is eating.`)
    this.energy += amount
}

animal.sleep = function (length) {
    console.log(`${this.name} is sleeping.`)
    this.energy += length
}

animal.play = function (length) {
    console.log(`${this.name} is playing.`)
    this.energy -= length
}
console.log(animal);
console.log(animal['sleep']());
*/

/*================================================================================================================
================================================================================================================
================================================================================================================
*/

function Animal(name, energy) {
    let animal = Object.create(Animal.prototype);
    animal.name = name;
    animal.energy = energy;
    return animal
}

Animal.prototype.eat = function (amount) {
    console.log(`${this.name} is eating.`)
    this.energy += amount
}

Animal.prototype.sleep = function (length) {
    console.log(`${this.name} is sleeping.`)
    this.energy += length
}

Animal.prototype.play = function (length) {
    console.log(`${this.name} is playing.`)
    this.energy -= length
}
const animal1 = Animal('leo', 10);
console.log(animal1);
console.log(animal1.eat())



/*================================================================================================================
================================================================================================================
================================================================================================================
*/
//The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

const person = {
    isHuman: false,
    printIntroduction: function () {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
}

const meHuman = Object.create(person);

meHuman.name = 'james'; //'name' is a property set 'meHuman', but not on 'person'
meHuman.isHuman = true; //inherited properties can be overwritten 


//console.log(meHuman;) // is in the __proto__
console.log(meHuman.name);
console.log(meHuman);

/*================================================================================================================
================================================================================================================
================================================================================================================
*/

//The third is how to use object.create to delegate failed lookup to the functions prototype.

function doThing() { }
console.log(doThing.prototype)


