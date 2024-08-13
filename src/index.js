import './style.css';

class WeatherApp {
    constructor() {
        this.cityName = null;
        this.celsius = false;
        this.apiKey = 'a390cc13883e4bfa92b23027242606';
        this.cityWeatherData = null;

        this.getForecastButton = document.getElementById('get-forecast-button');
        this.getForecastButton.addEventListener('click', () => this.handleGetForecastButtonClick());

        this.cityInput = document.getElementById('city-input');
        this.cityInput.addEventListener('keyup', (e) => this.handleCityInputEnter(e));

        this.getTemperatureTypeChangeButton = document.getElementById('temperature-type-change-button');
        this.getTemperatureTypeChangeButton.addEventListener('click', () => {
            this.celsius = !this.celsius
            this.updateTemperatureDisplay();
        });

        this.getCityWeatherData('Louisville');
    }

    async getCityWeatherData(cityName) {
        try {
            const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${this.apiKey}&q=${cityName}&days=7`);
            const cityWeatherData = await response.json();
            this.cityWeatherData = cityWeatherData;
            this.setCityWeatherData(cityWeatherData);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    }

    handleGetForecastButtonClick() {
        const cityInput = document.getElementById('city-input');
        this.cityName = cityInput.value.trim(); // Trim whitespace
        if (this.cityName) {
            this.getCityWeatherData(this.cityName);
        }
    }

    handleCityInputEnter(e) {
        if(e.key === "Enter") {
            const cityName = this.cityInput.value;
            this.handleGetForecastButtonClick();
        }
    }

    setCityWeatherData(cityWeatherData) {
        this.setCurrentWeather(cityWeatherData);
        this.setForecastWeather(cityWeatherData);
        this.setAdditionalWeatherData(cityWeatherData);
    }

    setCurrentWeather(cityWeatherData) {
        const countryCityName = document.getElementById('country-city-name-container');
        const currentTemperature = document.getElementById('current-temperature-container');
        const weatherCondition = document.getElementById('weather-condition-container');
        const weatherConditionIcon = document.getElementById('weather-condition-icon-img');
        const feelsLike = document.getElementById('feels-like-container');
        const dailySummary = document.getElementById('daily-summary');

        countryCityName.textContent = `${cityWeatherData.location.name}`;
        
        weatherCondition.textContent = cityWeatherData.current.condition.text;
        weatherConditionIcon.src = this.getIconForCondition(cityWeatherData.current.condition.text);
        if(this.celsius) {
            currentTemperature.textContent = `${Math.round(cityWeatherData.current.temp_c)}\u00B0`;
            feelsLike.textContent = `Feels like ${Math.round(cityWeatherData.current.feelslike_c)}\u00B0`;
            dailySummary.textContent = `${(cityWeatherData.current.condition.text)}; with a low of 
            ${Math.round(cityWeatherData.forecast.forecastday[0].day.mintemp_c)}\u00B0 and a high of ${Math.round(cityWeatherData.forecast.forecastday[0].day.maxtemp_c)}\u00B0.There is a ${cityWeatherData.forecast.forecastday[0].day.daily_chance_of_rain}% chance of rain today.`;
        }
        else {
            currentTemperature.textContent = `${Math.round(cityWeatherData.current.temp_f)}\u00B0`;
            feelsLike.textContent = `Feels like ${Math.round(cityWeatherData.current.feelslike_f)}\u00B0`;
            dailySummary.textContent = `${(cityWeatherData.current.condition.text)}; with a low of 
            ${Math.round(cityWeatherData.forecast.forecastday[0].day.mintemp_f)}\u00B0 and a high of ${Math.round(cityWeatherData.forecast.forecastday[0].day.maxtemp_f)}\u00B0. There is a ${cityWeatherData.forecast.forecastday[0].day.daily_chance_of_rain}% chance of rain today.`;
        }
    }

    updateTemperatureDisplay() {
        if (this.cityWeatherData) {
            this.clearCurrentWeather();
            this.setCurrentWeather(this.cityWeatherData);
            this.clearForecastWeather();
            this.setForecastWeather(this.cityWeatherData);
            this.clearWeeklyForecastWeather();
            this.setThreeDayForecast(this.cityWeatherData);
        }
    }
    
    clearCurrentWeather() {
        const currentTemperature = document.getElementById('current-temperature-container');
        const feelsLike = document.getElementById('feels-like-container');
        const dailySummary = document.getElementById('daily-summary');
    
        currentTemperature.textContent = '';
        feelsLike.textContent = '';
        dailySummary.textContent = '';
    }
    
    clearForecastWeather() {
        const forecastContainer = document.getElementById('forecast-container');
        forecastContainer.innerHTML = '';
    }

    clearWeeklyForecastWeather() {
        const weeklyForecastContainer = document.getElementById('weekly-forecast-container');
        while(weeklyForecastContainer.children.length > 1) {
            weeklyForecastContainer.removeChild(weeklyForecastContainer.children[1]);
        }
    }

    
    setForecastWeather(cityWeatherData) {
        this.clearForecastWeather();
        const forecastContainer = document.getElementById('forecast-container');
    
        // Get the time zone offset from the cityWeatherData (assuming the API provides it)
        const timeZone = cityWeatherData.location.tz_id; // Adjust this if the field name is different
    
        cityWeatherData.forecast.forecastday.forEach(day => {
            day.hour.forEach(hour => {
                const hourContainer = document.createElement('div');
                hourContainer.classList.add('hour-container');
                forecastContainer.appendChild(hourContainer);
    
                const timeContainer = document.createElement('div');
                timeContainer.classList.add('time-container');
    
                // Parse the API time as UTC
                const forecastTimeUTC = new Date(hour.time);
    
                // Convert UTC time to local time for the city's time zone
                const localDate = new Date(forecastTimeUTC.toLocaleString('en-US', { timeZone: timeZone }));
    
                timeContainer.textContent = localDate.toLocaleTimeString('en-US', {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true
                });
                hourContainer.appendChild(timeContainer);
    
                const rainChanceContainer = document.createElement('div');
                if (hour.chance_of_rain !== 0) {
                    rainChanceContainer.textContent = `${hour.chance_of_rain}%`;
                    rainChanceContainer.style.color = 'blue';
                } else {
                    rainChanceContainer.textContent = '';
                }
                hourContainer.appendChild(rainChanceContainer);
    
                const iconContainer = document.createElement('img');
                iconContainer.classList.add('icon-container');
                iconContainer.src = this.getIconForCondition(hour.condition.text);
                hourContainer.appendChild(iconContainer);
    
                const tempContainer = document.createElement('div');
                tempContainer.classList.add('hourly-temp');
                if (this.celsius) {
                    tempContainer.textContent = `${Math.round(hour.temp_c)}\u00B0`;
                } else {
                    tempContainer.textContent = `${Math.round(hour.temp_f)}\u00B0`;
                }
                hourContainer.appendChild(tempContainer);
            });
        });
    
        this.setThreeDayForecast(cityWeatherData);
    }
    
    
    setThreeDayForecast(cityWeatherData) {
        this.clearWeeklyForecastWeather();
        const options = { weekday: 'long' };
    
        function formatDate(dateStr) {
            const date = new Date(dateStr);
            return new Intl.DateTimeFormat('en-US', options).format(date);
        }
    
        const weeklyForecastContainer = document.getElementById('weekly-forecast-container');
    
        for (let i = 0; i < 3; i++) {
            const weekdayContainer = document.createElement('div');
            weekdayContainer.innerHTML = '';
            weeklyForecastContainer.appendChild(weekdayContainer);
    
            const weekday = document.createElement('div');
            weekday.textContent = i === 0 ? 'Today' : formatDate(cityWeatherData.forecast.forecastday[i].date);
            weekdayContainer.appendChild(weekday);
    
            const img = document.createElement('img');
            img.src = this.getIconForCondition(cityWeatherData.forecast.forecastday[i].day.condition.text);
            img.classList.add('icon-container');
            weekdayContainer.appendChild(img);
    
            const rainChance = document.createElement('div');
            rainChance.textContent = `${cityWeatherData.forecast.forecastday[i].day.daily_chance_of_rain}%`;
            rainChance.style.color = 'blue';
            weekdayContainer.appendChild(rainChance);
    
            const lowTemp = document.createElement('div');
            lowTemp.classList.add('weekday-low-temp');
            weekdayContainer.appendChild(lowTemp);
    
            const highTemp = document.createElement('div');
            highTemp.classList.add('weekday-high-temp');
            weekdayContainer.appendChild(highTemp);
    
            if (this.celsius) {
                highTemp.textContent = `${Math.round(cityWeatherData.forecast.forecastday[i].day.maxtemp_c)}\u00B0`;
                lowTemp.textContent = `${Math.round(cityWeatherData.forecast.forecastday[i].day.mintemp_c)}\u00B0`;
            } else {
                highTemp.textContent = `${Math.round(cityWeatherData.forecast.forecastday[i].day.maxtemp_f)}\u00B0`;
                lowTemp.textContent = `${Math.round(cityWeatherData.forecast.forecastday[i].day.mintemp_f)}\u00B0`;
            }
        }
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

        sunriseContainer.textContent = 'Sunrise';
        sunsetContainer.textContent = 'Sunset';
        chanceOfRainContainer.textContent = 'Chance of rain';
        humidityContainer.textContent = 'Humidity';
        uvContainer.textContent = 'UV Index';
        windContainer.textContent = 'Wind';
        visibilityContainer.textContent = 'Visibility';
        precipitationContainer.textContent = 'Precipitation';
        moonPhaseContainer.textContent = 'Moon Phase';
    
        this.addTextToElement(sunriseContainer, cityWeatherData.forecast.forecastday[0].astro.sunrise);
        this.addTextToElement(sunsetContainer, cityWeatherData.forecast.forecastday[0].astro.sunset);
        this.addTextToElement(chanceOfRainContainer, `${cityWeatherData.forecast.forecastday[0].day.daily_chance_of_rain}%`);
        this.addTextToElement(humidityContainer, `${cityWeatherData.current.humidity}%`);
        this.addTextToElement(uvContainer, cityWeatherData.current.uv);
        this.addTextToElement(windContainer, `${cityWeatherData.current.wind_mph} mph ${cityWeatherData.current.wind_dir}`);
        this.addTextToElement(visibilityContainer, `${cityWeatherData.current.vis_miles} mi`);
        this.addTextToElement(precipitationContainer, `${cityWeatherData.forecast.forecastday[0].day.totalprecip_in}%`);
        this.addTextToElement(moonPhaseContainer, cityWeatherData.forecast.forecastday[0].astro.moon_phase);
    }
    

    addTextToElement(element, text) {
        const div = document.createElement('div');
        div.textContent = text;
        div.style.color = 'white';
        div.style.fontWeight = 'lighter';
        element.appendChild(div);
    }

    addIconToElement(element, iconSrc) {
        const img = document.createElement('img');
        img.src = iconSrc;
        importScripts.classList.add('icon-container');
        element.appendChild(img);
    }

    getIconForCondition(conditionText) {
        switch(conditionText) {
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
            case "Partly Cloudy":
                return "./images/wi-cloudy.svg"
            case "Cloudy":
                return "./images/wi-cloudy.svg"
            case "Cloudy ":
                return "./images/wi-cloudy.svg"
            case "Overcast":
                return "./images/wi-cloudy.svg"
            case "Overcast ":
                return "./images/wi-cloudy.svg"
            case "Mist":
                return "./images/wi-fog.svg"
            case "Patchy rain possible":
                return "./images/wi-rain.svg"
            case "Patchy snow possible":
                return "./images/wi-rain-mix.svg"
            case "Patchy sleet possible":
                return "./images/wi-rain-mix.svg"
            case "Patchy freezing drizzle possible":
                return "./images/wi-rain-mix.svg"
            case "Thundery outbreaks possible":
                return "./images/wi-storm-showers.svg"
            case "Blowing snow":
                return "./images/wi-snow.svg"
            case "Blizzard": 
                return "./images/wi-tornado.svg"
            case "Fog":
                return "./images/wi-fog.svg"
            case "Freezing fog":
                return "./images/wi-fog.svg"
            case "Patchy light drizzle":
                return "./images/wi-rain.svg"
            case "Light drizzle":
                return "./images/wi-rain.svg"
            case "Freezing drizzle":
                return "./images/wi-rain-mix.svg"
            case "Heavy freezing drizzle":
                return "./images/wi-rain-mix.svg"
            case "Patchy light rain":
                return "./images/wi-rain.svg"
            case "Light rain":
                return "./images/wi-rain.svg"
            case "Moderate rain at times":
                return "./images/wi-rain.svg"
            case "Moderate rain":
                return "./images/wi-rain.svg"
            case "Heavy rain at times":
                return "./images/wi-rain.svg"
            case "Heavy rain":
                return "./images/wi-rain.svg"
            case "Light freezing rain":
                return "./images/wi-rain-mix.svg"
            case "Moderate or heavy freezing rain":
                return "./images/wi-rain-mix.svg"
            case "Light sleet":
                return "./images/wi-rain-mix.svg"
            case "Moderate or heavy sleet":
                return "./images/wi-rain-mix.svg"
            case "Patchy light snow":
                return "./images/wi-snow.svg"
            case "Light snow":
                return "./images/wi-snow.svg"
            case "Patchy moderate snow":
                return "./images/wi-snow.svg"
            case "Moderate snow":
                return "./images/wi-snow.svg"
            case "Patchy heavy snow":
                return "./images/wi-snow.svg"
            case "Heavy snow":
                return "./images/wi-snow.svg"
            case "Ice pellets":
                return "./images/wi-snow.svg"
            case "Light rain shower":
                return "./images/wi-rain-mix.svg"
            case "Moderate or heavy rain shower":
                return "./images/wi-rain.svg"
            case "Torrential rain shower":
                return "./images/wi-rain.svg"
            case "Light sleet showers":
                return "./images/wi-rain-mix.svg"
            case "Moderate or heavy sleet showers":
                return "./images/wi-rain-mix.svg"
            case "Light snow showers":
                return "./images/wi-snow.svg"
            case "Moderate or heavy snow showers":
                return "./images/wi-snow.svg"
            case "Light showers of ice pellets":
                return "./images/wi-rain.svg"
            case "Patchy light rain with thunder":
                return "./images/wi-storm-showers.svg"
            case "Patchy light rain in area with thunder":
                return "./images/wi-storm-showers.svg"
            case "Patchy rain nearby":
                return "./images/wi-rain.svg"
            case "Moderate or heavy rain with thunder":
                return "./images/wi-storm-showers.svg"
            case "Patchy light snow with thunder":
                return "./images/wi-storm-showers.svg"
            case "Moderate or heavy snow with thunder":
                return "./images/wi-storm-showers.svg"
        }
        return conditionText;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new WeatherApp();
});