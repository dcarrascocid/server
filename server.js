// CONFIGURACION DEL SERVIDOR WEB
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('QUE TAL');
})

app.listen(3000)