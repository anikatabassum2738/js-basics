// loops - they repeat an action a number of times
// Loops - for loop, while loop, do while loop, for in loop, for of loop

// for in loop

// for (variable in object) {
//     statement
// }

const person = {
    name: 'Mosh',
    age: 30
};

// we want to display all the properties of the person object using a for in loop

for (let key in person) 
    console.log(key, person[key]);

// Dot Notation
person.name

// Bracket Notation
person['name'] //we use it when we dont know the name of the property we want to access. We can use a variable instead of a string to access the property.


const colors = ['red', 'green', 'blue'];

for (let index in colors)
    console.log(index, colors[index]);