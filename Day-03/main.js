/*
--------------------TASK-----------------------
1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
2. Check if type of '10' is equal to 10
3. Check if parseInt('9.8') is equal to 10
4. Boolean value is either true or false.
   1. Write three JavaScript statement which provide truthy value.
   2. Write three JavaScript statement which provide falsy value.

5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
   1. 4 > 3
   2. 4 >= 3
   3. 4 < 3
   4. 4 <= 3
   5. 4 == 4
   6. 4 === 4
   7. 4 != 4
   8. 4 !== 4
   9. 4 != '4'
   10. 4 == '4'
   11. 4 === '4'
   12. Find the length of python and jargon and make a falsy comparison statement.

6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
   1. 4 > 3 && 10 < 12
   2. 4 > 3 && 10 > 12
   3. 4 > 3 || 10 < 12
   4. 4 > 3 || 10 > 12
   5. !(4 > 3)
   6. !(4 < 3)
   7. !(false)
   8. !(4 > 3 && 10 < 12)
   9. !(4 > 3 && 10 > 12)
   10. !(4 === '4')
   11. There is no 'on' in both dragon and python

7. Use the Date object to do the following activities
   1. What is the year today?
   2. What is the month today as a number?
   3. What is the date today?
   4. What is the day today as a number?
   5. What is the hours now?
   6. What is the minutes now?
   7. Find out the numbers of seconds elapsed from January 1, 1970 to now.
*/

let firstName = `Harsh`;
let lastName = `Dobariya`;
let country = `India`;
let city = `Ahmedabad`;
let age = 19;
let isMarried = false;
let year = 2023;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

console.log(10 === '10');
console.log(parseInt('9.8') == 10);
console.log(parseInt('9.8') === 10);

console.log(10 === Math.round(9.5));
console.log('abc' === 'a'+'bc');
console.log(true == (5 == 5));

console.log(true === 1);
console.log(' ' === '');
console.log(' ' === true);

console.log((4 > 3) == true);
console.log((4 >= 3) == true);
console.log((4 < 3) == false);
console.log((4 <= 3) == false);
console.log((4 == 4) == true);
console.log((4 === 4) == true);
console.log((4 != 4) == false);
console.log((4 !== 4) == false);
console.log((4 != '4') == false);
console.log((4 == '4') == true);
console.log((4 === '4') == false);

console.log('python'.length != 'jargon'.length);

console.log((4 > 3 && 10 < 12) === true);
console.log((4 > 3 && 10 > 12) === false);
console.log((4 > 3 || 10 < 12) === true);
console.log((4 > 3 || 10 > 12) === true);
console.log(!(4 > 3) === false);
console.log(!(4 < 3) === true);
console.log(!(false) === true);
console.log(!(4 > 3 && 10 < 12) === false);
console.log(!(4 > 3 && 10 > 12) === true);
console.log(!(4 === '4') === true);

console.log(!'python'.includes('on') && !'jargon'.includes('on'));

let today = new Date();

console.log(today.getFullYear());
console.log(today.getMonth() + 1);
console.log(today.getDate());
console.log(today.getDay());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(Math.floor(today.getTime()/1000));


//-----------------Level 2---------------------
/*
1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

   
   Enter base: 20
   Enter height: 10
   The area of the triangle is 100
   
   
   2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
   
   
   Enter side a: 5
   Enter side b: 4
   Enter side c: 3
   The perimeter of the triangle is 12
   
   
   3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
   4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
   5. Calculate the slope, x-intercept and y-intercept of y = 2x -2
   6. Slope is m = (y<sub>2</sub>-y<sub>1</sub>)/(x<sub>2</sub>-x<sub>1</sub>). Find the slope between point (2, 2) and point(6,10)
   7. Compare the slope of above two questions.
   8. Calculate the value of y (y = x<sup>2</sup> + 6x + 9). Try to use different x values and figure out at what x value y is 0.
   9. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
   
   
   Enter hours: 40
   Enter rate per hour: 28
   Your weekly earning is 1120
   
   
   10. If the length of your name is greater than 7 say, your name is long else say your name is short.
   11. Compare your first name length and your family name length and you should get this output.
   
   js
   let firstName = 'Asabeneh'
   let lastName = 'Yetayeh'
    
   
   
   Your first name, Asabeneh is longer than your family name, Yetayeh
   
   
   12. Declare two variables _myAge_ and _yourAge_ and assign them initial values and myAge and yourAge.
   
   js
   let myAge = 250
   let yourAge = 25
   
   
   
   I am 225 years older than you.
   
   
   13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
   
   
   
   Enter birth year: 1995
   You are 25. You are old enough to drive
   
   Enter birth year: 2005
   You are 15. You will be allowed to drive after 3 years.
   
   
   14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
   
   
   Enter number of years you live: 100
   You lived 3153600000 seconds.
   
   
   15. Create a human readable time format using the Date time object
   1. YYYY-MM-DD HH:mm
   2. DD-MM-YYYY HH:mm
   3. DD/MM/YYYY HH:mm
   */
  
