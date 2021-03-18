window.addEventListener('load', () => {

const iconContainer1 = document.querySelector('.icon-container1'),
iconContainer2 = document.querySelector('.icon-container2'), 
iconContainer3 = document.querySelector('.icon-container3'),
iconContainer4 = document.querySelector('.icon-container4'),
iconContainer5 = document.querySelector('.icon-container5');

proxy = 'https://cors-anywhere.herokuapp.com/';

      //Peak District  ==================================================// 53.2218284,-1.6752154
    
      fetch(`${proxy}`)
      .then((resp) =>{
         return resp.json();
      }).then((data) =>{
       const summary = data.currently.summary;
       const icon = data.currently.icon;
       weatherIcon1(icon);
      });

 
      function weatherIcon1(icon) {
                switch (icon) {
                    case 'clear-day': iconContainer1.innerHTML =  `<img src="weather-icons/yellow.jpg">`; break;
                    case 'clear-night': iconContainer1.innerHTML = `<img src="weather-icons/black.png">`; break;
                    case 'rain': iconContainer1.innerHTML = `<img src="weather-icons/red.png">`; break;
                    case 'snow': iconContainer1.innerHTML = `<img src="weather-icons/blue.png">`; break;
                    case 'sleet': iconContainer1.innerHTML = `<img src="weather-icons/green.jpg">`; break;
                    case 'fog': iconContainer1.innerHTML = `<img src="weather-icons/yellow.png">`; break;
                    case 'cloudy': iconContainer1.innerHTML = `<img src="weather-icons/black.png">`; break;
                    case 'partly-cloudy-day': iconContainer1.innerHTML = `<img src="weather-icons/red.png">`; break;
                    case 'partly-cloudy-night': iconContainer1.innerHTML = `<img src="weather-icons/black.png">`; break;
                    case 'hail': iconContainer1.innerHTML = `<img src="weather-icons/black.png">`; break;
                    case 'thunderstorm': iconContainer1.innerHTML = `<img src="weather-icons/black.png">`; break;
                    case 'tornado': iconContainer1.innerHTML = `<img src="weather-icons/black.png">`; break;
                    default: console.log('NOOOOO!!');
                  } //end of switch
       } // end of function         
    



      // Northumberland ==================================================// 55.3368782,-2.3240706
      fetch(`${proxy}https://api.darksky.net/forecast/789537c8400dcc9b154572aee706883b/55.3378051,-2.2588731`)
      .then((resp) =>{
         return resp.json();
      }).then((data) =>{
       const summary = data.currently.summary;
       const icon = data.currently.icon;
       weatherIcon2(icon);
      });

 
      function weatherIcon2(icon) {
                switch (icon) {
                    case 'clear-day': iconContainer2.innerHTML =  `<img src="weather-icons/yellow.jpg">`; break;
                    case 'clear-night': iconContainer2.innerHTML = `<img src="weather-icons/black.png">`; break;
                    case 'rain': iconContainer2.innerHTML = `<img src="weather-icons/red.png">`; break;
                    case 'snow': iconContainer2.innerHTML = `<img src="weather-icons/blue.png">`; break;
                    case 'sleet': iconContainer2.innerHTML = `<img src="weather-icons/green.jpg">`; break;
                    case 'fog': iconContainer2.innerHTML = `<img src="weather-icons/yellow.png">`; break;
                    case 'cloudy': iconContainer2.innerHTML = `<img src="weather-icons/black.png">`; break;
                    case 'partly-cloudy-day': iconContainer2.innerHTML = `<img src="weather-icons/red.png">`; break;
                    case 'partly-cloudy-night': iconContainer2.innerHTML = `<img src="weather-icons/black.png">`; break;
                    case 'hail': iconContainer2.innerHTML = `<img src="weather-icons/black.png">`; break;
                    case 'thunderstorm': iconContainer2.innerHTML = `<img src="weather-icons/black.png">`; break;
                    case 'tornado': iconContainer2.innerHTML = `<img src="weather-icons/black.png">`; break;
                    default: console.log('NOOOOO!!');
                  } //end of switch
       } // end of function 

       // Yorkshire Dales ==================================================// 54.2232533,-2.1849168
    
       fetch(`${proxy}`)
       .then((resp) =>{
          return resp.json();
       }).then((data) =>{
        const summary = data.currently.summary;
        const icon = data.currently.icon;
        weatherIcon3(icon);
       });
 
  
       function weatherIcon3(icon) {
                 switch (icon) {
                     case 'clear-day': iconContainer3.innerHTML =  `<img src="weather-icons/yellow.jpg">`; break;
                     case 'clear-night': iconContainer3.innerHTML = `<img src="weather-icons/black.png">`; break;
                     case 'rain': iconContainer3.innerHTML = `<img src="weather-icons/red.png">`; break;
                     case 'snow': iconContainer3.innerHTML = `<img src="weather-icons/blue.png">`; break;
                     case 'sleet': iconContainer3.innerHTML = `<img src="weather-icons/green.jpg">`; break;
                     case 'fog': iconContainer3.innerHTML = `<img src="weather-icons/yellow.png">`; break;
                     case 'cloudy': iconContainer3.innerHTML = `<img src="weather-icons/black.png">`; break;
                     case 'partly-cloudy-day': iconContainer3.innerHTML = `<img src="weather-icons/red.png">`; break;
                     case 'partly-cloudy-night': iconContainer3.innerHTML = `<img src="weather-icons/black.png">`; break;
                     case 'hail': iconContainer3.innerHTML = `<img src="weather-icons/black.png">`; break;
                     case 'thunderstorm': iconContainer3.innerHTML = `<img src="weather-icons/black.png">`; break;
                     case 'tornado': iconContainer3.innerHTML = `<img src="weather-icons/black.png">`; break;
                     default: console.log('NOOOOO!!');
                   } //end of switch
        } // end of function 
          

      //lake district  ==================================================// 54.4608702,-3.0908141
    
      fetch(`${proxy}https://api.darksky.net/forecast/789537c8400dcc9b154572aee706883b/55.3378051,-2.2588731`)
      .then((resp) =>{
         return resp.json();
      }).then((data) =>{
       const summary = data.currently.summary;
       const icon = data.currently.icon;
       weatherIcon4(icon);
      });

 
      function weatherIcon4(icon) {
                switch (icon) {
                    case 'clear-day': alert(1) , iconContainer4.innerHTML =  `<img src="weather-icons/yellow.jpg">`; break;
                    case 'clear-night': iconContainer4.innerHTML = `<img src="weather-icons/black.png">`; break;
                    case 'rain': iconContainer4.innerHTML = `<img src="weather-icons/red.png">`; break;
                    case 'snow': iconContainer4.innerHTML = `<img src="weather-icons/blue.png">`; break;
                    case 'sleet': iconContainer4.innerHTML = `<img src="weather-icons/green.jpg">`; break;
                    case 'fog': iconContainer4.innerHTML = `<img src="weather-icons/yellow.png">`; break;
                    case 'cloudy': iconContainer4.innerHTML = `<img src="weather-icons/black.png">`; break;
                    case 'partly-cloudy-day': iconContainer4.innerHTML = `<img src="weather-icons/red.png">`; break;
                    case 'partly-cloudy-night': iconContainer4.innerHTML = `<img src="weather-icons/black.png">`; break;
                    case 'hail': iconContainer4.innerHTML = `<img src="weather-icons/black.png">`; break;
                    case 'thunderstorm': iconContainer4.innerHTML = `<img src="weather-icons/black.png">`; break;
                    case 'tornado': iconContainer4.innerHTML = `<img src="weather-icons/black.png">`; break;
                    default: console.log('NOOOOO!!');
                  } //end of switch
       } // end of function 
        
            //North York Moors  ==================================================// 54.38716,-0.8949027
    
            fetch(`${proxy}https://api.darksky.net/forecast/789537c8400dcc9b154572aee706883b/55.3378051,-2.2588731`)
            .then((resp) =>{
               return resp.json();
            }).then((data) =>{
             const summary = data.currently.summary;
             const icon = data.currently.icon;
             console.log(icon)
             weatherIcon5(icon);
            });
      
       
            function weatherIcon5(icon) {
                      switch (icon) {
                          case 'clear-day': iconContainer5.innerHTML =  `<img src="weather-icons/yellow.jpg">`; break;
                          case 'clear-night': iconContainer5.innerHTML = `<img src="weather-icons/black.png">`; break;
                          case 'rain':alert(1) ,iconContainer5.innerHTML = `<img src="weather-icons/red.png">`; break;
                          case 'snow': iconContainer5.innerHTML = `<img src="weather-icons/blue.png">`; break;
                          case 'sleet': iconContainer5.innerHTML = `<img src="weather-icons/green.jpg">`; break;
                          case 'fog': iconContainer5.innerHTML = `<img src="weather-icons/yellow.png">`; break;
                          case 'cloudy': iconContainer5.innerHTML = `<img src="weather-icons/black.png">`; break;
                          case 'partly-cloudy-day': iconContainer5.innerHTML = `<img src="weather-icons/red.png">`; break;
                          case 'partly-cloudy-night': iconContainer5.innerHTML = `<img src="weather-icons/black.png">`; break;
                          case 'hail': iconContainer5.innerHTML = `<img src="weather-icons/black.png">`; break;
                          case 'thunderstorm': iconContainer5.innerHTML = `<img src="weather-icons/black.png">`; break;
                          case 'tornado': iconContainer5.innerHTML = `<img src="weather-icons/black.png">`; break;
                          default: console.log('NOOOOO!!');
                        } //end of switch
             } // end of function 
        
       

       
               
    }); //end of window load


