/*

--------------------TASK-------------------

1. Develop a small application which calculate a weight of an object in a certain planet

*/

const planets = {
	'Earth': 9.8,
	'Jupiter': 24.79,
	'Mars': 3.72,
	'Mercury': 3.70,
	'Moon': 1.62,
	'Neptune': 11.15,
	'Pluto': 0.62,
	'Saturn': 10.44,
	'Uranus': 8.87,
	'Venus': 8.87,
}

const selectElement = document.querySelector('#select-field');

selectElement.innerHTML += '<option selected disabled hidden>Choose...</option>';

for (const planet of Object.keys(planets)) {
	const option = document.createElement('option');
	option.value = planet;
	option.innerText = planet;
	selectElement.appendChild(option);
}

document.querySelector('button').addEventListener('click', () => {
	mass = document.querySelector('#number-input').value;
	planet = document.querySelector('#select-field').value;
	infoSection = document.querySelector('#info');
	
	image = document.createElement('img');
	image.src = planet.toLowerCase() + '.png';
	image.style.width = '50%';
	image.classList.add('m-5');

	weight = document.createElement('div');
	weight.classList.add('d-flex','justify-content-center','text-white','display-4','align-items-center');
	weight.innerHTML = (mass * planets[planet]).toFixed(2) + ' N';

	infoSection.innerHTML = '';
	infoSection.appendChild(image);
	infoSection.appendChild(weight);
	console.log(infoSection);
})