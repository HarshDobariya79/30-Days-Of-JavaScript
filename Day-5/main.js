/*
--------------------TASK-------------------

1. Declare an empty array;
2. Declare an array with more than 5 number of elements
3. Find the length of your array
4. Get the first item, the middle item and the last item of the array
5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should  be greater than 5
6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
7. Print the array using console.log()
8. Print the number of companies in the array
9. Print the first company, middle and last company
10. Print out each company
11. Change each company name  to uppercase one by one and print them out
12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is _not found_
14. Filter out companies which have more than one 'o' without the filter method
15. Sort the array using sort() method
16. Reverse the array using reverse() method
17. Slice out the first 3 companies from the array
18. Slice out the last 3 companies from the array
19. Slice out the middle IT company or companies from the array
20. Remove the first IT company from the array
21. Remove the middle IT company or companies from the array
22. Remove the last IT company from the array
23. Remove all IT companies

*/

const arr = Array();

const arr2 = [1, 2, 3, 4, 5];

console.log(arr2.length);

console.log(arr2[0], arr2[Math.floor(arr2.length / 2)], arr2[arr2.length - 1]);

const mixedDataTypes = [1, true, 'hello', 54.5, 23, false];

console.log(mixedDataTypes.length);

const itCompanies = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`];

console.log(itCompanies);

console.log(itCompanies.length);

console.log(itCompanies[0], itCompanies[Math.floor(itCompanies.length / 2)], itCompanies[itCompanies.length - 1]);

for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i]);
}

itCompanies[0] = itCompanies[0][0].toUpperCase() + itCompanies[0].slice(1);
itCompanies[1] = itCompanies[1][0].toUpperCase() + itCompanies[1].slice(1);
itCompanies[2] = itCompanies[2][0].toUpperCase() + itCompanies[2].slice(1);
itCompanies[3] = itCompanies[3][0].toUpperCase() + itCompanies[3].slice(1);
itCompanies[4] = itCompanies[4][0].toUpperCase() + itCompanies[4].slice(1);
itCompanies[5] = itCompanies[5][0].toUpperCase() + itCompanies[5].slice(1);
itCompanies[6] = itCompanies[6][0].toUpperCase() + itCompanies[6].slice(1);

for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i]);
}

console.log(`${itCompanies.slice(0, itCompanies.length - 1).toString()} and ${itCompanies[itCompanies.length - 1]} are big IT companies.`);

itCompanies.includes('Goldman sachs')
    ? console.log(`Goldman sachs`)
    : console.log(`company is not found`);

const newCompanies = Array();

for (let i = 0; i < itCompanies.length; i++) {
    const temp = itCompanies[i].match(/[o]{1}/ig);
    if (temp != null && temp.length > 1) {
        newCompanies.push(itCompanies[i]);
    }
}

console.log(newCompanies);

console.log(itCompanies.sort());

console.log(itCompanies.reverse());

console.log(itCompanies.slice(0, 3));

console.log(itCompanies.slice(itCompanies.length - 3));

console.log(itCompanies.slice(Math.floor(itCompanies.length / 2) - 1, Math.floor(itCompanies.length / 2) + 2));

console.log(itCompanies.shift());

console.log(itCompanies.splice(Math.floor(itCompanies.length / 2) - 1, Math.floor(itCompanies.length / 2) + 2));

console.log(itCompanies.pop());

console.log(itCompanies.splice(0, itCompanies.length));

console.log(itCompanies);


//-----------------Level 2---------------------

/*

1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
2. First remove all the punctuations and change the string to array and count the number of words in the array

js
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(words)
console.log(words.length)

["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

13


3. In the following shopping cart add, remove, edit items

    js
    const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    
    
    - add 'Meat' in the beginning of your shopping cart if it has not been already added
    - add Sugar at the end of you shopping cart if it has not been already added
    - remove 'Honey' if you are allergic to honey
    - modify Tea to 'Green Tea'
    4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
    5. In the webTechs array check if Sass exists in the array  and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
    6. Concatenate the following two variables and store it in a fullStack variable.
    
    js
    const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
    const backEnd = ['Node','Express', 'MongoDB']
    
    console.log(fullStack)
    
    ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
    
    */

import { countries } from "./countries.js";
import { webTechs } from "./web_techs.js";

console.log(countries);
console.log(webTechs);

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';

let words = text.match(/\w+/ig);

console.log(words);
console.log(words.length);

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

if (shoppingCart[0] != 'Meat') {
    shoppingCart.unshift('Meat');
}

if (shoppingCart[shoppingCart.length - 1] != 'Sugar') {
    shoppingCart.unshift('Sugar');
}

shoppingCart.splice(shoppingCart.indexOf('Honey'), 1);

console.log(shoppingCart);

shoppingCart[shoppingCart.indexOf('Green Tea')] = 'Tea';


if (countries.includes('Ethiopia')) {
    console.log(`ETHIOPIA`);
} else {
    shoppingCart.push('Ethiopia');
}

if (webTechs.includes('Sass')) {
    console.log(`Sass is a css preprocessor`);
} else {
    webTechs.push(`Sass`);
    console.log(webTechs);
}


const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];

const fullStack = frontEnd.concat(backEnd);

console.log(fullStack)


//-----------------Level 3---------------------

/*

1. The following is an array of 10 students ages:

    const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

    - Sort the array and find the min and max age
    - Find the median age(one middle item or two middle items divided by two)
    - Find the average age(all items divided by number of items)
    - Find the range of the ages(max minus min)
    - Compare the value of (min - average) and (max - average), use abs() method
2.Slice the first ten countries from the [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js)
3. Find the middle country(ies) in the [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js)
4. Divide the countries array into two equal arrays if it is even.  If countries array is not even , one more country for the first half.

*/

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort();

console.log(ages[0], ages[ages.length - 1]);

console.log(ages[Math.floor(ages.length / 2)]);

let sum = 0;

for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
}

console.log(sum / ages.length);

console.log(ages[ages.length - 1] - ages[0]);

console.log(Math.abs(ages[ages.length - 1] - sum / ages.length) === Math.abs(ages[0] - sum / ages.length));

console.log(countries.slice(0, 10));

console.log(countries[Math.floor(countries.length / 2)]);

if (countries.length % 2 == 0) {
    console.log(countries.slice(0, countries.length / 2), countries.slice(countries.length / 2));
}
else {
    console.log(countries.slice(0, Math.ceil(countries.length / 2)), countries.slice(Math.ceil(countries.length / 2)));
}