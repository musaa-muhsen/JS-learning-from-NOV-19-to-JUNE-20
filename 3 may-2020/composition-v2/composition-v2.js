//https://stackoverflow.com/questions/17486854/how-to-create-a-method-in-object-literal-notation
// these are arrow expression function with one arguement 
//Update: ECMAScript 6 now allows methods to be defined the same way regardless of whether they are in an object literal: 

// eater, sleeper , barker verbs because it's what the dog does, not what it is. So a cat is a eater ,sleeper as well but also a meower.
// 4 parts to this pattern 

// es5 style 
const eater = function (state) {
    eatz = {
        eat: function (amount) {
            console.log(`${state.name} is eating.`)
            state.energy += amount
        }
    }
    // need to always return a value in a function/method 
    return eatz
}

const sleeper = (state) => ({

    sleep(length) {
        console.log(`${state.name} is sleeping.`)
        // the property in the instance that matches length is the value when the method is called  
        // aka the length is a seperate 
        state.energy += length
    }
})

const barker = (state) => ({
    // the method is the object literal non-es6 example 
    bark: () => {
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
    adopt: (pet) => {
        // wheres pets come from again????
        state.pets.push(pet)
    }
})
// state argueemnt is the dog property which is passed in, that needs to match the method returned 
// match the property via state.friends in this case it's friends array then push the value of the method befriend into friends property
const friender = (state) => ({
    befriend(friend) {
        state.friends.push(friend)
    }
})

const player = (state) => ({
    play(length) {
        console.log(`${state.name} is playing.`)
        state.energy -= length
    }
})

function Dog(name, energy, breed) {
    // creates new empty object and added keys without values     
    let dog = {
        name,
        energy,
        breed,
        friends: []
        // remember always use colon when adding values and array syntax in object literals 


    }
    //return dog // this can be used at this point of invoking with just the properties 
    // below is a supped up version 
    // dog object gets passed into the functions 
    // at this point
    // Object.assign returns the properties above as well the invoked functions above inclosed methods 
    // the closures get invoked within the Object.assign() method  
    /*
         So we create our dog above with the properties, then what we return is dog along with all these 
         invocations merged into it, so all of these invocations are returning methods that when they're 
         invoked will modify the spefic dog because that's what we are passing in here.
    
         So again, inside of dog, we create the instance using just a plain old JS object,
         then we use Object.assign to merge th dog state with all of the methods a dog should have.
    
    */
    return Object.assign(
        dog,
        eater(dog),
        sleeper(dog),
        player(dog),
        barker(dog),
        friender(dog)
    )
}

const leo = Dog('Leo', 10, 'Goldendoodle')
const tom = Dog('tom', 20, 'shabby')
console.log(leo)

leo.befriend('toby', 'juna')
leo.befriend('juna')

console.log(leo.friends[0])

// leo.eat(10) // Leo is eating
// leo.play(5) // Woof Woof!
leo.bark()