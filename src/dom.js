// eslint-disable-next-line import/no-cycle
import { getWeatherDetails, temperatureSymbol } from './index';
import { form, button } from './form';
import locationImage from './images/location.png';
import rainyImage from './images/rainy.jpg';
import cloudyImage from './images/cloudy.jpg';
import sunnyImage from './images/sunny.jpg';
import './stylesheets/style.css';

const addFormListener = () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', getWeatherDetails);
};

const addBtnListener = () => {
  const btn = document.querySelector('.toggle');
  btn.addEventListener('click', getWeatherDetails);
};

const createPageLayout = () => {
  const main = document.createElement('div');
  const title = document.createElement('h1');
  const location = document.createElement('div');
  const locationImg = document.createElement('img');
  const locationTxt = document.createElement('span');
  const temperature = document.createElement('div');
  const temperatureImg = document.createElement('img');
  const temperatureTxt = document.createElement('span');
  const temperatureVal = document.createElement('span');
  const temperatureDiv = document.createElement('div');
  const extras = document.createElement('div');
  const pressure = document.createElement('div');
  const humidity = document.createElement('div');
  const wind = document.createElement('div');
  const toggleBtn = button('°C <-> °F');

  title.innerHTML = 'Weather App';
  title.classList.add('title', 'flex', 'justify-center');
  main.classList.add('main', 'flex-v', 'justify-center');
  location.classList.add('location', 'flex', 'hide');
  temperature.classList.add('temperature', 'flex', 'hide');
  locationImg.setAttribute('class', 'locationImg');
  locationImg.src = locationImage;
  locationTxt.classList.add('locationTxt');
  temperatureTxt.classList.add('temperatureTxt');
  temperatureVal.classList.add('temperatureVal');
  temperatureDiv.classList.add('flex-v');
  temperatureImg.classList.add('temperatureImg');
  toggleBtn.classList.remove('btn');
  toggleBtn.classList.add('toggle');
  extras.classList.add('flex', 'extras');
  pressure.classList.add('pressure', 'padding');
  humidity.classList.add('humidity', 'padding');
  wind.classList.add('wind', 'padding');

  location.appendChild(locationImg);
  location.appendChild(locationTxt);
  temperature.appendChild(temperatureImg);
  temperatureDiv.appendChild(temperatureVal);
  temperatureDiv.appendChild(temperatureTxt);
  temperature.appendChild(temperatureDiv);
  extras.appendChild(pressure);
  extras.appendChild(humidity);
  extras.appendChild(wind);
  main.appendChild(form());
  main.appendChild(location);
  main.appendChild(temperature);
  main.appendChild(toggleBtn);
  main.appendChild(extras);


  document.body.appendChild(title);
  document.body.appendChild(main);
};

const getCity = () => {
  const city = document.querySelector('input[name="City"]');
  return city;
};

const changeBackground = (icon) => {
  const main = document.querySelector('.main');
  switch (icon) {
    case '01n':
      main.setAttribute('style', `background-image: url(${sunnyImage})`);
      break;

    case '10d':
      main.setAttribute('style', `background-image: url(${rainyImage})`);
      break;

    default:
      main.setAttribute('style', `background-image: url(${cloudyImage});`);
  }
};

const displayContent = (icon) => {
  const location = document.querySelector('.location');
  const temperature = document.querySelector('.temperature');
  location.classList.remove('hide');
  temperature.classList.remove('hide');
  changeBackground(icon);
};

const updateExtrasDiv = (pressure, humidity, wind) => {
  const pressureSpan = document.querySelector('.pressure');
  const humiditySpan = document.querySelector('.humidity');
  const windSpan = document.querySelector('.wind');
  pressureSpan.innerHTML = `Pressure: ${pressure}`;
  humiditySpan.innerHTML = `Humidity: ${humidity}`;
  windSpan.innerHTML = `Wind Speed: ${wind.speed}`;
};

const updateTemperatureDiv = (iconUrl, description, temp, units) => {
  const temperatureImg = document.querySelector('.temperatureImg');
  const temperatureTxt = document.querySelector('.temperatureTxt');
  const temperatureVal = document.querySelector('.temperatureVal');
  temperatureImg.src = iconUrl;
  temperatureTxt.innerHTML = description;
  temperatureVal.innerHTML = `${Math.floor(temp)} ${temperatureSymbol(units)}`;
};

const updateLocationDiv = (name, sys) => {
  const locationTxt = document.querySelector('.locationTxt');
  locationTxt.innerHTML = `${name}, ${sys.country}`;
};

const updateWeatherDetails = (data, units) => {
  const {
    name, temp, icon, description, pressure, humidity, wind, sys,
  } = data;

  const iconUrl = `http://openweathermap.org/img/w/${icon}.png`;
  updateTemperatureDiv(iconUrl, description, temp, units);
  updateExtrasDiv(pressure, humidity, wind);
  updateLocationDiv(name, sys);
  displayContent(icon);
};

export {
  createPageLayout,
  addFormListener,
  addBtnListener,
  getCity,
  updateWeatherDetails,
};
