/*

--------------------TASK-------------------

1. Create an Animal class. The class will have name, age, color, legs properties and create different methods
2. Create a Dog and Cat child class from the Animal Class.

*/


class Animal {
    constructor(name, age, color, legs) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }

    printInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Color: ${this.color}`);
        console.log(`Legs: ${this.legs}`);
    }
}

class Dog extends Animal {
    constructor(name, age, color, legs, breed) {
        super(name, age, color, legs);
        this.breed = breed;
    }

    bark() {
        console.log('Woof woof!');
    }
}

class Cat extends Animal {
    constructor(name, age, color, legs, isIndoor) {
        super(name, age, color, legs);
        this.isIndoor = isIndoor;
    }

    meow() {
        console.log('Meow meow!');
    }
}

const dog = new Dog('Buddy', 5, 'brown', 4, 'Golden Retriever');
dog.printInfo();
dog.bark();

const cat = new Cat('Fluffy', 3, 'white', 4, true);
cat.printInfo();
cat.meow();

/*

--------------------Level 2-------------------

1. Override the method you create in Animal class

*/

class SweetDog extends Animal {
    constructor(name, age, color, legs, breed) {
        super(name, age, color, legs);
        this.breed = breed;
    }

    bark() {
        console.log('Woof woof!');
    }

    printInfo() {
        super.printInfo();
        console.log(`Breed: ${this.breed}`);
    }
}

const dog2 = new SweetDog('Buddy', 5, 'brown', 4, 'Golden Retriever');
dog2.printInfo();

/*

--------------------Level 3-------------------

1. Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.

*/

class Statistics {
    constructor(sample) {
        this.sample = sample;
    }

    mean() {
        const sum = this.sample.reduce((acc, val) => acc + val, 0);
        return sum / this.sample.length;
    }

    median() {
        const sorted = this.sample.sort((a, b) => a - b);
        const middle = Math.floor(this.sample.length / 2);
        if (this.sample.length % 2 === 0) {
            return (sorted[middle - 1] + sorted[middle]) / 2;
        } else {
            return sorted[middle];
        }
    }

    mode() {
        const counts = {};
        let maxCount = 0;
        let mode = null;
        for (const value of this.sample) {
            if (!counts[value]) {
                counts[value] = 1;
            } else {
                counts[value]++;
            }
            if (counts[value] > maxCount) {
                maxCount = counts[value];
                mode = value;
            }
        }
        return mode;
    }

    range() {
        const sorted = this.sample.sort((a, b) => a - b);
        return sorted[this.sample.length - 1] - sorted[0];
    }

    variance() {
        const mean = this.mean();
        const squaredDiffs = this.sample.map(val => (val - mean) ** 2);
        return squaredDiffs.reduce((acc, val) => acc + val, 0) / this.sample.length;
    }

    standardDeviation() {
        return Math.sqrt(this.variance());
    }

    min() {
        return Math.min(...this.sample);
    }

    max() {
        return Math.max(...this.sample);
    }

    count() {
        return this.sample.length;
    }

    percentile(p) {
        const sorted = this.sample.sort((a, b) => a - b);
        const index = Math.ceil((p / 100) * this.sample.length) - 1;
        return sorted[index];
    }

    frequencyDistribution() {
        const counts = {};
        for (const value of this.sample) {
            if (!counts[value]) {
                counts[value] = 1;
            } else {
                counts[value]++;
            }
        }
        return counts;
    }
}


const sample = [1, 2, 3, 4, 5, 6, 6, 7, 7, 7];
const stats = new Statistics(sample);
console.log(`Sample: ${sample}`);
console.log(`Mean: ${stats.mean()}`);
console.log(`Median: ${stats.median()}`);
console.log(`Mode: ${stats.mode()}`);
console.log(`Range: ${stats.range()}`);
console.log(`Variance: ${stats.variance()}`);
console.log(`Standard deviation: ${stats.standardDeviation()}`);
console.log(`Min: ${stats.min()}`);
console.log(`Max: ${stats.max()}`);
console.log(`Count: ${stats.count()}`);
console.log(`25th percentile: ${stats.percentile(25)}`);
console.log(`75th percentile: ${stats.percentile(75)}`);
console.log(`Frequency distribution: ${JSON.stringify(stats.frequencyDistribution())}`);
