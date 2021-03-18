 class WeatherIcon {
       // static weatherIconStatic(icon) {

        weatherIconMeth(icon) {
                switch (icon) {
                    case 'clear-day':
                        const clearday =  `<img src="weather-icons/yellow.jpg">`;
                      break;
                    case 'clear-night':
                        const clearnight = `<img src="weather-icons/black.png">`;
                      break;
                    case 'rain':
                        const rain = `<img src="weather-icons/red.png">`;
                      break;
                    case 'snow':
                        const snow = `<img src="weather-icons/blue.png">`;
                      break;
                      case 'sleet':
                       const  sleet = `<img src="weather-icons/green.jpg">`;
                      break;
                    case 'fog':
                        const fog = `<img src="weather-icons/yellow.png">`;
                      break;
                    case 'cloudy':
                        const cloudy = `<img src="weather-icons/black.png">`;
                      break;
                    case 'partly-cloudy-day':
                        const partlycloudyday = `<img src="weather-icons/red.png">`;
                      break;
                    case 'partly-cloudy-night':
                        const partlycloudynight = `<img src="weather-icons/black.png">`;
                      break;
                    case 'hail':
                        const hail = `<img src="weather-icons/black.png">`;
                      break;
                    case 'thunderstorm':
                        const thunderstorm = `<img src="weather-icons/black.png">`;
                      break;
                    case 'tornado':
                        const tornado = `<img src="weather-icons/black.png">`;
                      break;
                    default:
                        console.log('NOOOOO!!');
                  } //end of switch
            }
            

        }


        //else if 

          // if (icon === 'wind') {
        //     console.log('yo');
        //   } else if (icon === 'clear-day') {
        //     console.log('no');
        //   } else {
        //     console.log('no');
        //   }


        class WeatherIcon {

          weatherIconSwitch(icon) {
           switch (icon) {
               case 'partly-cloudy-night':
                 const partlycloudynight = `<img src="weather-icons/black.png">`;
                 break;
               case 'clear-night':
                   iconContainer1.innerHTML = `<img src="weather-icons/black.png">`;
                 break;
               case 'rain':
                   iconContainer1.innerHTML = `<img src="weather-icons/red.png">`;
                 break;
               default:
                   console.log('NOOOOO!!');
             } //end of switch
       
           }
  
         }




             // mapResultsOne.textContent = summary;
        // mainResultsOne.textContent = icon;
       console.log(icon)
       const newIcon = new WeatherIcon();
       newIcon.weatherIconSwitch(icon);
       console.log(newIcon);
       //iconContainer1.innerHTML = newIcon


                        //switch statement ===========================
