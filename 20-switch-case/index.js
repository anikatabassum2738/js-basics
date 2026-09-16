// conditional statements - if else, switch case

// Switch Case

// let role;
let role = 'guest';

switch (role) {
    case 'guest':
        console.log('Guest User');
        break;
    case 'moderator':
        console.log('Moderator User');
        break;
    default:
        console.log('Unknown User');
}

if (role === 'guest')
    console.log('Guest user');
else if (role === 'moderator')
    console.log('Moderator user');
else
    console.log('Unknown user');