/*

--------------------TASK-------------------

1. Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name
2. Get each of the the paragraph using document.querySelector('#id') and by their id
3. Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
4. Loop through the nodeList and get the text content of each paragraph
5. Set a text content to paragraph the fourth paragraph,Fourth Paragraph
6. Set id and class attribute for all the paragraphs using different attribute setting methods

*/

const firstParagraph = document.querySelector('p');
const secondParagraph = document.querySelector('#second');
const thirdParagraph = document.querySelector('#third');
const allParagraphs = document.querySelectorAll('p');

allParagraphs.forEach(paragraph => {
  console.log(paragraph.textContent);
});

const fourthParagraph = allParagraphs[3];
fourthParagraph.textContent = 'Fourth Paragraph';

firstParagraph.id = 'first';
firstParagraph.className = 'paragraph';

secondParagraph.setAttribute('class', 'paragraph');
secondParagraph.setAttribute('id', 'second');

thirdParagraph.id = 'third';
thirdParagraph.classList.add('paragraph');

fourthParagraph.setAttribute('class', 'paragraph');
fourthParagraph.id = 'fourth';


/*

--------------------Level 2-------------------

1. Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
2. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
3. Set text content, id and class to each paragraph

*/

const paragraphs = document.querySelectorAll('p');
paragraphs.forEach(paragraph => {
  paragraph.style.color = 'blue';
  paragraph.style.backgroundColor = 'white';
  paragraph.style.border = '2px solid black';
  paragraph.style.fontSize = '20px';
  paragraph.style.fontFamily = 'Verdana, sans-serif';
});

for (let i = 0; i < paragraphs.length; i++) {
  if (i === 0 || i === 2) {
    paragraphs[i].style.color = 'green';
  } else {
    paragraphs[i].style.color = 'red';
  }
}

// 3. Set text content, id and class to each paragraph
paragraphs[0].textContent = 'New First Paragraph';
paragraphs[0].id = 'new-first';
paragraphs[0].classList.add('new-paragraph');

paragraphs[1].textContent = 'New Second Paragraph';
paragraphs[1].id = 'new-second';
paragraphs[1].classList.add('new-paragraph');

paragraphs[2].textContent = 'New Third Paragraph';
paragraphs[2].id = 'new-third';
paragraphs[2].classList.add('new-paragraph');

paragraphs[3].textContent = 'New Fourth Paragraph';
paragraphs[3].id = 'new-fourth';
paragraphs[3].classList.add('new-paragraph');
