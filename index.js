const cityname = document.querySelector("#city-input");
const searchbtn = document.querySelector("#city-btn");
const form = document.getElementById("form-input");
const myCity = document.getElementById("city");
const div = document.querySelector(".photo");
const image = document.getElementById("weatherImage");
const weather = document.getElementById("weatherMain");
const temp = document.querySelector(".temp");
const dates = document.querySelector(".todayDates");
const times = document.getElementById("todayTime");
let date = new Date();

// Function work when user input the city name
div.style.display = "none";
form.addEventListener("submit", function (e) {
  // preventDefault() to stop page reload
  e.preventDefault();

  // Updating City name
  let city = cityname.value;
  const myWeatherContainer = document.querySelector(".weatherContainer");
  const apiID = `931f131dde3f4ae2fcbc3289fc646471`;

  // API url
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiID}`;

  // Fetching the weather from api
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Your City is Not Found");
      }

      return response.json();
    })
    .then((data) => {
      const weatherMain = data["weather"][0]["main"];
      weather.innerHTML = weatherMain;
      const tempValue = Math.round(data["main"]["temp"]);

      // updating the DOM
      myCity.innerHTML = city;
      div.style.display = "block";
      temp.innerHTML = `${tempValue} ℃`;

      // this is Change Images
      if (weatherMain == "Clear") {
        image.src = `Assets/clear.png`;
      }
      if (weatherMain == "Sunny") {
        image.src = `Assets/clear.png`;
      }
      if (weatherMain == "Windy") {
        image.src = `https://cdn3.iconfinder.com/data/icons/weather-and-meteorology-4/85/weather_wind_windy-128.png`;
      }
      if (weatherMain == "Clouds") {
        image.src = `Assets/cloud.png`;
      }
      if (weatherMain == "Rain") {
        image.src = `Assets/rain.png`;
      }
      if (weatherMain == "Drizzle") {
        image.src = `https://cdn3.iconfinder.com/data/icons/weather-and-meteorology-4/85/weather_snow_snowy_cloud-128.png`;
      }
      if (weatherMain == "Haze") {
        image.src = `https://cdn4.iconfinder.com/data/icons/weather-conditions/512/sun_fog-64.png`;
      }
      if (weatherMain == "Mist") {
        image.src = `Assets/mist.png`;
      }
    })

    // is the error will raise then it's important
    .catch(function (error) {
      // console.log(error+"");
      myCity.innerHTML = "City is not Found";
      weatherMain.innerHTML = " ";
      temp.innerHTML = " ";
      image.src = `Assets/404.png`;
    });

  // Updating dates
  const currentMonth = date.getMonth();
  switch (currentMonth) {
    case 0:
      dates.innerHTML = `${date.getDate()}, Jan`;
      break;
    case 1:
      dates.innerHTML = `${date.getDate()}, Feb`;
      break;
    case 2:
      dates.innerHTML = `${date.getDate()}, Mar`;
      break;
    case 3:
      dates.innerHTML = `${date.getDate()}, Apr`;
      break;
    case 4:
      dates.innerHTML = `${date.getDate()}, May`;
      break;
    case 5:
      dates.innerHTML = `${date.getDate()}, Jun`;
      break;
    case 6:
      dates.innerHTML = `${date.getDate()}, Jul`;
      break;
    case 7:
      dates.innerHTML = `${date.getDate()}, Aug`;
      break;
    case 8:
      dates.innerHTML = `${date.getDate()}, Sept.`;
      break;
    case 9:
      dates.innerHTML = `${date.getDate()}, Oct.`;
      break;
    case 10:
      dates.innerHTML = `${date.getDate()}, Nov`;
      break;
    case 11:
      dates.innerHTML = `${date.getDate()}, Dec`;
      break;
  }

  // Updating times
  function leftInterval() {
    const left = document.getElementById("todayTime");
    let leftDate = new Date();
    let hours = leftDate.getHours();
    let minutes = leftDate.getMinutes();
    let seconds = leftDate.getSeconds();

    if (hours == 0) {
      hours = 12;
    }

    if (hours > 12) {
      hours = hours - 12;
    }
    left.innerHTML = `${hours}h: ${minutes}m: ${seconds}s`;
  }
  setInterval(leftInterval, 1000);
});
