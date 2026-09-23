const numbers = [1, 2, 3, 4];

// End
const last = numbers.pop(); //remove the last element
console.log(numbers);

// Beginning
const first = numbers.shift(); //remove the first element
console.log(numbers);

// Middle
numbers.splice(2, 2); //remove element somewhere in the middle of an array
console.log(numbers);