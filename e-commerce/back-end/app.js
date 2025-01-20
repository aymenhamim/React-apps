const mongoose = require('mongoose');
const express = require('express')

const app = express();

const productsRouter = require('./routes/productsRouter')

app.route('api/products/').get((req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            name: 'the first request has been sent successfuly'
        }
    })
})

app.use('api/v1/products', productsRouter)




module.exports = app;