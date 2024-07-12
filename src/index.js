import './style.css'

async function getCityWeatherData(cityName) {
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=a390cc13883e4bfa92b23027242606&q=${cityName}&days=3`);
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
    weatherConditionIcon.src = exchangeIconImage(weatherCondition.textContent); //cityWeatherData.current.condition.icon;
    windDirectionMPH.textContent = `with wind speeds at ${cityWeatherData.current.wind_mph} MPH in the direction: ${cityWeatherData.current.wind_dir}`;
    feelsLike.textContent = `Feels like ${cityWeatherData.current.feelslike_f}\u00B0F`;

    const forecastContainer = document.getElementById('forecast-container');

    const sunriseContainer = document.getElementById('sunrise');
    const sunsetContainer = document.getElementById('sundown');
    const chanceOfRainContainer = document.getElementById('chance-of-rain');
    const humidityContainer = document.getElementById('humidity');
    const uvContainer = document.getElementById('uv-index');
    const windContainer = document.getElementById('wind');
    const visibilityContainer = document.getElementById('visibility');
    const precipitationContainer = document.getElementById('precipitation');
    const moonPhaseContainer = document.getElementById('moon-phase');

    const sunriseText = document.createElement('p');
    sunriseText.textContent = cityWeatherData.forecast.forecastday[0].astro.sunrise;
    sunriseContainer.appendChild(sunriseText);

    const sunsetText = document.createElement('p');
    sunsetText.textContent = cityWeatherData.forecast.forecastday[0].astro.sunset;
    sunsetContainer.appendChild(sunsetText);

    const chanceOfRainText = document.createElement('p');
    chanceOfRainText.textContent = `${cityWeatherData.forecast.forecastday[0].hour[0].chance_of_rain}%`; 
    chanceOfRainContainer.appendChild(chanceOfRainText);

    const humidityText = document.createElement('p');
    humidityText.textContent = cityWeatherData.forecast.forecastday[0].hour[0].humidity;
    humidityContainer.appendChild(humidityText);

    const uvText = document.createElement('p');
    uvText.textContent = cityWeatherData.current.uv;
    uvContainer.appendChild(uvText);

    const windText = document.createElement('p');
    windText.textContent = `${cityWeatherData.current.wind_dir} ${cityWeatherData.current.wind_mph}`;
    windContainer.appendChild(windText);

    const visibilityText = document.createElement('p');
    visibilityText.textContent = cityWeatherData.forecast.forecastday[0].day.avgvis_miles;
    visibilityContainer.appendChild(visibilityText);

    const precipitationText = document.createElement('p');
    precipitationText.textContent = cityWeatherData.forecast.forecastday[0].day.totalprecip_in;
    precipitationContainer.appendChild(precipitationText);

    const moonPhaseText = document.createElement('p');
    moonPhaseText.textContent = cityWeatherData.forecast.forecastday[0].astro.moon_phase;
    moonPhaseContainer.appendChild(moonPhaseText);

    cityWeatherData.forecast.forecastday.forEach(day => {
        day.hour.forEach(hour => {
            const rainChance = hour.chance_of_rain;
            const icon = hour.condition.icon;
            const iconText = hour.condition.text;
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
            iconContainer.src = exchangeIconImage(iconText);
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

    const options = { weekday: 'long'};

    function formatDate(dateStr) {
        const date = new Date(dateStr);
        return new Intl.DateTimeFormat('en-US', options).format(date);
    }

    const dayZero = document.getElementById('day-0');
    const dayOne = document.getElementById('day-1');
    const dayTwo = document.getElementById('day-2');

    const imgZero = document.createElement('img');
    imgZero.src = exchangeIconImage(cityWeatherData.current.condition.text);
    dayZero.appendChild(imgZero);
    const weekdayZero = document.createElement('div');
    weekdayZero.textContent = 'Today';
    dayZero.appendChild(weekdayZero);
    const dayZeroRainChance = document.createElement('div');
    dayZeroRainChance.textContent = `${cityWeatherData.forecast.forecastday[0].day.daily_chance_of_rain}%`;
    dayZero.appendChild(dayZeroRainChance);
    const dayZeroHigh = document.createElement('div');
    dayZeroHigh.textContent = `H: ${cityWeatherData.forecast.forecastday[0].day.maxtemp_f}\u00B0F`;
    dayZero.appendChild(dayZeroHigh);
    const dayZeroLow = document.createElement('div');
    dayZeroLow.textContent = `L: ${cityWeatherData.forecast.forecastday[0].day.mintemp_f}\u00B0F`;
    dayZero.appendChild(dayZeroLow);
    
    const imgOne = document.createElement('img');
    imgOne.src = exchangeIconImage(cityWeatherData.forecast.forecastday[1].day.condition.text);
    dayOne.appendChild(imgOne);
    const weekdayOne = document.createElement('div');
    weekdayOne.textContent = `${formatDate(cityWeatherData.forecast.forecastday[1].date)}`;
    dayOne.appendChild(weekdayOne);
    const dayOneRainChance = document.createElement('div');
    dayOneRainChance.textContent = `${cityWeatherData.forecast.forecastday[1].day.daily_chance_of_rain}%`;
    dayOne.appendChild(dayOneRainChance);
    const dayOneHigh = document.createElement('div');
    dayOneHigh.textContent = `H: ${cityWeatherData.forecast.forecastday[1].day.maxtemp_f}\u00B0F`;
    dayOne.appendChild(dayOneHigh);
    const dayOneLow = document.createElement('div');
    dayOneLow.textContent = `L:${cityWeatherData.forecast.forecastday[1].day.mintemp_f}\u00B0F`;
    dayOne.appendChild(dayOneLow);

    const imgTwo = document.createElement('img');
    imgTwo.src = exchangeIconImage(cityWeatherData.forecast.forecastday[2].day.condition.text);
    dayTwo.appendChild(imgTwo);
    const weekdayTwo = document.createElement('div');
    weekdayTwo.textContent = formatDate(cityWeatherData.forecast.forecastday[2].date);
    dayTwo.appendChild(weekdayTwo);
    const dayTwoRainChance = document.createElement('div');
    dayTwoRainChance.textContent = `${cityWeatherData.forecast.forecastday[2].day.daily_chance_of_rain}%`;
    dayTwo.appendChild(dayTwoRainChance);
    const dayTwoHigh = document.createElement('div');
    dayTwoHigh.textContent = `H: ${cityWeatherData.forecast.forecastday[2].day.maxtemp_f}\u00B0F`;
    dayTwo.appendChild(dayTwoHigh);
    const dayTwoLow = document.createElement('div');
    dayTwoLow.textContent = `L: ${cityWeatherData.forecast.forecastday[2].day.mintemp_f}\u00B0F`;
    dayTwo.appendChild(dayTwoLow);
}

function exchangeIconImage(iconConditionText) {
    switch(iconConditionText) {
        case "Sunny":
            return "./images/wi-day-sunny.svg";
        case "Clear":
            return "./images/wi-day-sunny.svg";
        case "Clear ":
            return "./images/wi-day-sunny.svg";
        case "Partly cloudy":
            return "./images/wi-cloudy.svg"
        case "Partly Cloudy ":
            return "./images/wi-cloudy.svg"
        case "Cloudy":
            return "./images/wi-cloudy.svg"
        
        case "Overcast":

        case "Mist":
            return "./images/wi-fog.svg"
        case "Patchy rain possible":
            return "./images/wi-day-rain.svg"
        case "Patchy snow possible":
            return "./images/wi-day-snow-wind.svg"
        case "Patchy sleet possible":
            return "./images/wi-day-rain-mix.svg"
        case "Patchy freezing drizzle possible":
            return "./images/wi-day-rain-mix.svg"
        case "Thundery outbreaks possible":
            return "./images/wi-day-lightning.svg"
        case "Blowing snow":
            return "./images/wi-day-snow.svg"
        case "Blizzard": 
            return "./images/wi-tornado.svg"
        case "Fog":
            return "./images/wi-fog.svg"
        case "Freezing fog":
            return "./images/wi-fog.svg"
        case "Patchy light drizzle":
            return "./images/wi-day-rain.svg"
        case "Light drizzle":
            return "./images/wi-day-rain.svg"
        case "Freezing drizzle":
            return "./images/wi-day-rain-mix.svg"
        case "Heavy freezing drizzle":
            return "./images/wi-day-rain-mix.svg"
        case "Patchy light rain":
            return "./images/wi-day-rain.svg"
        case "Light rain":
            return "./images/wi-day-rain.svg"
        case "Moderate rain at times":
            return "./images/wi-day-rain.svg"
        case "Moderate rain":
            return "./images/wi-day-rain.svg"
        case "Heavy rain at times":
            return "./images/wi-day-rain.svg"
        case "Heavy rain":
            return "./images/wi-day-rain.svg"
        case "Light freezing rain":
            return "./images/wi-day-rain-mix.svg"
        case "Moderate or heavy freezing rain":
            return "./images/wi-day-rain-mix.svg"
        case "Light sleet":
            return "./images/wi-day-rain-mix.svg"
        case "Moderate or heavy sleet":
            return "./images/wi-day-rain-mix.svg"
        case "Patchy light snow":
            return "./images/wi-day-snow.svg"
        case "Light snow":
            return "./images/wi-day-snow.svg"
        case "Patchy moderate snow":
            return "./images/wi-day-snow.svg"
        case "Moderate snow":
            return "./images/wi-day-snow.svg"
        case "Patchy heavy snow":
            return "./images/wi-day-snow.svg"
        case "Heavy snow":
            return "./images/wi-day-snow.svg"
        case "Ice pellets":

        case "Light rain shower":

        case "Moderate or heavy rain shower":
            return "./images/wi-day-rain.svg"
        case "Torrential rain shower":
            return "./images/wi-day-rain.svg"
        case "Light sleet showers":
            return "./images/wi-day-rain-mix.svg"
        case "Moderate or heavy sleet showers":
            return "./images/wi-day-rain-mix.svg"
        case "Light snow showers":
            return "./images/wi-day-snow.svg"
        case "Moderate or heavy snow showers":
            return "./images/wi-day-snow.svg"
        case "Light showers of ice pellets":

        case "Patchy light rain with thunder":
            
        case "Moderate or heavy rain with thunder":

        case "Patchy light snow with thunder":

        case "Moderate or heavy snow with thunder":


    }
}

let cityName = null
const getForecastButton = document.getElementById('get-forecast-button');

// getForecastButton.addEventListener('click', () => {
//     const cityInput = document.getElementById('city-input');
//     cityName = cityInput.value
//     getCityWeatherData(cityName);
// });

getCityWeatherData('Louisville');