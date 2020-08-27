/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-cycle */
import {
  createPageLayout,
  addFormListener,
  addBtnListener,
  getCity,
  updateWeatherDetails,
} from './dom';

let currentUnit = 'metric';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
const apiKey = 'adeafcceaf56c1e887e03f6075f5cc81';

createPageLayout();

const toggleUnit = (currentUnit) => (currentUnit === 'metric' ? 'imperial' : 'metric');
const getPreferredUnits = (event, currentUnit) => (event.type === 'click' ? toggleUnit(currentUnit) : 'metric');

const processData = (data) => {
  const { icon, description } = data.weather[0];
  const { temp } = data.main;
  const { name } = data;
  const dataObject = {
    name, temp, icon, description,
  };
  return dataObject;
};

const getWeatherDetails = async (event) => {
  event.preventDefault();
  console.log('getWeatherDetails -> event', event.type);
  const units = getPreferredUnits(event, currentUnit);
  console.log('getWeatherDetails -> units', units);

  const city = getCity().value;
  console.log('getWeatherDetails -> city', city);

  try {
    const response = await fetch(`${baseUrl}${city}&units=${units}&appid=${apiKey}`, {
      mode: 'cors',
    });
    console.log('asyncgetWeatherDetails -> result', response);
    const data = await response.json();
    console.log('getWeatherDetails -> data', data);
    const result = processData(data);
    currentUnit = units;
    updateWeatherDetails(result, units);
  } catch (error) {
    console.log('getWeatherDetails -> error', error);
  }
};

addFormListener();
addBtnListener();

export { getWeatherDetails };
