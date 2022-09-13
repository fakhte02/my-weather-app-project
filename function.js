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
function turnIntoCelsius(event) {
  event.preventDefault();
}

function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  let temperatureElement = document.querySelector(".temperature");
  let weatherIcon = document.querySelector("#weather-icon");
  let weatherName = document.querySelector("#weather-name");

  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=319e44803780b53e2c950310fec6fdb3&units=metric`)
  .then(function (response) {
    // handle success
    // console.log(response.data);
    cityElement.innerHTML = cityInput.value;
    temperatureElement.innerHTML = Math.round(response.data.main.temp)
    weatherName.innerHTML = response.data.weather[0].main
    // weatherIcon.classList.add(`fas fa-cloud-${weatherName.innerHTML}`)
  
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
  .then(function () {

  });

}
function turnIntoFahrenheit(event) {
  event.preventDefault();
  let celsius = document.querySelector(".temperature").innerHTML;
  let celsiusTemp = document.querySelector(".temperature");
  let farenheitTemp = Math.round((celsius * 9) / 5 + 32);
  celsiusTemp.innerHTML = `${farenheitTemp}`;
}

function turnIntoCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector(".temperature").innerHTML;
  let temperatureElement2 = document.querySelector(".temperature");
  let celiusTemp = Math.round((temperatureElement -32) * 5/9 );
  temperatureElement2.innerHTML =`${celiusTemp}` ;
}
let searchForm = document.querySelector(".search-form");
searchForm.addEventListener("submit", search);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", turnIntoFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", turnIntoCelsius);

let apiKey = "319e44803780b53e2c950310fec6fdb3";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=tehran&appid=319e44803780b53e2c950310fec6fdb3&units=metric";

function getTemp(response) {
  let tempElement = document.querySelector(".temperature");
  let temp = Math.round(response.data.main.temp);
  tempElement.innerHTML = `${temp}`;
}

//then(getTemp);
function getPosition(position) {
  console.log(position);
}

navigator.geolocation.getCurrentPosition(getPosition);
