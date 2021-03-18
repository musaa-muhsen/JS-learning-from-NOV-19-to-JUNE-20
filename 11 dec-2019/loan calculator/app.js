//The submit event fires when a <form> is submitted.
//we want to delay calculate results 

document.querySelector('#loan-form').addEventListener('submit', function(e){
   
    // first things to happen
    //hide results 
    //document.getElementById('results').style.display = 'none';

    //show loader 
    document.getElementById('loading').style.display = 'block';
    

    setTimeout(calculateResults, 2000);

    e.preventDefault();
});

// start of function ===================================
//caculate results when the submit button is fired off
function calculateResults() {
  console.log('calculating...')
  
  //all the UI variables for the inputs of the DOM 
  //loan amound ID
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  //bottom ones 
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totyalInterest = document.getElementById('total-interest');

  const loanRequest = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12; // so 5% will 0.004166666666666667
  const calculatedPayments = parseFloat(years.value) * 12; //so 3 years will be 36

  //compute monthly payment ========================================
  const x = Math.pow(1 + calculatedInterest, calculatedPayments); //so 5% over 2 years will be 1.1049413355583269
  const monthly = (loanRequest * x * calculatedInterest) / (x-1); //the month repayment answer 410 etc 
  
   //The isFinite() function determines whether a number is a finite, legal number.
  if(isFinite(monthly)) {
      //we're adding value to the bottom variables of the answers 
      monthlyPayment.value = monthly.toFixed(2);
      totalPayment.value = (monthly * calculatedPayments).toFixed(2);
      totyalInterest.value = ((monthly * calculatedPayments)-loanRequest).toFixed(2);

      //show results if there is numbers 
      document.getElementById('results').style.display = 'block';
      //hide loader 
      document.getElementById('loading').style.display = 'none';

  } else {
      //showerror is a function 
      showError('Please check your numbers!')
  }

  //e.preventDefault(); no need for 
}


//making the error msg in js but could be done just html
function showError(error) {


    //hide results and loader so the event goes to loader as first intialised then straight to the error message because both the results and loading are off.
    document.getElementById('results').style.display = 'none';
    document.getElementById('loading').style.display = 'none';

    //get elements to place the error message in, card = the whole frame and heading = h1 tag
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    
    //create a div
    const errorDiv = document.createElement('div');  
    //add classes (for bootstrap)
    errorDiv.className = 'alert alert-danger';
    //create text node and append to div, the error is whats inside the arguement in the function 
    errorDiv.appendChild(document.createTextNode(error));


     //insert error above heading 
     //syntax parentNode.insertBefore(newNode, referenceNode);
     //The Node.insertBefore() method inserts a node before the reference node as a child of a specified parent node.
     card.insertBefore(errorDiv, heading);

     //added another function within a function within a function to clear error after 3 seconds 
     //Syntax setTimeout(function, milliseconds, param1, param2, ...)
     setTimeout(clearError, 3000);
}

//clear error 
function clearError() {
    document.querySelector('.alert').remove();
}







/*
//learning =================================================== 
//parseFloat & parseInt
let num;
 num = 10.333333333;
 num = parseFloat(num); //10.333333333
 num = parseInt(num); //10
 num = "38383474 555"; //first 8 numbers only 

console.log(parseInt(num));

//Return the value of the number 4 to the power of 3 (4*4*4):
const _pow1 = Math.pow(4,3); //64 
const _pow2 = Math.pow(3,3); //27

console.log(_pow1);
*/

