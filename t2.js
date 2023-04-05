const express = require('express')
const app = express()

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.body) // will contain the parsed JSON data
    next()
})

app.post('/', (req, res) => {
    console.log(req.body) // will also contain the parsed JSON data
    res.send('Hello World')
})

app.listen(3000, () => {
    console.log('Server is listening on port 3000')
})
