/*

--------------------TASK-------------------

1. Read the countries API using fetch and print the name of country, capital, languages, population and area.

*/

const countriesAPI = 'https://restcountries.com/v2/all';
const catsAPI = 'https://api.thecatapi.com/v1/breeds';

fetch(countriesAPI)
    .then(response => response.json())
    .then(data => {
        data.forEach(country => {
            console.log(`Country: ${country.name}`);
            console.log(`Capital: ${country.capital}`);
            console.log(`Languages: ${country.languages.map(lang => lang.name).join(', ')}`);
            console.log(`Population: ${country.population}`);
            console.log(`Area: ${country.area}`);
        });
    })
    .catch(error => console.error(error));



/*

--------------------Level 2-------------------

1. Print out all the cat names in to catNames variable.

*/

let catNames = [];

fetch(catsAPI)
    .then(response => response.json())
    .then(data => {
        catNames = data.map(cat => cat.name);
        console.log(catNames);
    })
    .catch(error => console.error(error));

/*

--------------------Level 3-------------------

1. Read the cats api and find the average weight of cat in metric unit.
2. Read the countries api and find out the 10 largest countries
3. Read the countries api and count total number of languages in the world used as officials.

*/

fetch(catsAPI)
    .then(response => response.json())
    .then(data => {
        const catWeights = data.map(cat => cat.weight.metric.split(' - '));
        const averageWeight = catWeights.reduce((acc, [min, max]) => acc + (parseInt(min) + parseInt(max)) / 2, 0) / catWeights.length;
        console.log(`The average weight of a cat is ${averageWeight.toFixed(2)} kg.`);
    })
    .catch(error => console.error(error));


fetch(countriesAPI)
    .then(response => response.json())
    .then(data => {
        const sortedCountries = data.sort((a, b) => b.area - a.area);
        const largestCountries = sortedCountries.slice(0, 10);
        console.log('The 10 largest countries by area are:');
        largestCountries.forEach(country => {
            console.log(`${country.name} (${country.area} km²)`);
        });
    })
    .catch(error => console.error(error));

fetch(countriesAPI)
    .then(response => response.json())
    .then(data => {
        const officialLanguages = new Set();
        data.forEach(country => {
            country.languages.forEach(language => {
                officialLanguages.add(language.name);
            });
        });
        console.log(`There are ${officialLanguages.size} official languages in the world.`);
    })
    .catch(error => console.error(error));