let base = prompt('Enter base');
let height = prompt('Enter height');
console.log(`Area of the triangle is:`, 0.5 * base * height);

let a = Number(prompt('Enter the value of a'));
let b = Number(prompt('Enter the value of b'));
let c = Number(prompt('Enter the value of c'));
console.log(`The perimeter of the triangle is:`, (a+b+c));

let sideA = Number(prompt('Enter the value of side A of rectangle'));
let sideB = Number(prompt('Enter the value of side B of rectangle'));
console.log(`Area of the rectangle is:`, sideA * sideB, '\nPerimeter of the rectangle is:', 2 * (sideA + sideB));

const PI = 3.14;

let radius = Number(prompt('Enter radius of the circle'));
console.log(`The area of the circle is:`, PI * Math.pow(radius,2), '\nThe perimeter of the circle is:', 2 * PI * radius);

let m = Number(prompt(`Enter value of m`));
let cVal = Number(prompt(`Enter value of c`));
console.log(`Slope:`,m);
console.log(`X-intercept:`, (-cVal/m));
console.log(`Y-intercept:`, cVal);

let x1 = 2, y1 = 2;
let x2 = 6, y2 = 10;
let slope = (y2 - y1) / (x2 - x1);
console.log(`Slope:`, slope);

console.log(m === slope);

let xVal = Number(prompt(`Enter x`));
console.log(`The value of y is:`, Math.pow(xVal,2) + 6 * xVal + 9);

let hours = Number(prompt(`Enter hours`));
let payPerHour = Number(prompt(`Enther pay per hour`));
console.log(`Total charge:`, hours * payPerHour);

let nameInput = prompt(`Enter your name`);
nameInput.length > 7
    ?console.log(`Your name is long`)
    :console.log(`Your name is short`);


firstName.length > lastName.length
    ?console.log(`first name is longer than last name`)
:console.log(`first name is not longer than last name`);

let myAge = 250
let yourAge = 25

console.log(`I'm ${myAge - yourAge} years older than you`);

let birthYear = Number(prompt(`Enter your birth year`));

(today.getFullYear() - birthYear) >= 18
?console.log(`You're allowed to drive`)
:console.log(`wait for ${today.getFullYear - birthYear} to driver`);

let yearsLived = parseInt(prompt(`Enter number of years you lived`));
let endDate = new Date();
endDate.setFullYear(parseInt(today.getFullYear()) + yearsLived);
console.log(`You lived ${Math.floor((endDate.getTime() - today.getTime())/1000)} seconds`);

console.log(`${today.getFullYear()}-${today.getMonth()}-${today.getDate()} ${today.getHours()}:${today.getMinutes()}`);
console.log(`${today.getDate()}-${today.getMonth()}-${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}`);
console.log(`${today.getDate()}/${today.getMonth()}/${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}`);


//-----------------Level 3---------------------

/*
1.Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
YYY-MM-DD HH:mm eg. 20120-01-02 07:05
*/


console.log(`${today.getFullYear()}-${today.getMonth().toLocaleString(undefined,{minimumIntegerDigits: 2})}-${today.getDate().toLocaleString(undefined,{minimumIntegerDigits: 2})} ${today.getHours().toLocaleString(undefined,{minimumIntegerDigits: 2})}:${today.getMinutes().toLocaleString(undefined,{minimumIntegerDigits: 2})}`);