let address = {
    street: '308 Negra Arroyo Lane',
    city: 'Albuquerque, New Mexico',
    zipCode: '87104'
}

function showAddress(address) {
    for (let key in address)
    console.log(key, address[key]);
}

showAddress(address);