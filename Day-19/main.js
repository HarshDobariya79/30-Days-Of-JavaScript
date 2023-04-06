/*

--------------------TASK-------------------

1. Create a closure which has one inner function

*/

function outerFunction() {
    let x = 5;

    function innerFunction() {
        console.log(x);
    }

    return innerFunction;
}

const myInnerFunction = outerFunction();

myInnerFunction();


/*

--------------------Level 2-------------------

1. Create a closure which has three inner functions

*/

function counter() {
    let count = 0;

    function increase() {
        count += 1;
        console.log(`count: ${count}`);
    }

    function decrease() {
        count -= 1;
        console.log(`count: ${count}`);
    }

    function reset() {
        count = 0;
        console.log(`count: ${count}`);
    }

    return {
        increase: increase,
        decrease: decrease,
        reset: reset,
    };
}

const counterOne = counter();

counterOne.increase();
counterOne.increase();
counterOne.decrease();
counterOne.reset();


/*

--------------------Level 3-------------------

1. Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

*/

function personAccount(firstName, lastName) {
    let incomes = [];
    let expenses = [];

    function addIncome(description, amount) {
        incomes.push({ description, amount });
    }

    function addExpense(description, amount) {
        expenses.push({ description, amount });
    }

    function totalIncome() {
        let total = 0;
        for (let income of incomes) {
            total += income.amount;
        }
        return total;
    }

    function totalExpense() {
        let total = 0;
        for (let expense of expenses) {
            total += expense.amount;
        }
        return total;
    }

    function accountInfo() {
        return `${firstName} ${lastName}'s account:\nTotal Income: $${totalIncome()}\nTotal Expenses: $${totalExpense()}`;
    }

    function accountBalance() {
        return totalIncome() - totalExpense();
    }

    return {
        addIncome,
        addExpense,
        accountInfo,
        accountBalance
    };
}

const personOne = personAccount("First1", "Last1");

personOne.addIncome("Salary", 50000);
personOne.addIncome("Bonus", 10000);
personOne.addExpense("Rent", 15000);
personOne.addExpense("Groceries", 5000);
personOne.addExpense("Car Insurance", 1000);

console.log(personOne.accountInfo());
console.log(personOne.accountBalance());
