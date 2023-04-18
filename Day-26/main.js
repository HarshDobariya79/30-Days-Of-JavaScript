/*

--------------------TASK-------------------

1. Visualize the countries array as follows

*/

import { countries } from './data/countries.js'

const imageUrl = './images/map_image.jpg';

document.querySelector('#country_name').addEventListener('input', () => {

    const searchWord = document.querySelector('#country_name').value;
    const container = document.querySelector('#container');
    container.innerHTML = '';
    const row = document.createElement('div');
    row.classList.add('row');

    for (const country of countries) {
        if (country.toLowerCase().startsWith(searchWord.toLowerCase())) {
            console.log('hello');
            const block = document.createElement('div');
            block.classList.add('col-md-2');

            const card = document.createElement('div');
            card.classList.add('card', 'm-2');
            card.style.height = '80%';

            const img = new Image();
            img.onload = function () {
                card.style.backgroundImage = `url(${imageUrl})`;
                card.style.backgroundSize = 'cover';
            }
            img.src = imageUrl;

            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');

            const cardText = document.createElement('p');
            cardText.classList.add('card-title', 'text-center', 'text-dark', 'font-weight-bold');

            cardText.innerText = country;

            cardBody.appendChild(cardText);
            card.appendChild(cardBody);

            block.appendChild(card);
            row.appendChild(block);

        }
    }
    console.log(row);
    container.appendChild(row);

})