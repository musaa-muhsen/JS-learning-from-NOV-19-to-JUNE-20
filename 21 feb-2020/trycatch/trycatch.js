/*
syntax 
try {

} catch {

} finally {

}
*/

try {
	//ReferenceError — thrown when we want to refer to some variable that doesn’t exist.
	myFunc();
} catch (err) {
	// console.log(err); //output the whole error message
	// console.log(err.message); //outputs the error itself/content
	// console.log(err.name); // type of errors
	//console.log(err instanceof ReferenceError);// true
} finally {
	console.log("Finally run regardless of result....");
}

console.log("Program continues even when there is errors...");
