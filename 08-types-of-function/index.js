// reference types - object, array, function

// performing a task - does not return a value
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}
greet('John', 'Doe');

// calculating a value - returns a value
function square(number) {
    return number * number;
}
// let result = square(5);
// console.log(result);
console.log(square(2));