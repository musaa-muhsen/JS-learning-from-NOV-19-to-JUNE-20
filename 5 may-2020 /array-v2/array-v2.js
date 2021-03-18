// forEach.
//Invokes a provided function once for each item in the array. Note .forEach is similar to .map except .map returns a new array, .forEach has no return value. Generally, you can use forEach as a replacement for a for loop.

/*
const countries = ['Mali', 'India', 'Kazakhistan'];

countries.forEach((country, index) => funky(country, index))

function funky(country, index) {
    console.log(index, country)
}

*/

// ==============================================================================================
// .includes
// Determines if a particular value is found in an array. Note: We used to use indexOf for this same behavior but as of ES6, includes is more intuitive.
//Determines whether an array includes a certain element, returning true or false as appropriate.
/*
const places = ['la bron', 'alexendria', 'tibit'];

const isPlaceIncludes = places.includes('amazon', 0);
console.log(isPlaceIncludes); // false 

// ==============================================================================================
// .indexOf
//Returns the index of a particular value. If that value doesn’t exist in the array, it returns -1.

const isPlaceIndexOf = places.indexOf('tibit', 0);
console.log(isPlaceIndexOf); //2 
*/
// fromIndex Optional The index to start the search at. 

// ==============================================================================================
// .filter
// Creates a new array after filtering out elements that don’t pass a test specified by a given function.
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

/*
const tweets = [
    { id: 1, stars: 13, text: 'Turns out "git reset --hard HEAD^" was a terrible idea.' },
    { id: 2, stars: 87, text: 'Tech conferences are too expensive.' },
    { id: 3, stars: 51, text: 'Clean code is subjective. Optimize for deletion.' },
    { id: 4, stars: 19, text: 'Maybe the real benefit of open source was the friendships we made along the way?' },
]

const filteredTweets = tweets.filter((t) => t.stars > 50)
console.log(filteredTweets)
*/

// ==============================================================================================
// .join 
// Turns (or joins) all elements of an array into a string and returns it. By default, when converted into a string, each item in the array will be separated by a comma. You can change that by passing in a custom separator as the first argument. 
// makes the array into a string as well as changing the seperator 

const india = ['Ghats', 'Dheli', 'Japer'];
const unifyIndia = india.join(' '); // space inbetween
console.log(unifyIndia); // "Ghats Dheli Japer"

const numz = [2, 4, 6, 8]
const numzTogether = numz.join('-') // - between each number
console.log(numzTogether) //2-4-6-8


// ==============================================================================================
// .map
// Creates a new array with the result of calling a provided function on every element in the original array. When should you use .map? I use it when I need to create a new array, based on a previous array. In the example below, I want to create a new array, tweetIds, based on the original array, tweets.
// In React, .map is used a lot along with JSX to create an unordered list.

/*
const tweets = [
    { id: 1, stars: 13, text: 'Turns out "git reset --hard HEAD^" was a terrible idea.' },
    { id: 2, stars: 87, text: 'Tech conferences are too expensive.' },
    { id: 3, stars: 51, text: 'Clean code is subjective. Optimize for deletion.' },
    { id: 4, stars: 19, text: 'Maybe the real benefit of open source was the friendships we made along the way?' },
]
const theIDs = tweets.map((tweet) => tweet.text)

console.log(theIDs) // returns all the text as an array
*/

// ==============================================================================================
// .pop
// Removes the last element from an array and returns it. Favor using .filter instead of .pop as mutations are 👺.

/*
const countryName = ['Mali', 'Morocco', 'Côte'];

const removedCountry = countryName.pop()

console.log(removedCountry) //Côte
console.log(countryName)
*/
// ==============================================================================================
// .push
// Adds an item to the end of the array and returns the array’s new length. Favor using .concat instead of .push as mutations are 👺.

/*
const cityNames = ['Goo', 'Djado', 'Ghat'];
const addCityName = cityNames.push('Ziza');

console.log(cityNames) // mutated cityNames to ['Goo', 'Djado', 'Ghat']
console.log(addCityName); // 4
*/
// ==============================================================================================


