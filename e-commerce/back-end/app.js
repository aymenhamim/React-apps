const express = require('express')
const app = express()

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