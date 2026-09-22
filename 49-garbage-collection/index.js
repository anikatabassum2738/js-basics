// You tell the computer: "Remember a user named Alex."
// The computer assigns a box in memory for this.
let user = { name: "Alex" }; 

// Now, you change your mind and empty the variable.
user = null; 

// The box containing { name: "Alex" } is now completely cut off.
// You can no longer access it or use it in your code.


// Garbage collection in JavaScript is like a smart, automatic cleaning robot for your computer's memory.When you write code, your program creates data (like variables, text, or objects) and stores them in the computer's memory. In some older programming languages, you had to manually tell the computer to delete things when you were done. If you forgot, your computer would run out of memory and crash.JavaScript fixes this by managing memory automatically.