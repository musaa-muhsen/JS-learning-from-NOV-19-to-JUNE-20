// destructuring objects 
//The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

// at some point learn more about enumerability 
// revisite compisation at some point 
// learn what REST means in rest api 
// remember to look at reduce tonight 
// how to make my self valueble to a company with my skills but also utlise them for my own benfits for example specialise in eccommerse animation and promote that idea online then also join a comapny to do that so maybe it's a case of making my niche eccommerse animation and animation and stuff like that

//const addUser = {};
// old school of adding props to obj
// addUser["name"] = 'tyler mcginnis';

// const user = {
//     name: 'Tyler McGinnis',
//     handle: '@tylermcginnis33',
//     userLocation: 'Eden, Utah'
// };

// old school way of making extracting from an obj 
// const name = user.name;
// const handle = user.handle;
// const userLocation = user.location;

//const { name, handle, userLocation } = user;


// destructuring - allows us to extract multiple properties from an object 
// You can think of it like this, if you want to add properties to an object, do it as you are used to, on the right-hand side of the equal sign. If you want to extract properties from an object, do it on the left-hand side of the equal sign.
// object destructuring is more popular than array destructuring 
//  

function getUser() {
    return {
        name: 'Tyler McGinnis',
        handle: '@tylermcginnis33',
        userLocation: 'Eden, Utah'
    };
}

// destructuring a func 
//const { name, handle, userLocation } = getUser()

// instead of 

// const name = getUser().name;
// const handle = getUser.handle;
// const userLocation = getUser().userLocation;

// array destructing with split 
// almost add a name/key to the array value 
// split it off bitch 

var cars = 'Honda, Model1233, Red, Big';
var carSplitArray = cars.split(', ') // makes it into an array of single words 
console.log(carSplitArray)

// const carName = carSplitArray[0];
// const carModel = carSplitArray[1];
// const carColor = carSplitArray[2];
// const carSize = carSplitArray[3];

const [carName, carModel, carColor, carSize] = carSplitArray;
console.log(carName)

// normal array destructuring
/*
const arr = [1, 2, 3, 4, 6, 7]
const [a, b, c] = arr // const a = 1 // const b = 2 // const c = 3
*/
// is equivalent to
// const a = arr[0]
// const b = arr[1]
// const c = arr[2]

// we can have the property names on the left of the colon and the new variable names on the right. Now, we are not only destructuring the user object, but we are also renaming the poorly named properties into more easily understood variable names

function objLitFunc() {
    return {
        n: 'Tyler McGinnis',
        h: '@tylermcginnis33',
        l: 'Eden, Utah'

    }
}

const { n: name, h: handle, l: theLanguage } = objLitFunc();
// other examples uses react to change a letter to capital which is apperently a popular use case 
console.log(name2) //Tyler McGinnis







