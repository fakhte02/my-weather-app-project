function showTime(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let second = date.getSeconds();
  if (second < 10) {
    second = `0${second}`;
  }
  let weekDays = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[weekDays];

  return `${day} ${hours}:${minutes}:${second}`;
}
let displayDate = document.querySelector("#date");
let currentTime = new Date();
displayDate.innerHTML = showTime(currentTime);

function search(event) {

  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  let temperatureElement = document.querySelector(".temperature");
  let weatherIcon = document.querySelector("#weather-icon");
  let weatherName = document.querySelector("#weather-name");


  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=319e44803780b53e2c950310fec6fdb3&units=metric`
    )
    .then(function (response) {
      // handle success
      // console.log(response.data);

  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=319e44803780b53e2c950310fec6fdb3&units=metric`)
  .then(function (response) {
    // handle success
    // console.log(response.data);
    
    celsiusLink.innerHTML = "";
    cityElement.innerHTML = cityInput.value;
    temperatureElement.innerHTML = Math.round(response.data.main.temp)
    weatherName.innerHTML = response.data.weather[0].main
  
  })
  .catch(function (error) {
    if (error.response) {
      cityElement.innerHTML = error.response.data.message;

    } else if (error.request) {

      console.log(error.request);
    } else {

      console.log('Error', error.message);
    }
    console.log(error.config);
  })
 

      celsiusLink.innerHTML = "";
      cityElement.innerHTML = cityInput.value;
      temperatureElement.innerHTML = Math.round(response.data.main.temp);
      weatherName.innerHTML = response.data.weather[0].main;
    })
    .catch(function (error) {
      if (error.response) {
        cityElement.innerHTML = error.response.data.message;
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
}
function turnIntoFahrenheit(event) {

fahrenheitLink.innerHTML=""
  let celsius = document.querySelector(".temperature").innerHTML;
  let celsiusTemp = document.querySelector(".temperature");
  let farenheitTemp = Math.round((celsius * 9) / 5 + 32);
  celsiusTemp.innerHTML = `${farenheitTemp}`;
  celsiusLink.innerHTML = "°C";
}

function turnIntoCelsius(event) {
  celsiusLink.innerHTML = "";

  let temperatureElement = document.querySelector(".temperature").innerHTML;
  let temperatureElement2 = document.querySelector(".temperature");
  let celiusTemp = Math.round(((temperatureElement - 32) * 5) / 9);
  temperatureElement2.innerHTML = `${celiusTemp}`;
  fahrenheitLink.innerHTML = "°F";
}
let searchForm = document.querySelector(".search-form");
searchForm.addEventListener("submit", search);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", turnIntoFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", turnIntoCelsius);

let apiKey = "319e44803780b53e2c950310fec6fdb3";

//then(getTemp);
function getPosition(position) {
  function roundToTwo(num) {
    return +(Math.round(num + "e+2") + "e-2");
  }
  let lat = roundToTwo(position.coords.latitude);
  let lon = roundToTwo(position.coords.longitude);

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&limit=5&appid=319e44803780b53e2c950310fec6fdb3&units=metric`;
  console.log(apiUrl);
  console.log(position);
  function getTemp(response) {
  celsiusLink.innerHTML = "";


    let cityElement = document.querySelector("#city");
    let weatherName = document.querySelector("#weather-name");
    let tempElement = document.querySelector(".temperature");
    let temp = Math.round(response.data.main.temp);
    tempElement.innerHTML = `${temp}`;
    cityElement.innerHTML = response.data.name;
    weatherName.innerHTML = response.data.weather[0].main;
  }
  axios.get(apiUrl).then(getTemp);
}

navigator.geolocation.getCurrentPosition(getPosition);
