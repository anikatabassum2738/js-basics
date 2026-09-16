// operators - arithmetic, assignment, comparison, logical, bitwise
// we use this operators with our variables and constants to create expressions and can implement logics and algorithms

// logical operators

// we use this condition based on multiple conditions.
// three types - AND, OR, NOT

// Logical AND (&&)
// Returns TRUE if both operands are TRUE
console.log(true && true);
console.log(true && false);

let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;
console.log('Eligible:', eligibleForLoan);


// Logical OR (||)
// Returns TRUE if one of the operands is TRUE
let lowIncome = false;
let lowCreditScore = true;
let notEligibleForLoan = lowIncome && lowCreditScore;
console.log(notEligibleForLoan);

// NOT (!)
let applicationRefused = !eligibleForLoan; //if eligibleForLoan is true, ! - this is convert it to false, vice-versa
console.log('Application Refused:', applicationRefused);