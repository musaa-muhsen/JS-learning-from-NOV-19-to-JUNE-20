const btn1 = document.getElementById('button1');
const btn2 = document.getElementById('button2');

btn1.addEventListener('click', loadCustomer);
btn2.addEventListener('click', loadCustomers);

function loadCustomer(e) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customer.json', true);

    xhr.onload = function() {
        if(this.status === 200) {
            //console.log(this.responseText);
           
            const customer = JSON.parse(this.responseText); // Parse the data with JSON.parse(), and the data becomes a JavaScript object.

            const output = `
            <ul>
            <li>ID: ${customer.id}</li>
            <li>Name: ${customer.name}</li>
            <li>Company: ${customer.company}</li>
            <li>Phone: ${customer.phone}</li>
            </ul>
            `;

            document.getElementById('customer').innerHTML = output;
        }
    }
      
   xhr.send();
}

// customers ========================================================

function loadCustomers(e) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customers.json', true);

    xhr.onload = function() {
        if(this.status === 200) {
            //console.log(this.responseText);
           
            const customers = JSON.parse(this.responseText); 

            let output = '';

            customers.forEach(function(customer) {
             output += `
            <ul>
            <li>ID: ${customer.id}</li>
            <li>Name: ${customer.name}</li>
            <li>Company: ${customer.company}</li>
            <li>Phone: ${customer.phone}</li>
            </ul>
            `;
            });


            document.getElementById('customers').innerHTML = output;
        }
    }
      
   xhr.send();
}



//so we're gpomg to use plus instead of equals if we equals we're going to overwrite this but we want to append onto this (output). And then each iteration it'll append that new customer onto output.