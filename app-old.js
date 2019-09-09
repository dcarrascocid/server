const http = require('http');

http.createServer((req, res) => {
        res.write('hola');
        res.end();
    })
    .listen(3000);

console.log('Escuchando el puerto 3000');