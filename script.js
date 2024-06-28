async function getCityWeatherData(cityName) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=a390cc13883e4bfa92b23027242606&q=${cityName}`);
    const cityWeatherData = await response.json();
    console.log(cityWeatherData.location.country);
    console.log(cityWeatherData.location.name);
    console.log(cityWeatherData.location.localtime);
    console.log(cityWeatherData.current.condition.text);
    console.log(cityWeatherData.current.condition.icon); //use in img.src div
    console.log(cityWeatherData.current.wind_dir);
    console.log(cityWeatherData.current.wind_mph);
    console.log(cityWeatherData.current.feelslike_f);
}

getCityWeatherData('London');