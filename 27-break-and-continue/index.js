// loops - they repeat an action a number of times
// Loops - for loop, while loop, do while loop, for in loop, for of loop

// break and continue loop

let i = 0;
while (i <= 10) {
    // if (i === 5) break; // break - it will stop the loop when i is equal to 5
    if (i % 2 === 0) {
        i++;
        continue; // continue - it will skip the current iteration when i is even and continue with the next iteration
    }
    console.log(i);
    i++;
}