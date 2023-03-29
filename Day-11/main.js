
/*

--------------------TASK-------------------

1. Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
2. Destructure and assign the elements of countries array to fin, est, sw, den, nor
3. Destructure the rectangle object by its properties or keys.

*/

const constants = [2.72, 3.14, 9.81, 37, 100]

const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']

const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
}

const users = [
    {
        name: 'Brook',
        scores: 75,
        skills: ['HTM', 'CSS', 'JS'],
        age: 16
    },
    {
        name: 'Alex',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'David',
        scores: 75,
        skills: ['HTM', 'CSS'],
        age: 22
    },
    {
        name: 'John',
        scores: 85,
        skills: ['HTML'],
        age: 25
    },
    {
        name: 'Sara',
        scores: 95,
        skills: ['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name: 'Martha',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'Thomas',
        scores: 90,
        skills: ['HTM', 'CSS', 'JS'],
        age: 20
    }
]

const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;

console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp);

const [fin, est, sw, den, nor] = countries;

console.log(fin, est, sw, den, nor);

const { width, height, area, perimeter } = rectangle;

console.log(width, height, area, perimeter);

/*

--------------------Level 2-------------------

1. Iterate through the users array and get all the keys of the object using destructuring
2. Find the persons who have less than two skills

*/

for (const { name, scores, skills, age } of users) {
    console.log(name, scores, skills, age);
}

const userHavingLessThanTwoSkills = users.filter(({ skills }) => skills.length < 2);

console.log(userHavingLessThanTwoSkills);


/*

--------------------Level 3-------------------

1. Destructure the countries object print name, capital, population and languages of all countries
2. A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.
3. Write a function called convertArrayToObject which can convert the array to a structure object.
4. Copy the student object to newStudent without mutating the original object. In the new object add the following ?
        Add Bootstrap with level 8 to the front end skill sets
        Add Express with level 9 to the back end skill sets
        Add SQL with level 8 to the data base skill sets
        Add SQL without level to the data science skill sets


*/

import { countriesData } from "./countries_data.js"

console.log(countriesData);

for (const { name, capital, languages, population } of countriesData) {
    console.log(name, capital, languages, population);
}

const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

const [[name, skills, [jsScore, , reactScore]], [name2, skills2, [jsScore2, , reactScore2]]] = students;

console.log(name, skills, jsScore, reactScore);
console.log(name2, skills2, jsScore2, reactScore2);

const convertArrayToObject = (arr) => {
    const finalArr = [];
    for (const [name, skills, scores] of arr) {
        const obj = { name, skills, scores };
        finalArr.push(obj);
    }
    return finalArr;
}

console.log(convertArrayToObject(students));

const student = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node', level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase: [
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience: ['Python', 'R', 'D3.js']
    }
}

const { skills: { frontEnd, backEnd, dataBase, dataScience }, ...rest } = student;

const newStudent = {
    ...rest,
    skills: {
        frontEnd: [
            ...frontEnd,
            { skill: 'Bootstrap', level: 8 }
        ],
        backEnd: [
            ...backEnd,
            { skill: 'Express', level: 9 }
        ],
        dataBase: [
            ...dataBase,
            { skill: 'SQL', level: 8 }
        ],
        dataScience: [
            ...dataScience,
            'SQL'
        ]
    }
};

console.log(newStudent);