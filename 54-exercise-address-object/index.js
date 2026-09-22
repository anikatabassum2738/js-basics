// create an address object with three properties, street, city, and zip code. When you do that, then create a function called showAddress that takes an address object and displays all the properties of this object along with their value.

let address = {
    street: 'a',
    city: 'b',
    zipCode: 'c'
};

function showAddress(address) {
    for (let key in address)
        console.log(key, address[key]);
}

showAddress(address);