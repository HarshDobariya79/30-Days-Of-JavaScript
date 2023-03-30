
/*

--------------------TASK-------------------

1. Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
2. The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.
3. Write a pattern which identify if a string is a valid JavaScript variable

*/

const sentence = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month';

const incomeArr = sentence.match(/[\d]+/g)

const income = incomeArr.reduce((income, sum) => income + parseInt(sum), 0);

console.log(income);

const pointsPositions = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.';

const pointsArr = pointsPositions.match(/([-]?)(\d)+/g);

const finalPosition = pointsArr.reduce((point, sum) => point + parseInt(sum), 0);

console.log(finalPosition);

const isValidVariable = (str) => {
    return /^[$A-Z_][0-9A-Z_$]*$/i.test(str);
}

console.log(isValidVariable('first_name'));
console.log(isValidVariable('first-name'));
console.log(isValidVariable('1first_name'));
console.log(isValidVariable('firstname'));

/*

--------------------Level 2-------------------

1. Write a function called tenMostFrequentWords which get the ten most frequent word from a string?

*/

function tenMostFrequentWords(str) {
    const words = str.toLowerCase().match(/\b\w+\b/g);
    const wordCount = {};
    
    for (const word of words) {
        wordCount[word] = (wordCount[word] || 0) + 1;
    }
    
    const sortedWordCount = Object.entries(wordCount).sort((a, b) => b[1] - a[1]);
    
    return sortedWordCount.slice(0, 10);
}

const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
console.log(tenMostFrequentWords(paragraph))

/*

--------------------Level 3-------------------

1. Write a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.

*/

const uglyText = '%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?';

const refinedText = uglyText.replace(/[^\w ]/g,'');

console.log(refinedText);

console.log(tenMostFrequentWords(refinedText).slice(0,3));