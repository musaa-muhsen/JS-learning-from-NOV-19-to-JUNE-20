window.addEventListener("load", () => {
	const mapResultsOne = document.querySelector(".map-results-1"),
		mainResultsOne = document.querySelector(".main-results"),
		iconContainer1 = document.querySelector(".icon-container1"),
		iconContainer2 = document.querySelector(".icon-container2");

	const proxy2 = "https://cors-anywhere.herokuapp.com/";

	fetch(
		`${proxy2}`
	)
		.then(resp => {
			return resp.json();
		})
		.then(data => {
			const summary = data.currently.summary;
			const icon = data.currently.icon;
			// mapResultsOne.textContent = summary;
			// mainResultsOne.textContent = icon;

			const newIcon = new WeatherIcon();
			newIcon.weatherIconSwitch(icon);
		}); //end of then

	fetch(
		`${proxy2}`
	)
		.then(resp => {
			return resp.json();
		})
		.then(data => {
			const summary = data.currently.summary;
			const icon = data.currently.icon;

			console.log(icon);
			const newIcon2 = new WeatherIcon();

			newIcon2.weatherIconSwitch(icon);
		});

	class WeatherIcon {
		constructor() {
			this.contentDiv = document.getElementById("content");
		}

		weatherIconSwitch(icon) {
			switch (icon) {
				case "clear-day":
					//this.contentDiv.innerHTML =  `<img src="weather-icons/yellow.jpg">`;
					console.log(12);
					break;
				case "clear-night":
					//this.contentDiv.innerHTML = `<img src="weather-icons/black.png">`;
					console.log(12);
					break;
				case "rain":
					const hello = `rain`;
					break;
				default:
					this.contentDiv.innerHTML = `<img src="weather-icons/green.jpg">`;
			} //end of switch
		}
	}
}); //end of window load
