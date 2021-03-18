// Animal superclass 
function Animal(name, energy) {
    this.nameProp = name;
    this.energyProp = energy
    // the values of the arguements will be the this keyword as this is the constructor this is the default value which later on be changed    
}

Animal.prototype.eat = function (amount) {
    console.log(`${this.nameProp} is eating`);
    this.energyProp += amount;
}

Animal.prototype.sleep = function (length) {
    console.log(`${this.nameProp} is eating`);
    this.energyProp += length
}

Animal.prototype.play = function (length) {
    console.log(`${this.nameProp} is eating`);
    this.energyProp -= length
}

// dog subclass constructor 
function Dog(name, energy, breed) {
    Animal.call(this, name, energy);
    this.breedProp = breed;
}

/*
two prototypes test failed 
function COW(noise) {
    this.mooProp = noise;
}
COW.prototype.moo = function (amount) {
    console.log(`MOOOOOOOO!!!!!`);
    this.mooProp -= amount;
}
*/

Dog.prototype = Object.create(Animal.prototype) //(object to use as prototype) //overwrote Dog.prototype
//Dog.prototype = Object.create(COW.prototype) // overwrites Animal prototype if used

// add individual prototype
Dog.prototype.bark = function (yo) {
    console.log('Woof Woof!')
    this.energyProp -= 1
    this.yo = yo
}

/*
pointing the dog constructor to dog constructor using Object.prototype.constructor 

The constructor PROPERTY returns a reference to the Object constructor function that created the instance 
object. Note that the value of this property is a reference to the function itself, not a string containing 
the function's name. The value is only read-only for primitive values such as 1, true, and "test".
*/

Dog.prototype.constructor = Dog

const dog1 = new Dog('brad', 100, 'shabby');
console.log(dog1)
dog1.play(10) // default property gets overwritten 
dog1.bark('eyo')// added a property to a prototype function 
console.log(dog1.constructor)
// can you write the constructor function in the prototype of animal that of course is'nt a method???
console.log(dog1)
//At this point, if we wanted to make another subclass, say Cat, we’d follow the same pattern.
// the 
