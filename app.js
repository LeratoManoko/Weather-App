let now = new Date();
let h1 = document.querySelector("h1");
let date = now.getDate();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let year = now.getFullYear();

let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
let day = days[now.getDay()];

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];
h1.innerHTML = `${day} ${date}  ${month} ${2023}, ${hours}:${minutes}`;

//search let

function search(event) {
  event.preventDefault();
  let input = document.querySelector("#search-text-input");
  searchCity(input.value);
}

function searchCity(city) {
  let apiKey = "8fa1a8eea35c14b91a8ee4b542dee7b9";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

//search-engine

function displayWeatherCondition(response) {
  let cityElement = document.querySelector("#temporary-city");
  cityElement.innerHTML = response.data.name;
  let temperatureElement = document.querySelector("#degrees");
  temperatureElement.innerHTML = response.data.main.temp;
  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
}

//wind and humidity
function displayWind(event){
  event.preventDefault();
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind-speed");

  humidityElement.innerHTML =`$(response.data.temperature.humidity)%`;
}

function convertToCelsius(event) {
  event.preventDefault();
  let degreesElement = document.querySelector("#degrees");
  degreesElement.innerHTML = 19;
}

let form = document.querySelector("#search-bar");
form.addEventListener("submit", search);

//temperature feature
let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);

function showWind(event) {
  event.preventDefault();
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#wind-speed");

  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
}
