class Github {
    constructor() {
        this.client_id = '0907e7fe061a78796f46';
        this.client_secret = 'b4a2bb88f7c897464ee64f5e47a625da4c4ce629';
        this.repos_count = 5;
        this.repos_sort = 'created: asc' //ascending 
    }
    //userText on app.js is passed through parameter 
    async getUser(userName) {
        const profileResponse = await fetch(`https://api.github.com/users/${userName}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const reposResponse = await fetch(`https://api.github.com/users/${userName}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profileData = await profileResponse.json();
        const reposData = await reposResponse.json();


        //return an object because it's multipe 
        return {
            profile: profileData,
            repos: reposData
            //profileData //can also do in es6 if its the same name
 
        }
    }

    
  
}