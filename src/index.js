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
    weatherConditionIcon.src = cityWeatherData.current.condition.icon;
    windDirectionMPH.textContent = `with wind speeds at ${cityWeatherData.current.wind_mph} MPH in the direction: ${cityWeatherData.current.wind_dir}`;
    feelsLike.textContent = `Feels like ${cityWeatherData.current.feelslike_f}\u00B0F`;

    const forecastContainer = document.getElementById('forecast-container');

    const sunrise = document.getElementById('sunrise');
    const sunset = document.getElementById('sundown');
    const chanceOfRain = document.getElementById('chance-of-rain');
    const humidity = document.getElementById('humidity');
    const uv = document.getElementById('uv-index');
    const wind = document.getElementById('wind');
    const visibility = document.getElementById('visibility');
    const precipitation = document.getElementById('precipitation');
    const moonPhase = document.getElementById('moon-phase');


    sunrise.textContent = cityWeatherData.forecast.forecastday[0].astro.sunrise;
    sunset.textContent = cityWeatherData.forecast.forecastday[0].astro.sunset;
    chanceOfRain.textContent = `${cityWeatherData.forecast.forecastday[0].hour[0].chance_of_rain}%`;
    humidity.textContent = cityWeatherData.forecast.forecastday[0].hour[0].humidity;
    uv.textContent = cityWeatherData.current.uv;
    wind.textContent = `${cityWeatherData.current.wind_dir} ${cityWeatherData.current.wind_mph}`;
    visibility.textContent = cityWeatherData.forecast.forecastday[0].day.avgvis_miles;
    precipitation.textContent = cityWeatherData.forecast.forecastday[0].day.totalprecip_in;
    moonPhase.textContent = cityWeatherData.forecast.forecastday[0].astro.moon_phase;

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

    const options = { weekday: 'long', month: 'long', day: 'numeric' };

    function formatDate(dateStr) {
        const date = new Date(dateStr);
        return new Intl.DateTimeFormat('en-US', options).format(date);
    }

    const dayZero = document.getElementById('day-0');
    const dayOne = document.getElementById('day-1');
    const dayTwo = document.getElementById('day-2');

    const imgZero = document.createElement('img');
    // imgZero.src = 
    const weekdayZero = document.createElement('div');
    weekdayZero.textContent = 'Today';
    dayZero.appendChild(weekdayZero);
    const dayZeroRainChance = document.createElement('div');
    dayZeroRainChance.textContent = `${cityWeatherData.forecast.forecastday[0].day.daily_chance_of_rain}%`;
    dayZero.appendChild(dayZeroRainChance);
    const dayZeroHigh = document.createElement('div');
    dayZeroHigh.textContent = cityWeatherData.forecast.forecastday[0].day.maxtemp_f;
    dayZero.appendChild(dayZeroHigh);
    const dayZeroLow = document.createElement('div');
    dayZeroLow.textContent = cityWeatherData.forecast.forecastday[0].day.mintemp_f;
    dayZero.appendChild(dayZeroLow);
    
    const imgOne = document.createElement('img');
    // imgOne.src = 
    const weekdayOne = document.createElement('div');
    weekdayOne.textContent = `${formatDate(cityWeatherData.forecast.forecastday[1].date)}`;
    dayOne.appendChild(weekdayOne);
    const dayOneRainChance = document.createElement('div');
    dayOneRainChance.textContent = `${cityWeatherData.forecast.forecastday[1].day.daily_chance_of_rain}%`;
    dayOne.appendChild(dayOneRainChance);
    const dayOneHigh = document.createElement('div');
    dayOneHigh.textContent = cityWeatherData.forecast.forecastday[1].day.maxtemp_f;
    dayOne.appendChild(dayOneHigh);
    const dayOneLow = document.createElement('div');
    dayOneLow.textContent = cityWeatherData.forecast.forecastday[1].day.mintemp_f;
    dayOne.appendChild(dayOneLow);

    const imgTwo = document.createElement('img');
    // imgTwo.src = 
    const weekdayTwo = document.createElement('div');
    weekdayTwo.textContent = formatDate(cityWeatherData.forecast.forecastday[2].date);
    dayTwo.appendChild(weekdayTwo);
    const dayTwoRainChance = document.createElement('div');
    dayTwoRainChance.textContent = `${cityWeatherData.forecast.forecastday[2].day.daily_chance_of_rain}%`;
    dayTwo.appendChild(dayTwoRainChance);
    const dayTwoHigh = document.createElement('div');
    dayTwoHigh.textContent = cityWeatherData.forecast.forecastday[2].day.maxtemp_f;
    dayTwo.appendChild(dayTwoHigh);
    const dayTwoLow = document.createElement('div');
    dayTwoLow.textContent = cityWeatherData.forecast.forecastday[2].day.mintemp_f;
    dayTwo.appendChild(dayTwoLow);

    // dayOne.textContent = formatDate(cityWeatherData.forecast.forecastday[1].date)
    // dayTwo.textContent = formatDate(cityWeatherData.forecast.forecastday[2].date)
}

let cityName = null
const getForecastButton = document.getElementById('get-forecast-button');

// getForecastButton.addEventListener('click', () => {
//     const cityInput = document.getElementById('city-input');
//     cityName = cityInput.value
//     getCityWeatherData(cityName);
// });

getCityWeatherData('Louisville');