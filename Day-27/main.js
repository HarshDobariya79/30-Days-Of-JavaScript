/*

--------------------TASK-------------------

1. Create the following portfolio using HTML, CSS, and JavaScript

*/

const roleData = [
    {
        'image': 'fire.png',
        'role': 'Motivational Speaker',
    },
    {
        'image': 'full-stack.png',
        'role': 'Full Stack Developer',
    },
    {
        'image': 'hackathon.png',
        'role': 'Competitive Programmer',
    },
    {
        'image': 'api.png',
        'role': 'Postman Student Expert',
    },
];

const skillData = [
    {
        'tech': 'PYTHON',
        'color': '#11114E',
    },
    {
        'tech': 'DJANGO',
        'color': '#66cdaa',
    },
    {
        'tech': 'C++',
        'color': '#b4eeb4',
    },
    {
        'tech': 'HTML',
        'color': '#cfead9',
    },
    {
        'tech': 'CSS',
        'color': '#eedd82',
    },
    {
        'tech': 'JAVASCRIPT',
        'color': '#82cda8',
    },
];

const roleIcon = document.querySelector('#role-img');
const roleText = document.querySelector('#role');

let roleIterator = 0;

document.querySelector('#role').addEventListener('animationiteration', () => {
    roleIcon.src = roleData[roleIterator]['image'];
    roleText.innerHTML = roleData[roleIterator]['role'];

    roleIterator++;
    if (roleIterator >= roleData.length) {
        roleIterator = 0;
    }

})

const skillText = document.querySelector('#skill');
let skillIterator = 0;

document.querySelector('#skill').addEventListener('animationiteration', () => {
    skillText.innerHTML = skillData[skillIterator]['tech'];
    skillText.style.color = skillData[skillIterator]['color'];

    skillIterator++;
    if (skillIterator >= skillData.length) {
        skillIterator = 0;
    }

})