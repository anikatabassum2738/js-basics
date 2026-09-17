// loops - they repeat an action a number of times
// Loops - for loop, while loop, do while loop, for in loop, for of loop

// for loop

// for (initialExpression; condition; incrementExpression) {
//     statement
// }

// initialExpression - executed before the loop starts (usually used to initialize a counter variable)
// condition - evaluated before each iteration of the loop. If true, the loop continues. If false, the loop stops.
// incrementExpression - executed after each iteration of the loop (usually used to update the counter variable)

for (let i = 1; i <= 5; i++) {
    console.log('Hello World', i);
}

for (let i = 1; i <= 5; i++) {
    if (i % 2 !== 0) console.log(i);
}