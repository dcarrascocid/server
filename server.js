// CONFIGURACION DEL SERVIDOR WEB
const express = require('express');
const app = express();
const hbs = require('hbs');

app.use(express.static(__dirname + '/public'));


// express HBS engine
hbs.registerPartials(__dirname + '/view/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about');
});


app.listen(3000, () => {
    console.log('Escuhcando por el Puerto 3000.');
});


// configuracion inicial de server 
// app.get('/', (req, res) => {
//     let salida = {
//         nombre: 'Daniela',
//         edad: 35,
//         url: req.url
//     };
//     res.send(salida);
// });

// app.get('/data', (req, res) => {
// //    res.send(`Hola data path:${req.url}`);
// });