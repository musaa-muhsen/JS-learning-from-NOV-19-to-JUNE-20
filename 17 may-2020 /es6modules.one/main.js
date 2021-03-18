// this --> doesn't work //import { User as Bitch, myNameIs as bitchName, myAgeIs as bitchAge } from '/es6modules.user.js';
// But if there’s a lot to import, we can import everything as an object using import * as an obj
// Explicit list of imports gives better overview of the code structure: what is used and where.
// better to explicity , 
// 


import * as wholeBitchObj from '/es6modules.user.js'; // import all into an object

const bitch1 = new wholeBitchObj.User('slut', 16)
console.log(bitch1)
console.log(wholeBitchObj)
wholeBitchObj.myNameIs(bitch1);


/*
// default exports is never a good thing for imports because you can change the name to anything when importing
// change name of default export
import MyBitchDefaultChange from '/es6modules.user.js'; // default export name changed without needing curtly braces

const bitch2 = new MyBitchDefaultChange('slutty', 17);
console.log(bitch2)
*/

//best way to import is this expiclity import each one from normal exports this example I changed the names 
//2 
/*
import {User as Cow, myNameIs as bitchName2, myAgeIs as bitchAge2 } from '/es6modules.user.js';

const bitch2 = new Cow('sooo slutty', 18);
bitchName2(bitch2)
bitchAge2(bitch2)
*/
// below the name has been changed at the export stage 
//import { Cow, bitchName2, bitchAge2 } from '/es6modules.user.js';

// const bitch2 = new Cow('sooo slutty', 18);
// bitchName2(bitch2)
// bitchAge2(bitch2)



/*
If importing everything * as an object, then the default property is exactly the default export:

// 📁 main.js
import * as user from './user.js';

let User = user.default; // the default export
new User('John');

*/


import { Cow, bitchName2, bitchAge2 } from './shit.js'

const bitch3 = new Cow('poo', 90)

console.log(bitch3)

bitchName2(bitch3)