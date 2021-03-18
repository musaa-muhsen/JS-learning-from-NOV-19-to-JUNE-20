// this is the final file in the list 

// init/instantate github constructure object 
// create "new Github" to create a new object with all the listed methods in Github class
const githubInsta = new Github;

const uiInsta = new UI;

//search input 
const seatchUser = document.getElementById('searchUser');

// search input event listener 
searchUser.addEventListener('keyup', (e) => {
  
//get input text 
const userText = e.target.value;

//if not empty, good
if(userText !== '') {

    //get text box input string and add it to the method getUser() to get the user name ,which is in the class Github 
    //most important line to bring the object
    githubInsta.getUser(userText).then(data => {

        if(data.profile.message === "Not Found") {
            //show alert, bad 
            //first parameter is the message and the second is the bootstrap classes to add
            uiInsta.showAlert('User not found', 'alert alert-danger');
        } else {
            //show profile, good // showProfile method come from the ui class which invokes/creates the content 
            // a new instance of the fetch url 
           uiInsta.showProfile(data.profile);
            //console.log(data)
            //'repos' is what is returned from the Github class method
           uiInsta.showRepos(data.repos);
        }
    }) //end then

} else {
    //clear profile, bad  
       uiInsta.clearProfile();
}

}); //end of eventlistener 

