// loops - they repeat an action a number of times
// Loops - for loop, while loop, do while loop, for in loop, for of loop

// do while loop

// do {
//     statement
// } while (condition);


// for (let i = 1; i <= 5; i++) {
//     if (i % 2 !== 0) console.log(i);
// }

// let i = 0;
// while (i < 5) {
//     if (i % 2 !== 0) console.log(i);
//     i++;
// }

let i = 0;
do {
    if (i % 2 !== 0) console.log(i);
    i++;
} while (i < 5);

// difference between while and do while loop is that do while loop will run the code block at least once even if the condition is false. and while loop will not run the code block if the condition is false.