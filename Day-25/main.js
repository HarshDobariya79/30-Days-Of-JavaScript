/*

--------------------TASK-------------------

1. Visualize the ten most populated countries and the ten most spoken languages in the world using DOM(HTML, CSS, JS)

*/

import { countries_data } from './countries_data.js'

const countries = [];

for (const country of countries_data) {
	countries.push(
		{
			'name': country.name,
			'population': country.population,
		})
}

const worldPopulation = countries.reduce((acc, val) => acc + parseInt(val.population), 0);

countries.sort((a, b) => {
	return (b.population - a.population);
});

let languageCounts = {};

countries_data.forEach(country => {
	country.languages.forEach(language => {
		if (languageCounts[language]) {
			languageCounts[language]++;
		} else {
			languageCounts[language] = 1;
		}
	});
});

languageCounts = Object.entries(languageCounts).map(([key, value]) => ({ 'language': key, 'count': value }));
languageCounts.sort((a, b) => b.count - a.count);

const maxCount = languageCounts[0].count;

const table = document.querySelector('#chart');

document.querySelector('#show-language').addEventListener('click', () => {

	table.innerHTML = '';

	for (let i = 0; i < languageCounts.length && i < 10; i++) {
		const row = document.createElement('tr');
		const nameCell = document.createElement('td');
		const bar = document.createElement('div');
		const graphCell = document.createElement('td');
		const countCell = document.createElement('td');
		bar.classList.add('text-warning', 'bg-warning');
		bar.style.width = (languageCounts[i].count / maxCount * 100).toFixed(2) + '%';
		nameCell.classList.add('country-name');
		graphCell.classList.add('country-graph');
		countCell.classList.add('country-count');

		nameCell.innerText = languageCounts[i].language;
		bar.innerText = '.';
		countCell.innerText = languageCounts[i].count;

		graphCell.appendChild(bar);
		row.appendChild(nameCell);
		row.appendChild(graphCell);
		row.appendChild(countCell);

		table.appendChild(row);
	}

});

document.querySelector('#show-population').addEventListener('click', () => {

	table.innerHTML = '';
	const row = document.createElement('tr');
	const nameCell = document.createElement('td');
	const bar = document.createElement('div');
	const graphCell = document.createElement('td');
	const countCell = document.createElement('td');
	bar.classList.add('text-warning', 'bg-warning');
	bar.style.width = '100%';
	nameCell.classList.add('country-name');
	graphCell.classList.add('country-graph');
	countCell.classList.add('country-count');

	nameCell.innerText = 'World';
	bar.innerText = '.';
	countCell.innerText = worldPopulation;

	graphCell.appendChild(bar);
	row.appendChild(nameCell);
	row.appendChild(graphCell);
	row.appendChild(countCell);

	table.appendChild(row);

	for (let i = 0; i < countries.length && i < 10; i++) {
		const row = document.createElement('tr');
		const nameCell = document.createElement('td');
		const bar = document.createElement('div');
		const graphCell = document.createElement('td');
		const countCell = document.createElement('td');
		bar.classList.add('text-warning', 'bg-warning');
		bar.style.width = (countries[i].population / worldPopulation * 100).toFixed(2) + '%';
		nameCell.classList.add('country-name');
		graphCell.classList.add('country-graph');
		countCell.classList.add('country-count');

		nameCell.innerText = countries[i].name;
		bar.innerText = '.';
		countCell.innerText = countries[i].population;

		graphCell.appendChild(bar);
		row.appendChild(nameCell);
		row.appendChild(graphCell);
		row.appendChild(countCell);

		table.appendChild(row);
	}

});

