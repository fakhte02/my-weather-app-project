function showTime(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
let
    second=date.getSeconds(); if (second<10){ second=`0${second}`; }
  let weekDays = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]; 
  let day = days[weekDays];

  return `${day} ${hours}:${minutes}:${second}`;
}
let displayDate = document.querySelector("#date");
let currentTime = new Date();
displayDate.innerHTML = showTime(currentTime);
 function turnIntoCelsius (event){
      event.preventDefault();
 }
 function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;
}
function turnIntoFahrenheit(event) {
  event.preventDefault();
  let celsiusTemp = document.querySelector(".temperature").innerHTML;
  let celsiusTemp2 = document.querySelector(".temperature");
  let farenheitTemp =  Math.round((parseInt(celsiusTemp)* 9) / 5 + 32);
  console.log(farenheitTemp);
  celsiusTemp2.innerHTML = farenheitTemp;
}

function turnIntoCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector(".temperature");
  temperatureElement.innerHTML = 19;
}
let searchForm = document.querySelector(".search-form");
searchForm.addEventListener("submit", search);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", turnIntoFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", turnIntoCelsius);

let apiKey = "319e44803780b53e2c950310fec6fdb3";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=tehran&appid=319e44803780b53e2c950310fec6fdb3&units=metric";

function getTemp(response){
  let tempElement = document.querySelector(".temperature");
  let temp = Math.round(response.data.main.temp);
  tempElement.innerHTML = `${temp}`;

}
axios.get(apiUrl).then(getTemp);
function getPosition(position) {
  console.log(position);
}

navigator.geolocation.getCurrentPosition(getPosition);
