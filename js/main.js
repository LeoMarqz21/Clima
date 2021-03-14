import {Weather} from './weather.js';
import {LoadDataUI} from './ui.js';

const weather = new Weather('London', 'uk');
const UI = new LoadDataUI();

async function getData(){
  let result = await weather.getWeather();
  console.log(result);
  UI.render(result);
}

document.addEventListener('DOMContentLoaded',getData);
document.getElementById('btn-weather-change').addEventListener('click', (event) => {
  let city = document.getElementById('city').value;
  let countryCode = document.getElementById('countryCode').value;
  weather.changeLocation(city, countryCode);
  console.log(city, countryCode);
  getData();
  event.preventDefault();
}); 