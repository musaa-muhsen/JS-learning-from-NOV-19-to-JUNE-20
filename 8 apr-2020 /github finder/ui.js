//in app js this would be....

class UI {
    constructor() {
        this.profileDiv = document.getElementById('profile');
    }
    
    showProfile(userDetails) {
        // create template from the data by using a template literal 
        //use the porfile div to insert content into 
        this.profileDiv.innerHTML = `
        <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${userDetails.avatar_url}">
            <a href="${userDetails.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary mb-1">Public Repos: ${userDetails.public_repos}</span>
            <span class="badge badge-secondary mb-1">Public Gists: ${userDetails.public_gists}</span>
            <span class="badge badge-success mb-1">Followers: ${userDetails.followers}</span>
            <span class="badge badge-info mb-1">Following: ${userDetails.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${userDetails.company}</li>
              <li class="list-group-item">Website/Blog: ${userDetails.blog}</li>
              <li class="list-group-item">Location: ${userDetails.location}</li>
              <li class="list-group-item">Member Since: ${userDetails.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
        `
    }

    //show user repos 
    showRepos(repos) {
        let output = '';

        repos.forEach((repo) =>{
            output += `
            <div class="card card-body mb-2">
            <div class="row">
              <div class="col-md-6">
                <a href="${repo.html_url}" target="_blank">${repo.name}</a>
              </div>
              <div class="col-md-6">
              <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
              <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
              <span class="badge badge-success">Forks: ${repo.forms_count}</span>
              </div>
            </div>
          </div>
            `;
        });

        //output repos the id is created when show profile is created 
        //A software repository, or “repo” for short, is a storage location where software packages are stored and retrieved. A software repository is typically managed by source control or repository managers.
        document.getElementById('repos').innerHTML = output;

    }

    //this keyword refers to the current instance of the object 
    //Functions are function objects. In JavaScript, anything that is not a primitive type ( undefined , null , boolean , number , or string ) is an object. Objects in JavaScript are extremely versatile. Because of this, we can even pass a function as a parameter into another function
    // show alert message 
     showAlert(messageP, classNameP) {

         // clear any remaining alerts 
         this.clearAlert();
         // create a div 
         const div = document.createElement('div');
         // add a class to the div which is on app.js as the second arguement 
         div.className = classNameP;
         //obtain the message content 
         const message = document.createTextNode(messageP);
         //add text to the div
         div.appendChild(message);
         // get parent
         const container = document.querySelector('.search-container');
         // get search box 
         const search = document.querySelector('.search');
         // insert alert 
         container.insertBefore(div, search);

         //Timeout after 3 sec 
         setTimeout(() => {
           this.clearAlert();
         }, 3000)

     }

     // clear alert message 
     clearAlert() {
         //when the showalert messsage is triggered it show .alert 
         const currentAlert = document.querySelector('.alert');

         if(currentAlert) {
             currentAlert.remove();
         }
     }
    


    //clear profile method (search box string)
    clearProfile() {
        this.profileDiv.innerHTML = '';
    }


} // end of class


















//========================== different stuff 

/*
Metadata
headers

//fetch('./file.json').then(response => {
    console.log(response.headers.get('Content-Type'))
    console.log(response.headers.get('Date'))
  })
*/
/*

fetch("https://api.imgflip.com/get_memes")
.then(response => {
    
	return response.json();
}).then(data => {
   console.log(data)
})
.catch(err => {
	console.log(err);
});
*/

