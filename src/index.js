// adeafcceaf56c1e887e03f6075f5cc81;


// api.openweathermap.org/data/2.5/weather?q={city name}&appid=

// api.openweathermap.org/data/2.5/weather?q=accra&appid=adeafcceaf56c1e887e03f6075f5cc81


import { form, button } from './form';
import './stylesheets/style.css';

const main = document.createElement('div');
const title = document.createElement('h1');
const location = document.createElement('div');
const locationImg = document.createElement('img');
const locationTxt = document.createElement('p');
const temperature = document.createElement("div");
const temperatureImg = document.createElement("img");
const temperatureTxt = document.createElement("p");
const btn = button();

title.innerHTML = 'Weather App';
title.classList.add('title', 'flex', 'justify-center');
main.classList.add('main', 'flex-v', 'justify-center');
location.classList.add('location');
temperature.classList.add("temperature");
locationImg.src = '';
temperatureImg.src = "";
btn.setAttribute('value', 'C -> F');
btn.classList.remove("btn");
btn.classList.add("toggle");

location.appendChild(locationImg);
location.appendChild(locationTxt);
temperature.appendChild(temperatureImg);
temperature.appendChild(temperatureTxt);
main.appendChild(form());
main.appendChild(location);
main.appendChild(temperature);
main.appendChild(btn);

document.body.appendChild(title);
document.body.appendChild(main);
