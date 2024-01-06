//openWeather API
//API_URL = https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const API_KEY = "0aefcd7096d22cadd1b9239f55f94fd3";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const inputText = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

checkWeather = async (city) => {
  const response = await fetch(API_URL + city + `&appid=${API_KEY}`);

  if (response.status === 404) {
    document.querySelector(".weather").style.display = "none";
    document.querySelector(".error").style.display = "block";
  } else {
    const data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = parseInt(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main === "Clouds" || data.weather[0].main === "Haze") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main === "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main === "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main === "Mist") {
      weatherIcon.src = "images/mist.png";
    } else if (data.weather[0].main === "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main === "snow") {
      weatherIcon.src = "images/snow.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
};

searchBtn.addEventListener("click", () => {
  checkWeather(inputText.value);
});
