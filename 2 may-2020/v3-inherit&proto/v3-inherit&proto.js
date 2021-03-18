//https://learn.tylermcginnis.com/courses/369735/lectures/6377500

class Animal {
    constructor(name, energy) {
        this.nameProp = name
        this.energyProp = energy
    }

    //methods
    eat(amount) {
        console.log(`${this.nameProp} is eating.`);
        this.energyProp += amount;
    }

    sleep(length) {
        console.log(`${this.nameProp} is sleeping.`);
        this.energyProp += length;
    }
    play(length) {
        console.log(`${this.nameProp} is playing.`);
        this.energyProp -= length;
    }
}

const animalTest = new Animal('leo', 100)
// animalTest.play(10)
// console.log(animalTest)

// extending baseclass/superclass syntax = class Subclass extends Baseclass {}
// Dog inherits from Animal
// remember s at the end of extend 
// my super long pole extends

class Dog extends Animal {

    constructor(name, energy, breed) {
        super(name, energy) // calls Animal constructor 

        // Whenever you are extending a base class and you need to invoke that base class’ constructor function, 
        // you invoke super passing it any arguments it needs.

        this.breedProp = breed;
    }

    bark() {
        console.log('Woof Woof!')
        this.energyProp -= 1;
    }
}

const dog1 = new Dog('simba', 100, 'chappy')
console.log(dog1)
