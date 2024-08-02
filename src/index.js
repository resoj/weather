import './style.css';

class WeatherApp {
    constructor() {
        this.cityName = null;
        this.apiKey = 'a390cc13883e4bfa92b23027242606';

        this.getForecastButton = document.getElementById('get-forecast-button');
        this.getForecastButton.addEventListener('click', () => this.handleGetForecastButtonClick());

        this.getCityWeatherData('Louisville');
    }

    async getCityWeatherData(cityName) {
        try {
            const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${this.apiKey}&q=${cityName}&days=3`);
            const cityWeatherData = await response.json();
            this.setCityWeatherData(cityWeatherData);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    }

    handleGetForecastButtonClick() {
        const cityInput = document.getElementById('city-input');
        this.cityName = cityInput.value;
        this.getCityWeatherData(this.cityName);
    }

    setCityWeatherData(cityWeatherData) {
        this.setCurrentWeather(cityWeatherData);
        this.setForecastWeather(cityWeatherData);
        this.setAdditionalWeatherData(cityWeatherData);
    }

    setCurrentWeather(cityWeatherData) {
        const countryCityName = document.getElementById('country-city-name-container');
        const localTime = document.getElementById('local-time-container');
        const currentTemperature = document.getElementById('current-temperature-container');
        const weatherCondition = document.getElementById('weather-condition-container');
        const weatherConditionIcon = document.getElementById('weather-condition-icon-img');
        const feelsLike = document.getElementById('feels-like-container');

        countryCityName.textContent = `${cityWeatherData.location.name}, ${cityWeatherData.location.country}`;
        localTime.textContent = cityWeatherData.location.localtime.slice(-5);
        currentTemperature.textContent = `${cityWeatherData.current.temp_f}\u00B0`;
        weatherCondition.textContent = cityWeatherData.current.condition.text;
        weatherConditionIcon.src = this.getIconForCondition(cityWeatherData.current.condition.text);
        feelsLike.textContent = `Feels like ${cityWeatherData.current.feelslike_f}\u00B0`;
    }

    setForecastWeather(cityWeatherData) {
        const forecastContainer = document.getElementById('forecast-container');
        forecastContainer.innerHTML = ''; // Clear previous data

        cityWeatherData.forecast.forecastday.forEach(day => {
            day.hour.forEach(hour => {
                const hourContainer = document.createElement('div');
                hourContainer.classList.add('hour-container');
                forecastContainer.appendChild(hourContainer);

                const timeContainer = document.createElement('div');
                timeContainer.classList.add('time-container');
                timeContainer.textContent = hour.time.substring(10);
                hourContainer.appendChild(timeContainer);

                const rainChanceContainer = document.createElement('div');
                rainChanceContainer.textContent = `${hour.chance_of_rain}%`;
                rainChanceContainer.style.color = 'blue';
                hourContainer.appendChild(rainChanceContainer);

                const iconContainer = document.createElement('img');
                iconContainer.classList.add('icon-container');
                iconContainer.src = this.getIconForCondition(hour.condition.text);
                hourContainer.appendChild(iconContainer);

                const tempContainer = document.createElement('div');
                tempContainer.textContent = `${hour.temp_f}\u00B0`;
                hourContainer.appendChild(tempContainer);
            });
        });

        this.setThreeDayForecast(cityWeatherData);
    }

    setThreeDayForecast(cityWeatherData) {
        const options = { weekday: 'long' };

        function formatDate(dateStr) {
            const date = new Date(dateStr);
            return new Intl.DateTimeFormat('en-US', options).format(date);
        }

        const dayContainers = [
            document.getElementById('day-0'),
            document.getElementById('day-1'),
            document.getElementById('day-2')
        ];

        dayContainers.forEach((dayContainer, index) => {
            dayContainer.innerHTML = ''; // Clear previous data

            const img = document.createElement('img');
            img.src = this.getIconForCondition(cityWeatherData.forecast.forecastday[index].day.condition.text);
            dayContainer.appendChild(img);

            const weekday = document.createElement('div');
            weekday.textContent = index === 0 ? 'Today' : formatDate(cityWeatherData.forecast.forecastday[index].date);
            dayContainer.appendChild(weekday);

            const rainChance = document.createElement('div');
            rainChance.textContent = `${cityWeatherData.forecast.forecastday[index].day.daily_chance_of_rain}%`;
            dayContainer.appendChild(rainChance);

            const highTemp = document.createElement('div');
            highTemp.textContent = `H: ${cityWeatherData.forecast.forecastday[index].day.maxtemp_f}\u00B0`;
            dayContainer.appendChild(highTemp);

            const lowTemp = document.createElement('div');
            lowTemp.textContent = `L: ${cityWeatherData.forecast.forecastday[index].day.mintemp_f}\u00B0`;
            dayContainer.appendChild(lowTemp);
        });
    }

    setAdditionalWeatherData(cityWeatherData) {
        const sunriseContainer = document.getElementById('sunrise');
        const sunsetContainer = document.getElementById('sundown');
        const chanceOfRainContainer = document.getElementById('chance-of-rain');
        const humidityContainer = document.getElementById('humidity');
        const uvContainer = document.getElementById('uv-index');
        const windContainer = document.getElementById('wind');
        const visibilityContainer = document.getElementById('visibility');
        const precipitationContainer = document.getElementById('precipitation');
        const moonPhaseContainer = document.getElementById('moon-phase');

        this.addTextToElement(sunriseContainer, cityWeatherData.forecast.forecastday[0].astro.sunrise);
        this.addTextToElement(sunsetContainer, cityWeatherData.forecast.forecastday[0].astro.sunset);
        this.addTextToElement(chanceOfRainContainer, `${cityWeatherData.forecast.forecastday[0].day.daily_chance_of_rain}%`);
        this.addTextToElement(humidityContainer, `${cityWeatherData.current.humidity}%`);
        this.addTextToElement(uvContainer, cityWeatherData.current.uv);
        this.addTextToElement(windContainer, `${cityWeatherData.current.wind_mph} mph ${cityWeatherData.current.wind_dir}`);
        this.addTextToElement(visibilityContainer, `${cityWeatherData.current.vis_miles} mi`);
        this.addTextToElement(precipitationContainer, `${cityWeatherData.forecast.forecastday[0].day.totalprecip_in} in`);
        this.addTextToElement(moonPhaseContainer, cityWeatherData.forecast.forecastday[0].astro.moon_phase);

        this.addIconToElement(moonPhaseContainer, this.getMoonPhaseIcon(cityWeatherData.forecast.forecastday[0].astro.moon_phase));
    }

    addTextToElement(element, text) {
        const div = document.createElement('div');
        div.textContent = text;
        element.appendChild(div);
    }

    addIconToElement(element, iconSrc) {
        const img = document.createElement('img');
        img.src = iconSrc;
        element.appendChild(img);
    }

    getIconForCondition(conditionText) {
        const iconMap = {
            'Partly cloudy': './images/wi-day-cloudy.svg',
            'Clear': './images/wi-day-sunny.svg',
            'Overcast': './images/wi-cloudy.svg',
            'Patchy rain possible': './images/wi-rain-mix.svg',
            'Moderate rain': './images/wi-rain.svg',
            'Sunny': './images/wi-day-sunny.svg'
            // Add more mappings as needed
        };
        return iconMap[conditionText] || './images/wi-na.svg';
    }

    getMoonPhaseIcon(moonPhaseText) {
        const moonPhaseMap = {
            'New Moon': './images/wi-moon-new.svg',
            'Waxing Crescent': './images/wi-moon-waxing-crescent-3.svg',
            'First Quarter': './images/wi-moon-first-quarter.svg',
            'Waxing Gibbous': './images/wi-moon-waxing-gibbous-3.svg',
            'Full Moon': './images/wi-moon-full.svg',
            'Waning Gibbous': './images/wi-moon-waning-gibbous-3.svg',
            'Last Quarter': './images/wi-moon-third-quarter.svg',
            'Waning Crescent': './images/wi-moon-waning-crescent-3.svg'
            // Add more mappings as needed
        };
        return moonPhaseMap[moonPhaseText] || './images/wi-na.svg';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new WeatherApp();
});
