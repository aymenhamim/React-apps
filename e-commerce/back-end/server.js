const mongoose = require('mongoose')
const dotenv = require('dotenv')

const express = require('express')
const app = require('./app')

dotenv.config({ path: './config.env' })

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD)

mongoose.connect(DB).then((con) => {
    // console.log(con.connections);
    console.log('DB connection successful');
});

app.get('/', (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            a: 'hello nodemon'
        }
    })
})

const port = 3000
app.listen(port, () => {
    console.log(`Listening to the server on ${port} port`)
})