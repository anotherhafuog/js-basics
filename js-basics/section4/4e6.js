const movie = {
    title: 'The SpongeBob SquarePants Movie',
    releaseYear: '2004',
    rating: '7.1',
    director: 'Stephen Hillenburg'
}

showProperties(movie);

function showProperties(obj){
    for(let key in obj){
        if(typeof obj[key] === 'string')
        console.log(key, obj[key]);
    }
}