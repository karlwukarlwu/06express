const express = require('express')
const app = express()

app.use((req, res, next) => {
    console.log(req.body) // will be undefined
    next()
})

app.post('/', (req, res) => {
    console.log(req.body) // will also be undefined
    res.send('Hello World')
})

app.listen(3000, () => {
    console.log('Server is listening on port 3000')
})
