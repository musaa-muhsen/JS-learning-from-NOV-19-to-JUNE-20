class User {
    constructor(nameArg, ageArg) {
        this.nameProp = nameArg
        this.ageProp = ageArg
    }
}

function myNameIs(nameArg) {
    console.log(`Hello my name is ${nameArg.nameProp}.`)
}

function myAgeIs(ageArg) {
    console.log(`And my age is ${ageArg.ageProp}.`)
}

export { User as Cow, myNameIs as bitchName2, myAgeIs as bitchAge2 }
// export {User as default} // same as if added export default before the function done externally of course
//maybe don't bother with default export

// export default User 
// export {myNameIs,myAgeIs}
// rename export 
//export { User as Bitch }

// in JavaScript you need to make sure when for linking files paths that you put at the start a dot slash if you're wanting to use relative paths ./ or just a single slash / if you want to use a an absolute path 

// this is what we are trying to achieve 
// const person1 = new User('tom', 25);
// console.log(person1)
// myNameIs(person1)
// myAgeIs(person1)

/*
function sayHi(user) {
    alert(`Hello, ${user}!`);
  }

  function sayBye(user) {
    alert(`Bye, ${user}!`);
  }

  export {sayHi, sayBye}; // a list of exported variables
  …Or, technically we could put export above functions as well.

*/
