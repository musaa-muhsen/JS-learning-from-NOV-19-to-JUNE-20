// wait till the whole page loads  
window.addEventListener('load', () => {
    let long ,lat; 
    const temperatureDesciption = document.querySelector('.temperature-description'),
    temperatureDegree = document.querySelector('.temperature-degree'),
    locationTimezone = document.querySelector('.location-timezone'),
    temperatureSection = document.querySelector('.temperature-section'),
    temperatureSpan = document.querySelector('.temperature-section span');
    
   


    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition( position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
          const proxy = 'https://cors-anywhere.herokuapp.com/';
          const api = `${proxy}https://api.darksky.net/forecast/789537c8400dcc9b154572aee706883b/${lat},${long}`;

          fetch(api).then((response) => {
            return response.json();
        }).then((data) => {
           
            //const {temperature, summary, icon} = data.currently;
             const temperature = data.currently.temperature;
            const summary = data.currently.summary;
             const iconV = data.currently.icon;
            //set DOM elements from the API           
            temperatureDegree.textContent = temperature;
            temperatureDesciption.textContent = summary;
            locationTimezone.textContent = data.timezone; 

            //formula for celsius 
            let celsius = (temperature - 32) * (5/9);

            //invoke skycons func, obtain 
          setIcons(iconV, document.querySelector(".icon"));
           
            //change temperature to Celsius/Farenheit 
            temperatureSection.addEventListener("click", () =>{
                if(temperatureSpan.textContent === "F") {
                   temperatureSpan.textContent = "C"
                   temperatureDegree.textContent = Math.floor(celsius);
                } else {
                   temperatureSpan.textContent = "F";
                   temperatureDegree.textContent = temperature;

                }
            });
         

          }); 
        //   .catch((err) =>{
        //       console.log(err)
        //   }) // end of then 
    }); // end of  getCurrentPosition  
 }  //end of if

    function setIcons(iconStr, iconID) {
        const skyconsInsta = new Skycons({color: "black"}); //init the constructure and put it into a variable
        const currentIcon = iconStr.replace(/-/g, "_").toUpperCase(); //modify info to suit dark sky and sky icons SUMMARY 
        skyconsInsta.play(); // a skycons method needed to start the animation?
        return skyconsInsta.set(iconID, Skycons[currentIcon]); // return 

    }

});  //end of load event 

//A Set is a special type collection – “set of values” (without keys), where each value may occur only once.
//Set objects are collections of values. You can iterate through the elements of a set in insertion order. A value in the Set may only occur once; it is unique in the Set's collection
//global replacement
//str.replace("Microsoft", "W3Schools"); // answer W3Schools


const proxy2 = 'https://cors-anywhere.herokuapp.com/';

fetch(`${proxy2}https://api.darksky.net/forecast/789537c8400dcc9b154572aee706883b/53.4225427,-2.2992945`)
 .then((resp) =>{
    return resp.json();
 }).then((data) =>{
  const summary = data.currently.summary;
  const temperature = data.hourly.data;
  //const temperature = outcome.hourly;
console.log(data)
  // console.log(summary);
  // console.log(temperature);


 });
console.log('====================')

fetch(`${proxy2}https://api.darksky.net/forecast/789537c8400dcc9b154572aee706883b/37.8267,-122.4233`)
 .then((resp) =>{
    return resp.json();
 }).then((data) =>{
 const summary = data.currently.summary;
 const temperature = data.alerts;
 
  console.log(summary);
  console.log(temperature);
 });

//  fetch(`${proxy2}https://api.darksky.net/forecast/789537c8400dcc9b154572aee706883b/37.8267,-122.4233`)
//   .then((resp) =>{
//      return resp.json();
//   }).then((outcome) =>{
//        console.log(outcome);
//   });

//  fetch(`${proxy2}https://api.darksky.net/forecast/789537c8400dcc9b154572aee706883b/37.8267,-122.4233`)
//   .then((resp) =>{
//      return resp.json();
//   }).then((outcome) =>{
//        console.log(outcome);
//   });
 
// fetch(`${proxy2}https://api.darksky.net/forecast/789537c8400dcc9b154572aee706883b/37.8267,-122.4233`)
//  .then((resp) =>{
//     return resp.json();
//  }).then((outcome) =>{
//       console.log(outcome);
//  });


// fetch(`${proxy2}https://api.darksky.net/forecast/789537c8400dcc9b154572aee706883b/37.8267,-122.4233`)
//  .then((resp) =>{
//     return resp.json();
//  }).then((outcome) =>{
//       console.log(outcome);
//  });


//  fetch(`${proxy2}https://api.darksky.net/forecast/789537c8400dcc9b154572aee706883b/37.8267,-122.4233`)
//   .then((resp) =>{
//      return resp.json();
//   }).then((outcome) =>{
//        console.log(outcome);
//   });


//  fetch(`${proxy2}https://api.darksky.net/forecast/789537c8400dcc9b154572aee706883b/37.8267,-122.4233`)
//   .then((resp) =>{
//      return resp.json();
//   }).then((outcome) =>{
//        console.log(outcome);
//   });


// fetch(`${proxy2}https://api.darksky.net/forecast/789537c8400dcc9b154572aee706883b/37.8267,-122.4233`)
//  .then((resp) =>{
//     return resp.json();
//  }).then((outcome) =>{
//       console.log(outcome);
//  });

 
// fetch(`${proxy2}https://api.darksky.net/forecast/789537c8400dcc9b154572aee706883b/37.8267,-122.4233`)
//  .then((resp) =>{
//     return resp.json();
//  }).then((outcome) =>{
//       console.log(outcome);
//  });


//  fetch(`${proxy2}https://api.darksky.net/forecast/789537c8400dcc9b154572aee706883b/37.8267,-122.4233`)
//   .then((resp) =>{
//      return resp.json();
//   }).then((outcome) =>{
//        console.log(outcome);
//   });


//  fetch(`${proxy2}https://api.darksky.net/forecast/789537c8400dcc9b154572aee706883b/37.8267,-122.4233`)
//   .then((resp) =>{
//      return resp.json();
//   }).then((outcome) =>{
//        console.log(outcome);
//   });
 
