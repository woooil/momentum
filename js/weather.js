const API_KEY = "e2c7580cd00a6b7eff928c227cf1db09";

const WEATHER_KEY = "weather";

let weather = [];

function saveWeather(newWeather){
    localStorage.setItem(WEATHER_KEY, JSON.stringify(newWeather));
}

function paintWeather(newWeather) {
    const city = document.querySelector("#weather div:first-child");
    const weather = document.querySelector("#weather div:nth-child(2)");
    const temp = document.querySelector("#weather div:last-child");
    city.innerText = newWeather.city;
    weather.innerText = newWeather.weather;
    temp.innerText = newWeather.temp + "°C";
}

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;
    fetch(url).then(response => response.json()).then(data => {
        weather = {
            city: data.name,
            weather: data.weather[0].main,
            temp: data.main.temp
        };
        paintWeather(weather);
        saveWeather(weather);
    });
}

function onGeoError() {
    alert("사용자의 위치를 찾을 수 없습니다.")
}

const savedWeather = localStorage.getItem(WEATHER_KEY);

if (savedWeather) {
    weather = JSON.parse(savedWeather);
    paintWeather(weather);
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);