// Hoisting is the process of moving function declarations to the top of the file. And this is done automatically by the JavaScript engine that is executing this code. So that's the reason we can call functions that are defined using the function declaration syntax before their definition.


// function declaration
walk();

function walk() {
    console.log('walk');
}


// annonymous function expression
let run = function () {
    console.log('run');
};
run();

