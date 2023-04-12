
/*

--------------------TASK-------------------

1. Explain the difference between forEach, map, filter, and reduce.
2. Define a callback function before you use it in forEach, map, filter or reduce.
3. Use forEach to console.log each country in the countries array.
4. Use forEach to console.log each name in the names array.
5. Use forEach to console.log each number in the numbers array.
6. Use map to create a new array by changing each country to uppercase in the countries array.
7. Use map to create an array of countries length from countries array.
8. Use map to create a new array by changing each number to square in the numbers array
9. Use map to change to each name to uppercase in the names array
10. Use map to map the products array to its corresponding prices.
11. Use filter to filter out countries containing land.
12. Use filter to filter out countries having six character.
13. Use filter to filter out countries containing six letters and more in the country array.
14. Use filter to filter out country start with 'E';
15. Use filter to filter out only prices with values.
16. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
17. Use reduce to sum all the numbers in the numbers array.
18. Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
19. Explain the difference between some and every
20. Use some to check if some names' length greater than seven in names array
21. Use every to check if all the countries contain the word land
22. Explain the difference between find and findIndex.
23. Use find to find the first country containing only six letters in the countries array
24. Use findIndex to find the position of the first country containing only six letters in the countries array
25. Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
26. Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.

*/


/*

forEach: it'll call the function for every element of the array one after another.
map: it'll apply the operation specified in the function to all the elements of an array and return new array.
filter: it'll filter out all values in array for which boolean function returns true.
reduce: it is helpful when you want to apply operation like sum, multiplication, division etc. of whole array one element after other and get output as a single variable.

*/


function double(number) {
    return number * 2;
}

const nums = [1, 2, 3, 4, 5];

function logNumber(number) {
    console.log(number);
}

nums.forEach(logNumber);

function doubleNumber(number) {
    return number * 2;
}

const doublednums = nums.map(doubleNumber);
console.log(doublednums);

function isEven(number) {
    return number % 2 === 0;
}

const evennums = nums.filter(isEven);
console.log(evennums);

function sumnums(accumulator, number) {
    return accumulator + number;
}

const total = nums.reduce(sumnums, 0);
console.log(total);


const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

countries.forEach(country => console.log(country));
numbers.forEach(number => console.log(number));

const countriesUpper = countries.map(country => country.toUpperCase());
console.log(countriesUpper);

const countryLengths = countries.map(country => country.length);
console.log(countryLengths);

const squaredNumbers = numbers.map(number => number ** 2);
console.log(squaredNumbers);

const upperCaseNames = names.map(name => name.toUpperCase());
console.log(upperCaseNames);

const prices = products.map(product => product.price);
console.log(prices);

const filteredCountries = countries.filter(country => !country.includes('land'));
console.log(filteredCountries);

const filteredCountriesUsingLength = countries.filter(country => country.length > 6);
console.log(filteredCountriesUsingLength);

const filteredCountriesUsingLength2 = countries.filter(country => country.length <= 6);
console.log(filteredCountriesUsingLength2);

const filteredCountriesStartingWithE = countries.filter(country => !country.startsWith('E'));
console.log(filteredCountriesStartingWithE);

const filteredProducts = products.filter(product => typeof product.price === 'number' && product.price > 0);
console.log(filteredProducts);

function getStringLists(arr) {
    const stringArr = arr.filter(item => typeof item === 'string');
    return stringArr;
}

const mixedArr = [1, 'apple', true, 'banana', 3.14, 'orange'];
const stringArr = getStringLists(mixedArr);
console.log(stringArr);

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum);

const concatenatedCountries = countries.reduce((accumulator, currentValue, currentIndex) => {
    if (currentIndex === countries.length - 1) {
        return `${accumulator}and ${currentValue} are north European countries.`;
    }
    return `${accumulator}${currentValue}, `;
}, '');
console.log(concatenatedCountries);

/*

every: it'll check the condition for all elements and will return in boolean variable.
some: it'll check if atleast one element satisfy the given condition and return a boolean variable.

*/


const hasLongName = names.some(name => name.length > 7);
console.log(hasLongName);

/*

find: it'll return all the elements matching the condition.
findIndex: it'll return all the element's index matching the condition.

*/

const allCountriesContainLand = countries.every(country => country.includes('land'));
console.log(allCountriesContainLand);

const sixLetterCountry = countries.find(country => country.length === 6);
console.log(sixLetterCountry);

const sixLetterCountryIndex = countries.findIndex(country => country.length === 6);
console.log(sixLetterCountryIndex);

const norwayIndex = countries.findIndex(country => country === 'Norway');
console.log(norwayIndex);

const russiaIndex = countries.findIndex(country => country === 'Russia');
console.log(russiaIndex);



/*

--------------------TASK-------------------

1. Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
2. Find the sum of price of products using only reduce reduce(callback))
3. Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
4. Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
5. Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
6. Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
7. Find out which _letter_ is used many _times_ as initial for a country name from the countries array (eg. Finland, Fiji, France etc)

*/

const totalPrice = products
    .filter(product => product.price)
    .map(product => product.price)
    .reduce((acc, price) => acc + price, 0);
console.log(totalPrice);


const total2 = products.reduce((acc, product) => {
    if (product.price) {
        return acc + product.price;
    } else {
        return acc;
    }
}, 0);
console.log(total2);

function categorizeCountries(pattern) {
    return countries.filter(country => country.includes(pattern));
}
console.log(categorizeCountries('land'));


function countStartingLetters(countries) {
    const letterCount = {};
    countries.forEach(country => {
        const firstLetter = country[0].toUpperCase();
        if (letterCount[firstLetter]) {
            letterCount[firstLetter]++;
        } else {
            letterCount[firstLetter] = 1;
        }
    });
    return Object.entries(letterCount).map(entry => ({
        letter: entry[0],
        count: entry[1]
    }));
}
console.log(countStartingLetters(countries));


function getFirstTenCountries() {
    return countries.slice(0, 10);
}
console.log(getFirstTenCountries());


function getLastTenCountries() {
    return countries.slice(-10);
}
console.log(getLastTenCountries());


const initialCounts = countries.reduce((counts, country) => {
    const initial = country.charAt(0);
    counts[initial] = (counts[initial] || 0) + 1;
    return counts;
}, {});

let maxCount = 0;
let maxInitial = '';
for (let initial in initialCounts) {
    if (initialCounts[initial] > maxCount) {
        maxCount = initialCounts[initial];
        maxInitial = initial;
    }
}

console.log(`The letter "${maxInitial}" is used most frequently as the initial for country names, appearing ${maxCount} times.`);
