// in this lecture brad is just showing us different functions and other js that are used to evaluate these regular expressions.

let re; // re stand for regular expression
re = /hello/; //<- this is a regular expression (put in a variable)
re = /hello/i; // i = case insensitive
//re = /hello/g; // Global Search - if you have an entire paragraph then it will look every instance of this word

console.log(re); // returns /hello/
console.log(re.source); // returns hello

// exec() - return result in an array or null
const result = re.exec("hello world");

console.log(result); // the whole information
console.log(result[0]); // hello
console.log(result.index); // 0
console.log(result.input); // the whole thing between = // which is hello world 

// test() - returns true or false
const outcome2 = re.test("hello"); //true 
console.log(outcome2);

// match() - return result array or null, same/kind of like exec()
const str = "hello there";
const result2 = str.match(re);
console.log(result2);

// search() - returns index of the first match if not found returns -1 just like indexOf()
const str2 = "Brad Hello There";
const result3 = str2.search(re);
console.log(result3); // 5

// replace() - return new string with some or all matches of a pattern

const str3 = "Hello There";
const newStr = str3.replace(re, "Hi");
console.log(newStr);


// indexOf("")
// var str = "Hello world, welcome to the universe.";
// var n = str.indexOf("welcome");
//The indexOf() method returns the position of the first occurrence of a specified value in a string.
//This method returns -1 if the value to search for never occurs.
