// fetch itself returns a promise 

//Promise constructor takes only one argument,a callback function.
//Callback function takes two arguments, resolve and reject
// then() is invoked when a promise is either resolved or rejected.

class EasyHttp {
    
    //make an HTTP GET Request
    mGet(url) {
    return new Promise(function (resolve, reject) {
        fetch(url)
        .then( function(resp) {
            resp.json()
        })
        .then( function(data) { 
            resolve(data) 
        })
        .catch( function(err) {
            reject(err)});
        });
    } 
    
    //make an HTTP POST Request 

    mPost(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)

            })
            .then(resp => resp.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
        } 

    //make an HTTP PUT request =============================
    mPut(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)

            })
            .then(resp => resp.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
    } 

      //make an HTTP DELETE request ========================
      mDelete(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then(resp => resp.json())
            .then( function() {
                resolve('content deleted...')
            })
            .catch(err => reject(err));
        });
    } 


}





/*
class CarVersion {
    versionOf(x) {
        return x + ' Ford';
    }
}

carID = new CarVersion();

console.log(carID.versionOf('v:434'));
*/





// class User {
//     login() {
//         console.log(1);
//     }
//     logout() {
//         console.log(0);
//     }
// }

// var userone = new User();
// var usertwo = new User();

// console.log(userone);
// console.log(usertwo.logout());