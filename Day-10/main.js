
/*

--------------------TASK-------------------

1. create an empty set
2. Create a set containing 0 to 10 using loop
3. Remove an element from a set
4. Clear a set
5. Create a set of 5 string elements from array
6. Create a map of countries and number of characters of a country

*/

const st = new Set();

for(let i=0; i<=10; i++){
    st.add(i);
}

console.log(st);

st.delete(5);

console.log(st);

st.clear();

const nums = ['One', 'Two', 'Three', 'Four', 'Five'];

const numbers = new Set(nums);

console.log(numbers);

const countries = new Set(["United States", "Canada", "Mexico", "Brazil", "France", "Germany", "India", "China", "Japan", "Australia"]);
const countriesCounts = new Map();

for(const country of countries){
    countriesCounts.set(country,country.length);
}

console.log(countriesCounts);

/*

--------------------Level 2-------------------

1. Find a union b
2. Find a intersection b
3. Find a with b

*/

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]

const aUnionB = new Set([...a,...b]);

console.log(aUnionB);

bSet = new Set(b);

const aIntersectionB = a.filter(num => bSet.has(num));

console.log(aIntersectionB);

// Can't understand what does it mean by a with b
