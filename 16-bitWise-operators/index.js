// operators - arithmetic, assignment, comparison, logical, bitwise
// we use this operators with our variables and constants to create expressions and can implement logics and algorithms

// BitWise operators - it is used to perform bit-level operations on binary numbers. It works on bits and performs the operation bit by bit.

// 1 = 00000001
// 2 = 00000010
// R = 00000011 // 3 = 00000011
// R = 00000000 // 0 = 00000000

console.log(1 | 2); // bitwise OR operator - it returns 1 if either of the bits is 1, otherwise it returns 0

console.log(1 & 2); // bitwise AND operator - it returns 1 if both bits are 1, otherwise it returns 0


// Read,Write,Execute
// 00000100 - Read Permission
// 00000110 - Read and Write Permission
// 00000111 - Read, Write and Execute Permission

// Read,Write,Execute
// 00000100 - Read Permission
// 00000010 - Write Permission
// 00000001 - Execute Permission

const readPermission = 4; // 00000100
const writePermission = 2; // 00000010
const executePermission = 1; // 00000001

let myPermission = 0; 
myPermission = myPermission | readPermission | writePermission; //here we are using bitwise OR operator to combine the permissions
console.log(myPermission); // 6 = 00000110

let message = (myPermission & readPermission) ? 'yes' : 'no'; //here we are using bitwise AND operator to check if the read permission is set
console.log(message); // yes

