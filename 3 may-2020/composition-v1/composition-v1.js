// functions 
const sleeper = (state) => ({
    sleep(length) {
        console.log(`${state.name} is sleeping.`)
        state.energy += length
    }
})

const player = (state) => ({
    play() {
        console.log(`${state.name} is playing.`)
        state.energy -= length
    }
})

const elo = player(666)
//console.log(elo)

// use brackets to return a object literal when using a arrow function
const player2 = (nameArg, descriptionArg) => ({
    name2: nameArg,
    description2: descriptionArg
});

console.log(player2('john', 'very-sexy'))

const eater = (state) => ({
    eat(amount) {
        console.log(`${state.name} is eating.`)
        state.energy += amount
    }
})
console.log(eater('nooo'));

const barker = (state) => ({
    bark() {
        console.log('Woof Woof!')
        state.energy -= .1
    }
})

const meower = (state) => ({
    meow() {
        console.log('Meow!')
        state.energy -= .1
    }
})

const adopter = (state) => ({
    adopt(pet) {
        state.pets.push(pet)
    }
})

const friender = (state) => ({
    befriend(friend) {
        state.friends.push(friend)
    }
})

function Dog(name, energy, breed) {
    // create new object with only keys?

    let dog = {
        name, energy, breed,
        friends: new Array()
    }
    // dog is target which is the empty object made above 
    // Object.assign(target, ...sources) target in this example is dog and the sources are the 
    return Object.assign(
        dog,
        eater(dog),
        sleeper(dog),
        player(dog),
        barker(dog),
        friender(dog) // added the friender function which has to used as a function to add to the array 
        // methods are added to the object but not on the prototype 
    )
}

const leo = Dog('Leo', 10, 'Goldendoodle')
leo.eat(10) // Leo is eating
leo.bark() // Woof Woof!
leo.befriend('friend one') //adding to array 
leo.befriend('friend')
console.log(leo.friends) // looking at the array 
console.log(leo)




//cat ================================================================================================

// Cat becomes a constructor function 
function Cat(name, energy, declawed) {
    this.nameProp = name
    this.energyProp = energy
    this.declawedProp = declawed

    return Object.assign(
        this,
        eater(this),
        sleeper(this),
        player(this),
        meower(this),
    )
}

// why no new keyword 
const ketty = new Cat('ketty', 20, 'yes') //this new object 
ketty.play(1)
ketty.eat(5)
ketty.sleep(3)
console.log(ketty)

// composition way does not use the prototype 
// so there seems to be almost a 2 layer technique for composition 
// you can see Object.assign inside the constructor function of Object by looking at the prototypes so Object.prototype 