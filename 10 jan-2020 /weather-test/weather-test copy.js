window.addEventListener('load', () => {

const iconContainer1 = document.querySelector('.icon-container1'),
iconContainer2 = document.querySelector('.icon-container2'), 
iconContainer3 = document.querySelector('.icon-container3'),
iconContainer4 = document.querySelector('.icon-container4')
proxy = 'https://cors-anywhere.herokuapp.com/';


      // Cairngorms ==================================================

      fetch(`${proxy}`)
       .then((resp) =>{
          return resp.json();
       }).then((data) =>{
        const summary = data.currently.summary;
        const icon = data.currently.icon;
        weatherIcon1(icon);    
       }); //end of then 

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
        } //end of function 
      


      // Northumberland ==================================================// 55.3368782,-2.3240706
      fetch(`${proxy}`)
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
      
        // mourne mountains ==================================================// 54.1753108,-6.1369995
    
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
                     case 'clear-day': iconContainer4.innerHTML =  `<img src="weather-icons/yellow.jpg">`; break;
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

      // mourne mountains ==================================================// 54.1753108,-6.1369995
    
      fetch(`${proxy}`)
      .then((resp) =>{
         return resp.json();
      }).then((data) =>{
       const summary = data.currently.summary;
       const icon = data.currently.icon;
       weatherIcon2(icon);
      });

 
      function weatherIcon2(icon) {
                switch (icon) {
                    case 'clear-day': iconContainer5.innerHTML =  `<img src="weather-icons/yellow.jpg">`; break;
                    case 'clear-night': iconContainer5.innerHTML = `<img src="weather-icons/black.png">`; break;
                    case 'rain': iconContainer5.innerHTML = `<img src="weather-icons/red.png">`; break;
                    case 'snow': iconContainer5.innerHTML = `<img src="weather-icons/blue.png">`; break;
                    case 'sleet': iconContainer5.innerHTML = `<img src="weather-icons/green.jpg">`; break;
                    case 'fog': iconContainer5.innerHTML = `<img src="weather-icons/yellow.png">`; break;
                    case 'cloudy': iconContainer5.innerHTML = `<img src="weather-icons/black.png">`; break;
                    case 'partly-cloudy-day': iconContainer5.innerHTML = `<img src="weather-icons/red.png">`; break;
                    case 'partly-cloudy-night': iconContainer5.innerHTML = `<img src="weather-icons/black.png">`; break;
                    case 'hail': iconContainer5.innerHTML = `<img src="weather-icons/black.png">`; break;
                    case 'thunderstorm': iconContainer2.innerHTML = `<img src="weather-icons/black.png">`; break;
                    case 'tornado': iconContainer2.innerHTML = `<img src="weather-icons/black.png">`; break;
                    default: console.log('NOOOOO!!');
                  } //end of switch
       } // end of function 


       // Snowdonia ==================================================// 52.9180115,-3.8934087
    
       fetch(`${proxy}`)
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

          // Pembrokeshire Coast==================================================// 51.8120746,-5.1033004
    
       fetch(`${proxy}`)
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



          //Exmoor ==================================================// 51.0405655,-3.5551252
    
       fetch(`${proxy}`)
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


      //south downs ==================================================// 50.9894015,-0.7404263
    
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
       
      //Loch Lomond & The Trossachs ==================================================// 56.243923,-4.6295354
    
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



      //lake district  ==================================================// 54.4608702,-3.0908141
    
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
        
            //North York Moors  ==================================================// 54.38716,-0.8949027
    
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
        
       

        //Peak District  ==================================================// 53.2218284,-1.6752154
    
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

            //the broads  ==================================================// 52.604949,1.6066943
    
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

        //brecon beacons  ==================================================// 51.8814713,-3.4683856
    
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


        //new forest  ==================================================// 50.8575431,-1.63791
    
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
        
            //dartmoor  ==================================================// 50.5718857,-3.9228771

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
        
      
               
    }); //end of window load


