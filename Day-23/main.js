/*

--------------------TASK-------------------

1. Generating numbers and marking evens, odds and prime numbers with three different colors. See the image below.

*/

function isPrime(n) {
  if (n <= 2) return false;
  if (n % 2 == 0 || n % 3 == 0) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

document.getElementById('go').addEventListener('click', () => {

  const blocks = document.getElementById('nums').value;
  let container = document.getElementById("pattern")
  container.innerHTML = '';

  let row = document.createElement("div");
  row.classList.add("row");
  container.appendChild(row);
  
  for (let i = 0; i < blocks; i++) {
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
})



/*

--------------------Level 2-------------------

1. Generating the keyboard code code using even listener. The image below

*/

addEventListener('keypress', (e) => {
  document.getElementById('keyText').innerHTML = `You pressed ${String.fromCharCode(e.keyCode)}`;
  document.getElementById('keyCharacter').innerHTML = `${e.keyCode}`;

})