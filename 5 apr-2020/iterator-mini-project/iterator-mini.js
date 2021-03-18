const data = [
    {
        name: 'John Doe',
        age: 32,
        gender: 'male',
        lookingfor: 'female',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/men/82.jpg'

    },
    {
        name: 'Jen Smith',
        age: 26,
        gender: 'female',

        lookingfor: 'male',
        location: 'Miami FL',
        image: 'https://randomuser.me/api/portraits/women/82.jpg'
    },
    {
        name: 'Tim Cook',
        age: 35,
        gender: 'male',
        lookingfor: 'male',
        location: 'New York',
        image: 'https://randomuser.me/api/portraits/men/39.jpg'
    }
]

const profiles = profileIterator(data);

// call first profile 
nextProfile();

// next event 
const nxtBtn = document.getElementById('next');

nxtBtn.addEventListener('click', nextProfile);

// Next Profile Display 
function nextProfile() {
    const currentProfile = profiles.next().value;

    if (currentProfile !== undefined) {
        document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group">
     <li class="list-group-item">Name: ${currentProfile.name}</li>
     <li class="list-group-item">Age: ${currentProfile.age}</li>
     <li class="list-group-item">Location: ${currentProfile.location}</li>
     <li class="list-group-item">Preference: ${currentProfile.gender}</li>
     <li class="list-group-item">Looking for: ${currentProfile.lookingfor}</li>
    </ul>
    `;
        document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
    } else {
        // no more profiles
        window.location.reload();
    }

}

// Profile Iterator 
function profileIterator(profiles) {
    let nextIndex = 0;
    // profiles.length 
    return {
        next: function () {
            return nextIndex < profiles.length ? { value: profiles[nextIndex++], done: false } :
                { done: true }
        }
    }
}
