import { form } from './form';
import './stylesheets/style.css';

const main = document.createElement('div');
main.classList.add('content', 'flex');
main.appendChild(form());
document.body.appendChild(main);
