/*

--------------------TASK-------------------

1. Store you first name, last name, age, country, city in your browser localStorage.

*/

console.log(localStorage);
localStorage.setItem('firstName', 'Harsh');
localStorage.setItem('lastName', 'Dobariya');
localStorage.setItem('country', 'India');
localStorage.setItem('city', 'Ahmedabad');

console.log(localStorage);


/*

--------------------Level 2-------------------

1. Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.

*/

const student = {
    firstName: 'Harsh',
    lastName: 'Dobariya',
    age: 19,
    skills: ['Python', 'C++', 'Django', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    country: 'India',
}

const studentJSON = JSON.stringify(student, undefined, 4);

localStorage.setItem('enrolled', studentJSON);

/*

--------------------Level 3-------------------

1. Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

*/

const personAccount = {
    firstname: 'Harsh',
    lastname: 'Dobariya',
    incomes: [],
    expenses: [],

    totalIncome() {
        return this.incomes.reduce((total, income) => total + income.amount, 0);
    },

    totalExpense() {
        return this.expenses.reduce((total, expense) => total + expense.amount, 0);
    },

    accountInfo() {
        return `Account Information:\nName: ${this.firstname} ${this.lastname}\nTotal Income: ${this.totalIncome()}\nTotal Expense: ${this.totalExpense()}\nAccount Balance: ${this.accountBalance()}`;
    },

    addIncome(description, amount) {
        this.incomes.push({ description, amount });
    },

    addExpense(description, amount) {
        this.expenses.push({ description, amount });
    },

    accountBalance() {
        return this.totalIncome() - this.totalExpense();
    }
};

personAccount.addIncome('Salary', 5000000);
personAccount.addIncome('Bonus', 500000);
personAccount.addExpense('Rent', 100000);
personAccount.addExpense('Food', 5500);
personAccount.addExpense('Transportation', 5000);

personAccountJSON = JSON.stringify(personAccount, undefined, 4);

localStorage.setItem('person',personAccountJSON);