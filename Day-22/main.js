/*

--------------------TASK-------------------

1. Create a div container on HTML document and create 100 to 100 numbers dynamically and append to the container div.
      Even numbers background is green
      Odd numbers background is yellow
      Prime numbers background is red

*/

function isPrime(n) {
  if (n <= 2) return false;
  if (n % 2 == 0 || n % 3 == 0) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

let container = document.createElement("div");
container.classList.add("container");
document.getElementById("body").appendChild(container);

let row = document.createElement("div");
row.classList.add("row");
container.appendChild(row);

for (let i = 0; i <= 101; i++) {
  let div = document.createElement("div");
  div.innerText = i;
  div.classList.add("col-2", "num-box");
  if (i % 2 == 0) {
    div.classList.add("bg-success");
  } else {
    div.classList.add("bg-warning");
  }
  if (isPrime(i)) {
    div.classList.remove("bg-success", "bg-warning");
    div.classList.add("bg-danger");
  }
  row.appendChild(div);
  if ((i + 1) % 6 == 0) {
    let div = document.createElement("div");
    div.classList.add("row");
    container.appendChild(div);
    row = div;
  }
}


/*

--------------------Level 2-------------------

1. Use the countries array to display all the countries.See the design

*/

import {countries} from "./countries.js"

let countryContainer = document.createElement("div");
container.classList.add("container");
document.getElementById("body").appendChild(countryContainer);

let countryRow = document.createElement("div");
countryRow.classList.add("row");
countryContainer.appendChild(countryRow);

for (let i = 0; i < countries.length; i++) {
  let div = document.createElement("div");
  div.innerText = countries[i];
  div.classList.add("col-1", "country-box");
  row.appendChild(div);
  if ((i + 1) % 6 == 0) {
    let div = document.createElement("div");
    div.classList.add("row");
    container.appendChild(div);
    row = div;
  }
}