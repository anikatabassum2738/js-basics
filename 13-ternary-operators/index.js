// operators - arithmetic, assignment, comparison, logical, bitwise
// we use this operators with our variables and constants to create expressions and can implement logics and algorithms

// ternary / conditional operators

// if a customer has more than 100 points,
// they are a 'gold' customer, otherwise,
// they are a 'silver' customer.

let points = 110;
let type1 = points > 100 ? 'gold' : 'silver'; //if type is true, then 'gold' will be assigned to type, otherwise 'silver' will be assigned to type. the question mark (?) is used to separate the condition from the two possible values, and the colon (:) is used to separate the two possible values from each other.
console.log(type1);

let type2 = points > 120 ? 'gold' : 'silver'; 
console.log(type2);