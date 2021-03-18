// Often times when writing a function, you need to assign default values for arguments that weren’t passed to the function when it was invoked.// so aka default are used when the default values of a function is undefined when the function is invoked 

// remember to keep calm and focus 
// price is required and salesTax and discount are optional 
// the default will be for salesTax is 0.05 aka 5% and discount is 0 
// so if the default values aren't passed in, the function will still work when the function is invoked
// this way the consumer of this function can supply a sales tax as well as a discount if they want, but if they don't 

// old school way 
function calculatePaymentOrOp(price, salesTax, discount) {

    // let salesTax = salesTax || 0.05; //if you try to re-declare a variable inside of a function you get this - Identifier 'salesTax' has already been declared 
    // salesTax = salesTax || 0.05;
    // discount = discount || 0;

    // same as // If you’re not familiar with ||, you can think of it like you would an if statement checking for falsy values.

    if (!salesTax) {
        salesTax = 0.5;
    }
    if (!discount) {
        discount = 0;
    }


    console.log(price)
    console.log('sales tax is...', salesTax)
    console.log('discount is...', discount)

    // math calculation of the the total price // try to figure out one day as a challenge 

}

const calcOrOp = calculatePaymentOrOp(10)

// Above has downsides. Can you spot the issue? What if we wanted to set the salesTax to 0? With our current implementation that would be impossible since 0 is classified as a falsy value so our if (!salesTax) would always evaluate to true setting the salesTax to our default value of 0.05. To fix this, let’s check for undefined rather than falsy.

// conditional ternary operator 

function calcPaymentTern(price, salesTax, discount) {
    salesTax = typeof salesTax === 'undefined' ? 0 : salesTax
    discount = typeof discount === 'undefined' ? 0 : price

    console.log(price)
    console.log('sales tax is...', salesTax)
    console.log('discount is...', discount)

    // math calculation of the the total price // try to figure out one day as a challenge 

}

calcPaymentTern(20)

// above solves it however the es6 of course there is a shorter way 
// by adding the defaults into the arguements 
function calcPayment_es6(price = isRequired('price'),
    salesTax = 0, discount = 0) {

    // math calculation of the the total price  
}

calcPayment_es6()
// notice also hoisting is done here 
// throw an error if the price wasn’t specified when it was invoked done by creating the function that will throw the error 


function isRequired(name) {
    throw new Error(`${name} is required`)

}