require('dotenv').config();
const express = require('express');
const app = express();
const axios = require('axios');

const secretKey = 'Enter your Secret Key';

const path = require('path');
app.use(express.static(path.join(__dirname, '../frontend')));

app.use(express.json());


app.get('/success', (req, res) => {
    res.send('Sucess')
})

app.get('/cancel', (req, res) => {
    res.send('Cancelled')
})

app.get('/failure', (req, res) => {
    res.send('Failed')
})

app.post('/', (req, res) => {

    const data = JSON.stringify(req.body)

    const url = "https://api.sandbox.checkout.com/payment-links"

    axios.post(url, data, {
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json",
                "Authorization": secretKey,
            }
        })
        .then(response => {
            res.send(response.data)
        }).catch((err) => {
            console.error(err);
        });

})

const PORT = 5000;
app.listen(PORT, console.log(`App listening on http://localhost:${PORT}`));