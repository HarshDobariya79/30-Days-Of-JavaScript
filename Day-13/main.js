
/*

--------------------TASK-------------------

1. Display the countries array as a table
2. Display the countries object as a table
3. Use console.group() to group logs

*/

import { countries } from "./countries_data.js";

console.table(countries);

for(const country of countries){
    console.table(country);
}

console.group('First Group');

console.log('one');
console.log('two');
console.log('three');

console.groupEnd('First Group');

console.group('Second Group');

console.log('four');
console.log('five');
console.log('six');

console.groupEnd('First Group');


/*
--------------------Level 2-------------------
 
1. 10 > 2 * 10 use console.assert()
2. Write a warning message using console.warn()
3. Write an error message using console.error()

*/

console.assert(10 > 2 * 10, '10 is not greater than 20');

console.warn(`I'm warning you.`);

console.error(`Beep Boop Beep Boop.... Here comes the error.`);


/*
--------------------Level 3-------------------
 
1. Check the speed difference among the following loops: while, for, for of, forEach

*/

const arr = [];

for (let i = 0; i < 10000; i++) {
    arr.push(i);
}

console.time('while-loop');
let i = 0;
while (i < arr.length) {
    i++;
}
console.timeEnd('while-loop');

console.time('for-loop');
for (let i = 0; i < arr.length; i++) {

}
console.timeEnd('for-loop');

console.time('for-of-loop');
for (const item of arr) {

}
console.timeEnd('for-of-loop');

console.time('forEach-loop');
arr.forEach(item => {
});
console.timeEnd('forEach-loop');
