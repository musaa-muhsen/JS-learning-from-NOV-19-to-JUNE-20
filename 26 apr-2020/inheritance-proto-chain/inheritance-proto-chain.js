// second, we know it's going to be called with the new keyword, so that means we will have an object called "this" inside of the dog constrcutor function and third we know we need to utlize the animal function so that any instance of dog will
// have a name, energy level, and be able to eat, sleep and play   

//Previously we learned how to create an Animal class both in ES5 as well as in ES6. We also learned how to share methods across those classes using JavaScript’s prototype.
function Animal(name, energy) {
    this.name = name
    this.energy = energy
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

function Dog(name, energy, breed) {
    Animal.call(this, name, energy)

    this.breed = breed
}

const charlie = new Dog('Charlie', 10, 'Goldendoodle')

console.log(
    charlie.name, // Charlie
    charlie.energy, // 10
    charlie.breed // Goldendoodle
)
const array = [1, 2]
console.log(array)
console.log(Object.prototype)
console.log(Array.prototype)
console.log(charlie.name.valueOf()) //charlie // valueOf 
console.log(charlie) //object from a function object 

//bind(this) = basically its binding outer "this" to inner this 