/*

--------------------TASK-------------------

  
  const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

  const mernStack = ['MongoDB', 'Express', 'React', 'Node']
  

1. Iterate 0 to 10 using for loop, do the same using while and do while loop
2. Iterate 10 to 0 using for loop, do the same using while and do while loop
3. Iterate 0 to n using for loop
4. Write a loop that makes the following pattern using console.log():

   
       #
       ##
       ###
       ####
       #####
       ######
       #######
   

5. Use loop to print the following pattern:

   
   0 x 0 = 0
   1 x 1 = 1
   2 x 2 = 4
   3 x 3 = 9
   4 x 4 = 16
   5 x 5 = 25
   6 x 6 = 36
   7 x 7 = 49
   8 x 8 = 64
   9 x 9 = 81
   10 x 10 = 100
   

6. Using loop print the following pattern

   
    i    i^2   i^3
    0    0     0
    1    1     1
    2    4     8
    3    9     27
    4    16    64
    5    25    125
    6    36    216
    7    49    343
    8    64    512
    9    81    729
    10   100   1000
   

7. Use for loop to iterate from 0 to 100 and print only even numbers
8. Use for loop to iterate from 0 to 100 and print only odd numbers
9. Use for loop to iterate from 0 to 100 and print only prime numbers
10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.

    
    The sum of all numbers from 0 to 100 is 5050.
    

11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

    
    The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
    

12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

    
      [2550, 2500]
    

13. Develop a small script which generate array of 5 random numbers
14. Develop a small script which generate array of 5 random numbers and the numbers must be unique
15. Develop a small script which generate a six characters random id:

    
    5j2khz
    

*/

for (let i = 0; i < 10; i++) {
    console.log(i);
}

let i = 0;

while (i < 10) {
    console.log(i);
    i++;
}

i = 0;

do {
    console.log(i);
    i++;
} while (i < 10);


for (let i = 10; i > 0; i--) {
    console.log(i);
}

i = 10;

while (i > 0) {
    console.log(i);
    i--;
}

i = 10;

do {
    console.log(i);
    i--;
} while (i > 0);

let n = parseInt(prompt(`Enter n`));

for (let i = 0; i < n; i++) {
    console.log(i);
}

for (let i = 1; i <= n; i++) {
    console.log('#'.repeat(i));
}

