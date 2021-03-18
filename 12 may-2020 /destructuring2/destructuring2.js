// destructuring with function arguments and parameters 
// Below we have a fetchRepos() function which is going to be in charge of fetching a group of repositories from the Github API. 

// two issues. First, we need to remember or look up which arguments go in which order. Second, we need to read and hope that the documentation has instructions for what to do with our arguments that we do not care about. In this case, we will just use null and hope for the best. 

/*
   the problem 

function fetchRepos (language, minStars, maxStars, createdBefore, createAfter) {
}

fetchRepos('JavaScript', 100, null, new Date('01.01.2017').getTime(),null);
*/

// First, let’s solve the positional parameters problem. What if instead of passing in each argument one by one, we pass in an object instead? Now, before we ever need to look at the function definition of fetchRepos, we know exactly what information it needs. Even more important, order no longer matters.
// phase one put all the arguements into an object so need to order and you can see what is needed =====================================================
// the anonymouse behaves like the spread operator on the left and the invocation acts like the right in a way this example being the invocation  
// phase two // destructuring the function itself to meet the needs of the arguements in the invocation  

/*
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

function fetchRepos({ language, minStars, maxStars, createdBefore, createAfter }) {
    languageBitch = language || 'All';
    maxStarsBitch = maxStars || '';
    console.log(maxStarsBitch)
    console.log(languageBitch)
}
*/
/*
 For each different possible property, we’d set the value of that property to itself or a default value
 if the original value was undefined. Luckily for us, another feature of destructuring is it allows 
 you to set default values for any properties. If a partially destructured value is undefined, 
 it will default to whatever you specify.
  What that means is that the ugly code above can be transformed into this vvvv
*/
/*
function fetchRepos({ language = 'All', ...rest }) {
    console.log(rest) // Object createdBefore: 1483228800000, minStars: 100

}

fetchRepos({
    language: 'one',
    // maxStars: null, take out these to use the defaults above 
    //  createdAfter: null,
    createdBefore: new Date('01/01/2017').getTime(), // notice a date object as property 
    minStars: 100,
});
*/
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// phase three instead of putting the default values inside of the function put it inside of the parethesis 

function fetchRepos({ language = 'All', maxStars = 'no limit', createdAfter = 'n/a', createdBefore = 'n/a', minStars = 0 }) {
    console.log(maxStars, createdBefore);
}

fetchRepos({
    language: 'three',
    createdBefore: new Date('01/01/2017').getTime(), // notice a date object as property 
    minStars: 100,
});

