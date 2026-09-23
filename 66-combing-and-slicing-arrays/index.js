const first = [1, 2, 3];
const second = [4, 5, 6];
const third = [{ id: 1 }];

const combined = first.concat(second);
const combined2 = third.concat(second);
third[0].id = 10;

const slice = combined.slice(2, 4);
const slice2 = combined.slice(2);
const slice3 = combined.slice();

console.log(combined);
console.log(combined2);
console.log(slice);
console.log(slice2);
console.log(slice3);