for (let i = 0; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i ** 2}`);
}

console.log(`i    i^2    i^3`);

for (let i = 0; i <= 10; i++) {
    console.log(`${i}    ${i ** 2}    ${i ** 3}`);
}

for (let i = 0; i < 100; i++) {
    if (i % 2) {
        console.log(i);
    }
}

for (let i = 0; i < 100; i++) {
    if (!(i % 2)) {
        console.log(i);
    }
}

for (let i = 0; i < 100; i++) {
    let prime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (!(i % j)) {
            prime = false;
            break;
        }
    }
    if (prime) {
        console.log(i);
    }
}

let sum = 0;

for (let i = 0; i < 100; i++) {
    sum += i;
}

console.log(sum);

let sumArray = Array(0, 0);

for (let i = 0; i < 100; i++) {
    sumArray[i % 2] += i;
}

console.log(sumArray)

const randomArray = Array();

for (let i = 0; i < 5; i++) {
    randomArray.push(Math.random());
}

console.log(randomArray);

randomArray.splice();

while (randomArray.length < 5) {
    temp = Math.random();
    if (!Math.includes(temp)) {
        randomArray.push(temp);
    }
}

const characterSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

let randomString = '';

for (let i = 0; i < 6; i++) {
    randomString += characterSet[Math.floor(Math.random() * characterSet.length)];
}

console.log(randomString);


//-----------------Level 2---------------------

/*

1. Develop a small script which generate any number of characters random id:


fe3jo1gl124g



xkqci4utda1lmbelpkm03rba


2. Write a script which generates a random hexadecimal number.


'#ee33df'


3. Write a script which generates a random rgb color number.


rgb(240,180,80)


4. Using the above countries array, create the following new array.


["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]


5. Using the above countries array, create an array for countries length'.


[7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]


6. Use the countries array to create the following array of arrays:


[
    ['Albania', 'ALB', 7],
    ['Bolivia', 'BOL', 7],
    ['Canada', 'CAN', 6],
    ['Denmark', 'DEN', 7],
    ['Ethiopia', 'ETH', 8],
    ['Finland', 'FIN', 7],
    ['Germany', 'GER', 7],
    ['Hungary', 'HUN', 7],
    ['Ireland', 'IRE', 7],
    ['Iceland', 'ICE', 7],
    ['Japan', 'JAP', 5],
    ['Kenya', 'KEN', 5]
]


7. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.


['Finland','Ireland', 'Iceland']


8. In above countries array, check if there is  a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.


['Albania', 'Bolivia','Ethiopia']


9. Using the above countries array, find the country containing the biggest number of characters.


      Ethiopia
      
      
      10. Using the above countries array, find the country containing only 5 characters.
      
      
      ['Japan', 'Kenya']
      
      
      11. Find the longest word in the webTechs array
      12. Use the webTechs array to create the following array of arrays:
      
      
      [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
      
      
      13. An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
      14. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
      15. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
      16. Print all the elements of array as shown below.
      
      
      const fullStack = [
          ['HTML', 'CSS', 'JS', 'React'],
          ['Node', 'Express', 'MongoDB']
        ]
        
        HTML
        CSS
        JS
        REACT
        NODE
        EXPRESS
      MONGODB
    
      */
     
     
     let randomSentence = '';
     
     for (let i = 0; i < Math.floor(Math.random() * 31); i++) {
         randomSentence += characterSet[Math.floor(Math.random() * characterSet.length)];
        }
        
        console.log(randomSentence);
        
        const hexCharacterSet = '123456789ABCDEF';
        
        let randomHex = '#';
        
        for (let i = 0; i < 6; i++) {
            randomHex += hexCharacterSet[Math.floor(Math.random() * hexCharacterSet.length)];
        }
        
        console.log(randomHex);
        
        let randomRGB = 'rgb(';
        
        for (let i = 0; i < 3; i++) {
            randomRGB += (Math.floor(Math.random() * 256)).toString();
    randomRGB += ', ';
}

randomRGB = randomRGB.substring(0, randomRGB.length - 3);
randomRGB += ')';

console.log(randomRGB);

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]

const newCountries = Array();

for (country of countries) {
    newCountries.push(country.toUpperCase());
}

console.log(newCountries);


const countriesLength = Array();

for (country of countries) {
    countriesLength.push(country.length);
}

console.log(countriesLength);

const finalArray = Array();


for (country of countries) {
    finalArray.push([country, country.substring(0, 3).toUpperCase(), country.length]);
}

console.log(finalArray);

const countriesHavingWordLand = Array();


for (country of countries) {
    if (country.includes('land')) {
        countriesHavingWordLand.push(country);
    }
}

if (countriesHavingWordLand.length) {
    console.log(countriesHavingWordLand);
} else {
    console.log(`There are no countries havig 'land' in its name.`);
}

const countriesEndingWithIa = Array();


for (country of countries) {
    if (country.endsWith('ia')) {
        countriesEndingWithIa.push(country);
    }
}

if (countriesEndingWithIa.length) {
    console.log(countriesEndingWithIa);
} else {
    console.log(`There are no countries havig 'ia' at end of its name.`);
}

const countryListWithLength = Array();

for (country of countries) {
    countryListWithLength.push([country, country.length]);
}

countryListWithLength.sort((a, b) => b[1].toString().localeCompare(a[1].toString()));

console.log(countryListWithLength[0][0]);

for (country of countryListWithLength) {
    if (country[1] == 5) {
        console.log(country[0]);
    }
}

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Express',
    'Node',
    'MongoDB'
]

const webTechsWithLength = Array();

for (webTech of webTechs) {
    webTechsWithLength.push([webTech, webTech.length]);
}

webTechsWithLength.sort((a, b) => b[1].toString().localeCompare(a[1].toString()));

console.log(webTechsWithLength[0][0]);

let keyword = 'MERN';
let MERNacronym = '';

for(let i=0; i<keyword.length; i++){
    for(webTech of webTechs){
        if(webTech.startsWith(keyword[i])){
            MERNacronym = MERNacronym + webTech + ' ';
            break;
        }
    }
}

console.log(MERNacronym.trim());

for(webTech of webTechs){
    console.log(webTech);
}

const fruits = ['banana', 'orange', 'mango', 'lemon'];

const reversedFruits = Array();

for(i=fruits.length-1; i>=0; i--){
    reversedFruits.push(fruits[i]);
}

console.log(reversedFruits);

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]


for(element of fullStack){
    for(inner of element){
        console.log(inner);
    }
}


//-----------------Level 3---------------------

/*

1. Copy countries array(Avoid mutation)
2. Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
3. Sort the webTechs array and mernStack array
4. Extract all the countries contain the word 'land' from the countries array and print it as array
5. Find the country containing the hightest number of characters in the countries array
6. Extract all the countries contain the word 'land' from the countries array and print it as array
7. Extract all the countries containing only four characters from the countries array and print it as array
8. Extract all the countries containing two or more words from the countries array and print it as array
9. Reverse the countries array and capitalize each country and stored it as an array

*/

const countriesCopy = countries.slice();

Object.freeze(countriesCopy);

// rest of the tasks are already done above.