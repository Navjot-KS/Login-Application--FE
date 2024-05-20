fetch('http://localhost:8080/secret') 
    .then((res) => res.json()) 
    .then((data) => console.log(data))
    .catch((err) => console.log('ERROR', err))
    