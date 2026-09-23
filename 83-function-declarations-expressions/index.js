// function declaration
function walk() {
    console.log('walk');
}

// annonymous function expression
let run = function () {
    console.log('run');
};
run();

let move = run;
run();
move();
 
// named function expression
let run2 = function walk() {
    console.log('run2');
 };
