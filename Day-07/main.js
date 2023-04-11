/*

--------------------TASK-------------------

1. Declare a function fullName and it print out your full name.
2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
3. Declare a function addNumbers and it takes two two parameters and it returns sum.
4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
6. A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
11. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

    - The same groups apply to both men and women.
    - Underweight: BMI is less than 18.5
    - Normal weight: BMI is 18.5 to 24.9
    - Overweight: BMI is 25 to 29.9
    - Obese: BMI is 30 or more

14. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

    console.log(findMax(0, 10, 5))
    10
    console.log(findMax(0, -10, -2))
    0

*/

function myFullName(){
    console.log('Harsh Dobariya');
}

myFullName();

function fullName(firstName, lastName){
    return `${firstName} ${lastName}`;
}

console.log(fullName('Harsh','Dobariya'));

function addTwo(first, second){
    return (first + second);
}

console.log(addTwo(4, 5));

function rectangleArea(length, breadth){
    return (length * breadth);
}

console.log(rectangleArea(5, 4));

function rectanglePerimeter(length, breadth){
    return (2*(length + breadth));
}

console.log(rectanglePerimeter(5, 4));

const rectangleVolume = (length, breadth, height) => length * breadth * height;

console.log(rectangleVolume(3, 4, 5));

const circleArea = radius => Math.PI * Math.pow(radius,2);

console.log(circleArea(5));

const cricleCircumference = radius => 2 * Math.PI * radius;

console.log(cricleCircumference(5));

const density = (mass, volume) => mass/volume;

console.log(density(5, 4));

const speed = (distance, time) => distance / time;

console.log(speed(500, 60));

const gravity = mass => mass * 9.8;

console.log(gravity(40));

const degToFer = degree => 9 / 5 * degree + 32;

console.log(degToFer(22));

const BMI = (mass, height) => {

    const bmi = mass / Math.pow(height,2);

    if(bmi < 18.5){
        console.log(`Underweight`);
    }
    else if(bmi < 25){
        console.log(`Normal weight`);
    }
    else if(bmi < 30){
        console.log(`Overweight`);
    }
    else{
        console.log(`Obese`);
    }

}

const checkSeason = month => {
    if (["December", "January", "February"].includes(month)) {
      return "Winter";
    } else if (["March", "April", "May"].includes(month)) {
      return "Spring";
    } else if (["June", "July", "August"].includes(month)) {
      return "Summer";
    } else if (["September", "October", "November"].includes(month)) {
      return "Autumn";
    } else {
      return "Invalid input";
    }
  };

  
console.log(checkSeason('November'));

const maxOfThree = (a, b, c) => {
    if(a>=b){
        if(a>=c){
            return a;
        }else{
            return c;
        }
    }else if(b>=c){
        return b;
    }else{
        return c;
    }
}

console.log(maxOfThree(4,5,6));
