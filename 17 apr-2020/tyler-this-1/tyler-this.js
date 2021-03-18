
//Implicit Binding
//implicit = capable of being understood from something else though unexpressed //suggested but not communicated directly


const user = {
    name: 'tyler',
    age: 27,
    greet() {
        console.log('hello name is ' + this.name)
    },
    mother: {
        name: 'Stacy',
        greet() {
            console.log('hello my name is ' + this.name)
        }
    }
}

user.greet()
user.mother.greet()

// In the example above, user is to “the left of the dot” which means the this keyword is referencing the user object. So, it’s as if, inside the greet method, the JavaScript interpreter changes this to user.
// Whenever we’re trying to figure out what the this keyword is referencing we need to look to the invocation and see what’s to the “left of the dot”. In the first invocation, user is to the left of the dot which means this is going to reference user. In the second invocation, mother is to the left of the dot which means this is going to reference mother.
//another example of implicite binding 


//mixins are different way of working 
var sayNameMixin = function (obj) {
    //closure scope after sayNameMixin 
    obj.sayName = function () {
        console.log(this.name);
    }
    obj.sayAge = function () {
        console.log(this.age);
    }
    obj.sayNameAge = function () {
        console.log('my is ' + this.name + ' my age is ' + this.age);

        // setTimeout(function () {
        //     console.log('my is ' + this.name + ' my age is ' + this.age) // my is  my age is undefined

        // }, 1000)
    }

}

var me = {
    name: 'tyler',
    age: 25
}

var you = {
    name: 'Joey',
    age: 21
}



sayNameMixin(me); // this creates the closure 
me.sayName() //me object to be used inside of the function 
me.sayAge()
me.sayNameAge()

// the main key point of the implicit binding rule. In order to figure out what the this keyword is referencing, first, look to the left of the dot when the function is invoked. If there is a “dot”, look to the left of that dot to find the object that the this keyword is referencing.
// 80% of the time there will be an object to the “left of the dot”. That’s why the first step you should take when figuring out what the this keyword is referencing is to “look to the left of the dot”. But, what if there is no dot? This brings us to our next rule -


//explicit binding =====================================

// I made the CALL and I EXPLICITly told them to APPLY duck tape so they're all BIND together  

/* 
call bind 

 syntax 
 func.call(thisArg(opt), arg1, arg2, arg etc);

“call” is a method on every function that allows you to invoke the function specifying in what context the function will be invoked. 
*/

const greet = function (fruit1, fruit2) {
    return 'Hello my name is ' + this.name + ' and I like = ' + fruit1 + " " + fruit2;
}

var name2 = {
    name: 'tyler',
    age: 25
}
const fruits = ['banana', 'pear'];
const greetBitch = greet.call(name2, fruits[0], fruits[1])
console.log(greetBitch)

//or with an object it will look like this

/*
const fruits = {
    one: 'banana',
    two: 'pear'
}
greet.call(name2, fruits.one, fruits.two);
*/

// .apply binding =============================================================================================
//.apply is the exact same thing as .call, but instead of passing in arguments one by one, you can pass in a single array and it will spread each element in the array out for you as arguments to the function
// .apply binding does not just have to be with this keyword concept 

const greet2 = function (food1, food2) {
    return 'Hello my name is ' + this.name + ' and I like = ' + food1 + "  " + food2;
}

var name3 = {
    name: 'john',
    age: 25
}
const foods = ['pizza', 'hotdog'];
// const foods2 = ['dough', 'pasta']; doesnt work 

const greetBitch2 = greet2.apply(name3, foods)
console.log(greetBitch2)


// other examples of use of apply 
// const theArray = []; does not work 
const array1 = ['a', 'b'];
const elements = [0, 1, 2];
array1.push.apply(array1, elements);

console.log(array1)


/* .bind is like call but just returns a new function that can called later =====================================================

So far under our “Explicit Binding” rule we’ve learned about .call as well as .apply which both allow you to invoke a function, 
specifying what the this keyword is going to be referencing inside of that function.
The last part of this rule is .bind. .bind is the exact same as .call but instead of immediately invoking the function,
it’ll return a new function that you can invoke at a later time. 
So if we look at our code from earlier, using .bind, it’ll look like this

*/

function greetBind(foodi1, foodi2, foodi3, foodi4) {
    console.log(`Hello, my name is ${this.name} and I like ${foodi1} ${foodi2} ${foodi3} ${foodi4} `)
}

const fatty = {
    name: 'chris'
}
const foodz = ['pizza', 'porridge'];
const foodz2 = {
    pie: 'pie',
    pasta: 'pasta'
}

const fattyLoves = greetBind.bind(fatty, foodz[0], foodz[1], foodz2.pie, foodz2.pasta)

console.log(fattyLoves())


//the end 
