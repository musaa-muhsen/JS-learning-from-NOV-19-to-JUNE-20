let re;
// Literal Characters 
re = /hello/;
re = /hello/i;

// metacharacter symbols
re = /^h/i; // must start with 
re = / world$/i // must end with  
re = /^hello world$/i; // must begin and end with 
re = /h.llo/i; // matches any One character  
re = /h*llo/i; // matches any character 0 or more so h8285235llo will work 
re = /gre?a?y/i; // optional character 
re = /gre?a?y\?/i; // escape character with a \

// brackers [] - Character Sets 
re = /gr[ae]y/i; // must be an a or e 
re = /[GF]ray/; // must a a G or F (caps)
re = /[^GF]ray/i; // Match anything EXCEPT a G or F 
re = /[A-Z]ray/; // match any uppercase letter 
re = /[a-z]ray/; // match any lowercase letter 
re = /[A-Za-z]ray/; // match any letter 
re = /[0-9]ray/; // match any digit
re = /[0-9][0-9]ray/; // match 2 any digits

// braces {} - Quantifiers
re = /Hel{2}o/i; // Must occur exactly {num} amount of times
re = /Hel{2,4}o/i; // Must occur between {num} and {num}
re = /Hel{2,}o/i; // must occur at least {num} times 

// paretheses () - grouping 
re = /^([0-3]x){3}$/; // anything times a quantifier 

// shorthand character classes 
re = /\w/; //  is used to find a word character or _
re = /\w+/; // Matches the preceding item "x" 1 or more times. Equivalent to {1,}. For example, /a+/ matches the "a" in "candy" and all the "a"'s in "caaaaaaandy".
re = /\W/; // Non-Word Character class
re = /\d/; // match any digit 
re = /\d+/; // match any digit 0 or more times 
re = /\D/;  // match any Non-digit 
re = /\s/; // match whitespace char 
re = /\S/; // match non-whitespace char 
re = /HELL\b/i; // word boundary, finds the whole charactor 

// Assertions 
re = /x(?=y)/; // Match x only if followed by y
re = /x(?!y)/; // match x only if NOT followed by y




//string to match
const str = 'x';

//log results 
const result = re.exec(str); // exec() - return result in an array or null
console.log(result); // the whole information

function reTest(re, str) {
    // if results matches the string needed// true or false 
    if (re.test(str)) {
        console.log(`${str} matches ${re.source}`);
    } else {
        console.log(`${str} does NOT match ${re.source}`);
    }
}
reTest(re, str);
