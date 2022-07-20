let address = new address('308 Negra Arroyo Lane', 'Albuquerque, New Mexico', '87104');

console.log(address);

function createAddress(street, city, zipCode){
    return {
        street,
        city,
        zipCode
    };
}

function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}