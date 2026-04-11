import "./styles.css";
import { homePage } from './restaurant.js';
import { menuPage } from "./menu.js";

console.log(homePage());
console.log(menuPage());

import restaurantImage2 from "./restaurant2.jpg";
const secondImage = document.createElement('img');
secondImage.src = restaurantImage2;

const container = document.getElementById('content');

const homeButton = document.getElementById('home');
homeButton.addEventListener('click', () => {
    container.textContent = "";
});

const menuButton = document.getElementById('menu');
menuButton.addEventListener('click', () => {
    container.textContent = "";
});







