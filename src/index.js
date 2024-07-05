import './style.css'

async function getCityWeatherData(cityName) {
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=a390cc13883e4bfa92b23027242606&q=${cityName}&days=0`);
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

    cityWeatherData.forecast.forecastday.forEach(day => {
        day.hour.forEach(hour => {
            const will_it_rain = hour.will_it_rain;
            const icon = hour.condition.icon;
            const conditionText = hour.condition.text;
            const temp_f = hour.temp_f;
            const time = hour.time;
            console.log(will_it_rain)
            console.log(icon);
            console.log(conditionText);
            console.log(temp_f);
            console.log(time);
        })
    })
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
    currentTemperature.textContent = `${cityWeatherData.current.temp_f}\u00B0F`;
    localTime.textContent = cityWeatherData.location.localtime;
    weatherCondition.textContent = cityWeatherData.current.condition.text;
    weatherConditionIcon.src = cityWeatherData.current.condition.icon;
    windDirectionMPH.textContent = `with wind speeds at ${cityWeatherData.current.wind_mph} MPH in the direction: ${cityWeatherData.current.wind_dir}`;
    feelsLike.textContent = `Feels like ${cityWeatherData.current.feelslike_f}\u00B0F`;

    const forecastContainer = document.getElementById('forecast-container');

    cityWeatherData.forecast.forecastday.forEach(day => {
        day.hour.forEach(hour => {
            const rainChance = hour.chance_of_rain;
            const icon = hour.condition.icon;
            const conditionText = hour.condition.text;
            const temp_f = hour.temp_f;
            const time = hour.time;

            const hourContainer = document.createElement('div');
            hourContainer.classList.add('hour-container');
            forecastContainer.appendChild(hourContainer);
            
            const timeContainer = document.createElement('div');
            timeContainer.classList.add('time-container');
            timeContainer.textContent = time.substring(10,13);
            hourContainer.appendChild(timeContainer);

            const rainChanceContainer = document.createElement('div');
            rainChanceContainer.textContent = `${rainChance}%`;
            hourContainer.appendChild(rainChanceContainer);

            const iconContainer = document.createElement('img');
            iconContainer.src = icon;
            hourContainer.appendChild(iconContainer);

            const tempContainer = document.createElement('div');
            tempContainer.textContent = `${temp_f}\u00B0F`;
            hourContainer.appendChild(tempContainer);

            console.log(time);
            console.log(rainChance)
            console.log(icon);
            console.log(conditionText);
            console.log(temp_f);
        })
    })
}

let cityName = null
const getForecastButton = document.getElementById('get-forecast-button');

// getForecastButton.addEventListener('click', () => {
//     const cityInput = document.getElementById('city-input');
//     cityName = cityInput.value
//     getCityWeatherData(cityName);
// });

getCityWeatherData('Louisville');