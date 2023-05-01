const contentArea = document.querySelector('#content-area')

console.log('hello')
const sentence = '30 DAYS OF JAVASCRIPT CHALLENGE 2022 ASABENEH YETAYEH'

document.querySelector('#content-area').addEventListener('animationiteration', () => {
    contentArea.innerHTML = '';
    for(const i of sentence){
        const character = document.createElement('span');
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        console.log(randomColor);
        character.style.color = '#'+randomColor;
        character.innerText = i;
        contentArea.append(character);
    }
    document.querySelector('body').style.backgroundColor = '#' + Math.floor(Math.random()*16777215);

})