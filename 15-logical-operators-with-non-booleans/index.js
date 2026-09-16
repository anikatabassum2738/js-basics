// operators - arithmetic, assignment, comparison, logical, bitwise
// we use this operators with our variables and constants to create expressions and can implement logics and algorithms

// logical operators with non-booleans

// Falsy values - undefined, null, 0, false, '', NaN (Not a Number - result of an invalid mathematical operation)
// Any value that is not falsy is considered truthy. For example, '0', ' ', [], {}, function(){} are all truthy values.

let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor; // if userColor is truthy, it will be assigned to currentColor, otherwise defaultColor will be assigned
console.log(currentColor);

let userColors = undefined;
let defaultColors = 'blue';
let currentColors = userColors || defaultColors; 

console.log(currentColors);