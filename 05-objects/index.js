// reference types - object, array, function

let person = {
    name: 'Mosh',
    age: 30
};

// Dot Notation
person.name = 'John';

// Bracket Notation
// person['name'] = 'Mary';
let selection = 'name';
person[selection] = 'Mary';

console.log(person);
