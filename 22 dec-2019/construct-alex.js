/*
An instance, in object-oriented programming (OOP), is a specific realization of any object. An object may be varied in a number of ways. Each realized variation of that object is an instance. The creation of a realized instance is called instantiation.
Each time a program runs, it is an instance of that program. In languages that create objects from classes, an object is an instantiation of a class. That is, it is a member of a given class that has specified values rather than variables. In a non-programming context, you could think of "dog" as a class and your particular dog as an instance of that class.
An instance is a specific example or case of something. 
*/

function Apple(x,y,color,score)
{
    this.o = x;
    this.y = y;
    this.color = color;
    this.score = score;
}


const apple1 = new Apple(10,20,'green','4/10');
const apple2 = new Apple(10,20,'purple','3/10');
const apple3 = new Apple(20,40,'pink','10/10');

console.log(`apple size is: ${apple1.o} wide and ${apple1.y} in height, apple color is: ${apple1.color}`)
/*
const answer = [];
const appleWhole = [apple1,apple2,apple3];
console.log(appleWhole);

appleWhole.forEach( function(appleID) {
    answer.push(appleID);
    //console.log(appleID);
   //document.getElementById("h1").innerHTML = answer;
});
console.log(answer);
*/


/*
document.getElementById("h1").innerHTML = apple1.color;
const appleWhole = [apple1,apple2,apple3];

appleWhole.forEach( function(appleID) {
    //console.log(appleID);
    // document.getElementById("h1").innerHTML = appleID;
});

*/