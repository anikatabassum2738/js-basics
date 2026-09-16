// reference types - object, array, function

function greet(name) { //(name) is a parameter, a placeholder for the value that will be passed in when the function is invoked
    console.log('Hello, ' + name + '!'); // function declaration, concatination - is used to combine strings and variables
}

greet('John'); // function invocation, passing an argument
greet('Mary');

// function can have multiple parameters
function greet2(firstName, lastName) {
    console.log('Hello, ' + firstName + ' ' + lastName + '!');
}
greet2('John', 'Doe');
greet2('Mary', 'Smith');