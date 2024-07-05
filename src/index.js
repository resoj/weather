import './style.css'

async function getCityWeatherData(cityName) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=a390cc13883e4bfa92b23027242606&q=${cityName}`);
    const cityWeatherData = await response.json();
    setCityWeatherData(cityWeatherData);
    console.log(cityWeatherData.location.country);
    console.log(cityWeatherData.location.name);
    console.log(cityWeatherData.location.localtime);
    console.log(cityWeatherData.current.temp_f);
    console.log(cityWeatherData.current.condition.text);
    console.log(cityWeatherData.current.condition.icon); //use in img.src div
    console.log(cityWeatherData.current.wind_dir);
    console.log(cityWeatherData.current.wind_mph);
    console.log(cityWeatherData.current.feelslike_f);
}

function setCityWeatherData(cityWeatherData) {
    const countryCityName = document.getElementById('country-city-name-container');
    const localTime = document.getElementById('local-time-container');
    const currentTemperature = document.getElementById('current-temperature-container');
    const weatherCondition = document.getElementById('weather-condition-container');
    const weatherConditionIcon = document.getElementById('weather-condition-icon-img');
    const windDirectionMPH = document.getElementById('wind-direction-mph-container');
    const windMPH = document.getElementById('wind-mph-container');
    const feelsLike = document.getElementById('feels-like-container');

    countryCityName.textContent = `${cityWeatherData.location.name}, ${cityWeatherData.location.country}`;
    currentTemperature.textContent = `${cityWeatherData.current.temp_f} F\u00B0`;
    localTime.textContent = cityWeatherData.location.localtime;
    weatherCondition.textContent = cityWeatherData.current.condition.text;
    weatherConditionIcon.src = cityWeatherData.current.condition.icon;
    windDirectionMPH.textContent = `with wind speeds at ${cityWeatherData.current.wind_mph} MPH in the direction: ${cityWeatherData.current.wind_dir}`;
    feelsLike.textContent = `Feels like ${cityWeatherData.current.feelslike_f} F\u00B0`;
}

let cityName = null
const getForecastButton = document.getElementById('get-forecast-button');

// getForecastButton.addEventListener('click', () => {
//     const cityInput = document.getElementById('city-input');
//     cityName = cityInput.value
//     getCityWeatherData(cityName);
// });

getCityWeatherData('Louisville');