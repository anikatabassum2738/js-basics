// create an address object with three properties, street, city, and zip code. initialize an address object, first using a factory function and then using a constructor function.

let address = createAddress('a', 'b', 'c');

console.log(address);

// Factory Function
function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}

let newAddress = new Address('a', 'b', 'c');

console.log('newAddress');

// constructor function
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}