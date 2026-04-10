// // ---------- WEATHER APP ----------
// // 🔴 IMPORTANT: Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
// // Get a free key at: https://openweathermap.org/api

// const API_KEY = 'qwen/qwen3.6-plus:free';  // <---- REPLACE THIS

// const cityInput = document.getElementById('cityInput');
// const searchBtn = document.getElementById('searchBtn');
// const weatherInfoDiv = document.getElementById('weatherInfo');
// const errorMsgDiv = document.getElementById('errorMsg');

// const cityNameEl = document.getElementById('cityName');
// const temperatureEl = document.getElementById('temperature');
// const humidityEl = document.getElementById('humidity');
// const weatherIconEl = document.getElementById('weatherIcon');
// const descriptionEl = document.getElementById('description');

// function showError(message) {
//   errorMsgDiv.textContent = message;
//   errorMsgDiv.style.display = 'block';
//   weatherInfoDiv.style.opacity = '0.6';
//   setTimeout(() => {
//     errorMsgDiv.style.display = 'none';
//     weatherInfoDiv.style.opacity = '1';
//   }, 3000);
// }

// function clearError() {
//   errorMsgDiv.style.display = 'none';
//   errorMsgDiv.textContent = '';
// }

// async function fetchWeather(city) {
//   if (!city.trim()) {
//     showError('Please enter a city name');
//     return;
//   }

//   clearError();
//   cityNameEl.textContent = 'Loading...';
//   temperatureEl.textContent = '--°C';
//   humidityEl.textContent = '💧 Humidity: --%';
//   weatherIconEl.innerHTML = '';
//   descriptionEl.textContent = '---';

//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`;

//   try {
//     const response = await fetch(url);
//     const data = await response.json();

//     if (data.cod !== 200) {
//       throw new Error(data.message || 'City not found');
//     }

//     cityNameEl.textContent = `${data.name}, ${data.sys.country}`;
//     temperatureEl.textContent = `${Math.round(data.main.temp)}°C`;
//     humidityEl.textContent = `💧 Humidity: ${data.main.humidity}%`;
//     descriptionEl.textContent = data.weather[0].description;

//     const iconCode = data.weather[0].icon;
//     const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
//     weatherIconEl.innerHTML = `<img src="${iconUrl}" alt="${data.weather[0].description}">`;

//   } catch (error) {
//     console.error(error);
//     showError('❌ City not found. Please check the spelling.');
//     cityNameEl.textContent = '---';
//     temperatureEl.textContent = '--°C';
//     humidityEl.textContent = '💧 Humidity: --%';
//     weatherIconEl.innerHTML = '';
//     descriptionEl.textContent = '---';
//   }
// }

// searchBtn.addEventListener('click', () => {
//   fetchWeather(cityInput.value);
// });

// cityInput.addEventListener('keypress', (e) => {
//   if (e.key === 'Enter') {
//     fetchWeather(cityInput.value);
//   }
// });

// window.addEventListener('load', () => {
//   fetchWeather('London');
// });    



// ---------- WEATHER APP ----------
// 🔴 IMPORTANT: Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
// const API_KEY = '';  // <---- REPLACE THIS

// // // Mapping of country names to capital cities
// const countryToCapital = {
//   'pakistan': 'Islamabad',
//   'india': 'New Delhi',
//   'usa': 'Washington',
//   'united states': 'Washington',
//   'uk': 'London',
//   'united kingdom': 'London',
//   'canada': 'Ottawa',
//   'australia': 'Canberra',
//   'germany': 'Berlin',
//   'france': 'Paris',
//   'italy': 'Rome',
//   'spain': 'Madrid',
//   'japan': 'Tokyo',
//   'china': 'Beijing',
//   'russia': 'Moscow',
//   'brazil': 'Brasília',
//   'south africa': 'Pretoria',
//   'egypt': 'Cairo',
//   'turkey': 'Ankara',
//   'uae': 'Abu Dhabi',
//   'bangladesh': 'Dhaka',
//   'sri lanka': 'Colombo',
//   'nepal': 'Kathmandu',
//   'afghanistan': 'Kabul',
//   'iran': 'Tehran',
//   'iraq': 'Baghdad',
//   'saudi arabia': 'Riyadh'
// };

