/* eslint-disable no-alert */
/* eslint-disable import/no-cycle */
import {
  createPageLayout,
  addFormListener,
  addBtnListener,
  getCity,
  updateWeatherDetails,
  displayError,
  clearErrors,
} from './dom';

let currentUnit = 'metric';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
const apiKey = 'adeafcceaf56c1e887e03f6075f5cc81';

createPageLayout();

const temperatureSymbol = (units) => (units === 'metric' ? '°C' : '°F');
const windSpeedSymbol = (units) => (units === 'metric' ? 'm/s' : 'mph');
const toggleUnit = (currentUnit) => (currentUnit === 'metric' ? 'imperial' : 'metric');
const getPreferredUnits = (event, currentUnit) => (event.type === 'click' ? toggleUnit(currentUnit) : 'metric');

const processData = (data) => {
  const { icon, description } = data.weather[0];
  const { temp, humidity, pressure } = data.main;
  const { name, wind, sys } = data;
  const dataObject = {
    name, temp, icon, description, pressure, humidity, wind, sys,
  };
  return dataObject;
};

const getWeatherDetails = async (event) => {
  event.preventDefault();
  const units = getPreferredUnits(event, currentUnit);
  const city = getCity().value;

  try {
    const response = await fetch(`${baseUrl}${city}&units=${units}&appid=${apiKey}`, {
      mode: 'cors',
    });
    const data = await response.json();
    const result = processData(data);
    currentUnit = units;
    clearErrors();
    updateWeatherDetails(result, units);
  } catch (error) {
    displayError(error);
  }
};

addFormListener();
addBtnListener();

export { getWeatherDetails, temperatureSymbol, windSpeedSymbol };
