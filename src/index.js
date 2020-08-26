/* eslint-disable import/no-cycle */
import {
  createPageLayout, addFormListener, getCity, updateWeatherDetails,
} from './dom';

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
const apiKey = 'adeafcceaf56c1e887e03f6075f5cc81';

createPageLayout();

const getWeatherDetails = async (event) => {
  event.preventDefault();
  const city = getCity().value;
  console.log('getWeatherDetails -> city', city);

  try {
    const response = await fetch(`${baseUrl}${city}&appid=${apiKey}`, {
      mode: 'cors',
    });
    console.log('asyncgetWeatherDetails -> result', response);
    const data = await response.json();
    updateWeatherDetails(data);
    // console.log('getWeatherDetails -> data', data);
    // // const [, , description, icon ] = data.weather[0];
    // const { icon, description } = data.weather[0];
    // // console.log('getWeatherDetails -> data.weather', data.weather);
    // console.log('getWeatherDetails -> iconCode', icon);
    // // const [description] = data.weather['description'];
    // console.log('getWeatherDetails -> description', description);
    // const { temp } = data.main;
    // console.log('getWeatherDetails -> temp', temp);
  } catch (error) {
    console.log('getWeatherDetails -> error', error);
  }
  // console.log('getWeatherDetails -> event', event);
};

addFormListener();

export { getWeatherDetails };
