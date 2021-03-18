const http = new EasyHttp;

// http.mGet('https://jsonplaceholder.typicode.com/users')
// .then(data => console.log(data))
// .catch(err => console.log(err))

//not asynchronous 
//onsole.log(users);


//user data 
const user = {
    name: 'John Doe',
    username: 'johndoe',
    email: 'jdoe@aol.com'
}
//create user 
// http.mPost('https://jsonplaceholder.typicode.com/users', user)
// .then(data => console.log(data))
// .catch(err => console.log(err));

//update user 
// http.mPut('https://jsonplaceholder.typicode.com/users/2', user)
// .then(data => console.log(data))
// .catch(err => console.log(err));

//delete user 
http.mDelete('https://jsonplaceholder.typicode.com/uses3') //1st stage is a data which is a incomplete promise  
.then(data => console.log(data)) //fetch the data for whatever is inside the promise 
.catch(err => console.log('wrong!')); //rejected data 

//console.log(userdelete);