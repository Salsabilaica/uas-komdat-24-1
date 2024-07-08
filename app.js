'use strict'

const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express()
app.get('/', (req, res) => {
    res.send('Hello! Ini saya Salsabila ramadani-S1SI220373-UAS-KOMDAT\n')
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)