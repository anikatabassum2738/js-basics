const numbers = [1, -1, 2, 3];

const filtered = numbers.filter(function (value) {
    return value >= 0;
});
console.log(filtered);


const filtered1 = numbers.filter(value => value >= 0);
console.log(filtered1);


const filtered2 = numbers.filter(n => n >= 0);
console.log(filtered2);