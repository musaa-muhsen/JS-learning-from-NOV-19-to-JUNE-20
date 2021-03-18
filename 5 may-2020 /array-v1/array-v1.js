// don't use "delete arrayName[0]" Using delete may leave undefined holes in the array. Use pop() or shift() instead.

//.concat , .every

// ==============================================================================================
// .concat 
// Used to merge two or more arrays. What’s nice about concat is it doesn’t mutate the original array but instead returns a new array.

/*
const oldArray = ['pie', 'in', 'the', 'sky'];
const newArray = ['algeria', 'mali', 'chad'];
const bitch = new Array(123, 456, 789);

const zero = 0;
console.log(bitch[zero])
const togetherArray = oldArray.concat(newArray, bitch);

const numberChange = togetherArray.length - 1
console.log(numberChange) // 9
*/

// ==============================================================================================
// .every
// Used to determine if every element in an array passes a test specified by a given function. The function passed to every gets invoked once for each element in the array. As soon as that function returns a falsy value, every will stop executing and return false. If the function passed to every never returns a falsy value, then every will return true.


ages = [21, 40, 18, 19, 27];

const over18 = ages.every(age => age >= 18)

console.log(over18) // true 

const over21 = ages.every(function (age) {
    return age >= 21;
})
console.log(over21) // false 


// ==============================================================================================
//.fill - not very usefull 
// The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.
const array1 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));//1200

// fill with 5 from position 1
console.log(array1.fill(5, 1));//1555

console.log(array1.fill(6));//6666

// ==============================================================================================
//Array(number)

/*
const arrayTest = new Array(10);
console.log(arrayTest) //(10) [empty × 10]
*/

// ==============================================================================================
//.find
// Allows you to find the first element in an array which satisfies a test specified by a given function.

const tweets = [
    { id: 1, stars: 13, text: 'Turns out "git reset --hard HEAD^" was a terrible idea.' },
    { id: 2, stars: 87, text: 'Tech conferences are too expensive.' },
    { id: 3, stars: 51, text: 'Clean code is subjective. Optimize for deletion.' },
    { id: 4, stars: 19, text: 'Maybe the real benefit of open source was the friendships we made along the way?' }
]

console.log(tweets[0].id); // 1  
const tweetObj = tweets.find((t) => t.id === 3)
console.log(tweetObj) //{id: 3, stars: 51, text: "Clean code is subjective. Optimize for deletion."}

// ==============================================================================================
// .findIndex
//Similar to .find, but instead of returning the element, it returns the index where the element is located.

const tweetIndex = tweets.findIndex((t) => t.text === 'Turns out "git reset --hard HEAD^" was a terrible idea.')
console.log(tweetIndex) // 0


// ==============================================================================================
// JavaScript arrays are used to store multiple values in a single variable.
// below is a car array with 2 objects literals as array elements, the first index being a object literal has 2 properties within it 1st being a string the 2nd being an array

/*
var cars = [
    { name: 'Honda',
       models: [
                { name: 'Accord', features: ['2dr', '4dr'] },
                { name: 'CRV', features: ['2dr', 'Hatchback'] },
                { name: 'Pilot', features: ['base', 'superDuper'] }
        ]},

    { name: 'Toyota', models: [
                { name: 'Prius', features: ['green', 'superGreen'] },
                { name: 'Camry', features: ['sporty', 'square'] },
                { name: 'Corolla', features: ['cheap', 'superFly'] }
        ]}
];
*/