// const cityInput = document.getElementById('cityInput');
// const searchBtn = document.getElementById('searchBtn');
// const weatherInfoDiv = document.getElementById('weatherInfo');
// const errorMsgDiv = document.getElementById('errorMsg');

// const cityNameEl = document.getElementById('cityName');
// const temperatureEl = document.getElementById('temperature');
// const humidityEl = document.getElementById('humidity');
// const weatherIconEl = document.getElementById('weatherIcon');
// const descriptionEl = document.getElementById('description');

// function showError(message) {
//   errorMsgDiv.textContent = message;
//   errorMsgDiv.style.display = 'block';
//   weatherInfoDiv.style.opacity = '0.6';
//   setTimeout(() => {
//     errorMsgDiv.style.display = 'none';
//     weatherInfoDiv.style.opacity = '1';
//   }, 3000);
// }

// function clearError() {
//   errorMsgDiv.style.display = 'none';
//   errorMsgDiv.textContent = '';
// }

// // Convert country name to capital city if needed
// function getSearchCity(input) {
//   const trimmed = input.trim().toLowerCase();
//   if (countryToCapital[trimmed]) {
//     return countryToCapital[trimmed];
//   }
//   return input.trim();
// }

// async function fetchWeather(city) {
//   if (!city.trim()) {
//     showError('Please enter a city or country name');
//     return;
//   }

//   const searchCity = getSearchCity(city);
//   let displayMessage = '';
//   if (getSearchCity(city) !== city.trim()) {
//     displayMessage = ` (capital: ${searchCity})`;
//   }

//   clearError();
//   cityNameEl.textContent = 'Loading...';
//   temperatureEl.textContent = '--°C';
//   humidityEl.textContent = '💧 Humidity: --%';
//   weatherIconEl.innerHTML = '';
//   descriptionEl.textContent = '---';

//   // const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(searchCity)}&units=metric&appid=${API_KEY}`;
//      const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(searchCity)},PK&units=metric&appid=${API_KEY}`;
//   try {
//     const response = await fetch(url);
//     const data = await response.json();

//     if (data.cod !== 200) {
//       throw new Error(data.message || 'City not found');
//     }

//     cityNameEl.textContent = `${data.name}, ${data.sys.country}${displayMessage}`;
//     temperatureEl.textContent = `${Math.round(data.main.temp)}°C`;
//     humidityEl.textContent = `💧 Humidity: ${data.main.humidity}%`;
//     descriptionEl.textContent = data.weather[0].description;

//     const iconCode = data.weather[0].icon;
//     const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
//     weatherIconEl.innerHTML = `<img src="${iconUrl}" alt="${data.weather[0].description}">`;

//   } catch (error) {
//     console.error(error);
//     showError(`❌ Could not find weather for "${city}". Try a specific city name (e.g., "Lahore", "Karachi").`);
//     cityNameEl.textContent = '---';
//     temperatureEl.textContent = '--°C';
//     humidityEl.textContent = '💧 Humidity: --%';
//     weatherIconEl.innerHTML = '';
//     descriptionEl.textContent = '---';
//   }
// }

// searchBtn.addEventListener('click', () => {
//   fetchWeather(cityInput.value);
// });

// cityInput.addEventListener('keypress', (e) => {
//   if (e.key === 'Enter') {
//     fetchWeather(cityInput.value);
//   }
// });

// window.addEventListener('load', () => {
//   // fetchWeather('Islamabad');  // Default to Pakistan's capital
//   fetchWeather('Karachi');
// });   

// 1. Paste your OpenWeatherMap API key here
const API_KEY = '1ab4ba2f4b36aba5b42463ce22369f74'; 

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