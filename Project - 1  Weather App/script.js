 

// 1. Paste your OpenWeatherMap API key here
const API_KEY = 'here is keys'; 

const countryToCapital = {
  'pakistan': 'Islamabad',
  'india': 'New Delhi',
  'usa': 'Washington',
  'uk': 'London',
  'canada': 'Ottawa',
  'australia': 'Canberra',
  'japan': 'Tokyo',
  'china': 'Beijing',
  'uae': 'Abu Dhabi'
};

const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const weatherInfoDiv = document.getElementById('weatherInfo');
const errorMsgDiv = document.getElementById('errorMsg');

const cityNameEl = document.getElementById('cityName');
const temperatureEl = document.getElementById('temperature');
const humidityEl = document.getElementById('humidity');
const weatherIconEl = document.getElementById('weatherIcon');
const descriptionEl = document.getElementById('description');

function showError(message) {
  errorMsgDiv.textContent = message;
  errorMsgDiv.style.display = 'block';
  setTimeout(() => { errorMsgDiv.style.display = 'none'; }, 4000);
}

function getSearchCity(input) {
  const trimmed = input.trim().toLowerCase();
  return countryToCapital[trimmed] || input.trim();
}

async function fetchWeather(city) {
  if (!city.trim() || !API_KEY) {
    showError(API_KEY ? 'Please enter a city' : 'API Key is missing!');
    return;
  }

  const searchCity = getSearchCity(city);
  
  // UI Reset
  cityNameEl.textContent = 'Searching...';
  errorMsgDiv.style.display = 'none';

  // FIX: Removed the ",PK" so you can search any city in the world
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(searchCity)}&units=metric&appid=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
       throw new Error(data.message || 'City not found');
    }

    // Success Update
    cityNameEl.textContent = `${data.name}, ${data.sys.country}`;
    temperatureEl.textContent = `${Math.round(data.main.temp)}°C`;
    humidityEl.textContent = `💧 Humidity: ${data.main.humidity}%`;
    descriptionEl.textContent = data.weather[0].description;

    const iconCode = data.weather[0].icon;
    weatherIconEl.innerHTML = `<img src="https://openweathermap.org/img/wn/${iconCode}@2x.png" alt="weather icon">`;

  } catch (error) {
    console.error(error);
    showError(`❌ Error: ${error.message}`);
    cityNameEl.textContent = '---';
  }
}

// Event Listeners
searchBtn.addEventListener('click', () => fetchWeather(cityInput.value));

cityInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') fetchWeather(cityInput.value);
});

// Default city on load
window.addEventListener('load', () => {
  if(API_KEY) fetchWeather('Karachi');
});
