const players = document.querySelector('.player');

document.querySelector('#addPlayer').addEventListener('click', () => {
    const firstName = document.querySelector('#firstName').value;
    const lastName = document.querySelector('#lastName').value;
    const country = document.querySelector('#country').value;
    const score = document.querySelector('#score').value;

    console.log(firstName);
    console.log(lastName);
    console.log(country);
    console.log(score);

    if (firstName == null || lastName == null || country == null || score == null) {
        document.querySelector('#input-warning').innerHTML = 'All fields are required';
    } else {
        document.querySelector('#input-warning').innerHTML = '';
        addElement(firstName, lastName, country, score);
    }
    document.querySelector('#firstName').value = null;
    document.querySelector('#lastName').value = null;
    document.querySelector('#country').value = null;
    document.querySelector('#score').value = null;

})

function addElement(firstName, lastName, country, score) {

    const date = new Date();
    const options = {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    const formattedDate = date.toLocaleString('en-US', options).toUpperCase();

    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row", "bg-info", "m-1", "pt-2", "px-2", "pb-1", "rounded", "bg-info", "player");

    const col1Div = document.createElement("div");
    col1Div.classList.add("col-3");

    const nameDiv = document.createElement("div");
    nameDiv.classList.add("text-white", "font-weight-bold");
    nameDiv.textContent = firstName + " " + lastName;
    col1Div.appendChild(nameDiv);

    const dateDiv = document.createElement("div");
    dateDiv.classList.add("text-light", "date");
    dateDiv.textContent = formattedDate;
    col1Div.appendChild(dateDiv);

    rowDiv.appendChild(col1Div);

    const col2Div = document.createElement("div");
    col2Div.classList.add("col-3", "pt-2", "text-white");
    col2Div.textContent = country;
    rowDiv.appendChild(col2Div);

    const col3Div = document.createElement("div");
    col3Div.classList.add("col-3", "pt-2", "text-white");
    col3Div.textContent = score;
    rowDiv.appendChild(col3Div);

    const col4Div = document.createElement("div");
    col4Div.classList.add("col-3", "text-white");

    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("d-flex", "justify-content-center", "align-items-center");

    const binDiv = document.createElement("div");
    binDiv.classList.add("d-flex", "justify-content-center", "align-items-center", "btn", "text-light", "bg-dark", "round-buttons", "pt-1", "rounded-circle", "m-1");

    const binImg = document.createElement("img");
    binImg.src = "./bin.png";
    binImg.style.width = "20px";
    binImg.style.height = "20px";
    binDiv.appendChild(binImg);
    buttonsDiv.appendChild(binDiv);

    const minusFiveSpan = document.createElement("span");
    minusFiveSpan.classList.add("d-flex", "justify-content-center", "align-items-center", "btn", "text-light", "bg-dark", "round-buttons", "text-center", "rounded-circle", "m-1");
    minusFiveSpan.textContent = "-5";
    buttonsDiv.appendChild(minusFiveSpan);

    const plusFiveSpan = document.createElement("span");
    plusFiveSpan.classList.add("d-flex", "justify-content-center", "align-items-center", "btn", "text-light", "bg-dark", "round-buttons", "text-center", "rounded-circle", "m-1");
    plusFiveSpan.textContent = "+5";
    buttonsDiv.appendChild(plusFiveSpan);

    col4Div.appendChild(buttonsDiv);
    rowDiv.appendChild(col4Div);

    document.querySelector('#players-data').appendChild(rowDiv);

    binDiv.addEventListener('click', () => {
        rowDiv.remove();
    })

    plusFiveSpan.addEventListener('click', () => {
        col3Div.textContent = parseInt(col3Div.textContent) + 5;
    })

    minusFiveSpan.addEventListener('click', () => {
        col3Div.textContent = parseInt(col3Div.textContent) - 5;
    })

}