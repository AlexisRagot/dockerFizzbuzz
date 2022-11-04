const express = require('express')
const serviceRoutes = require('./routes/index')

const app = express()
app.use('/', serviceRoutes)

const PORT = 8081
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => {
    console.log(`Server running on port ${PORT}`)
})