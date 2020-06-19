const express = require('express')
const logger = require('morgan')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 4000
const app = express()

app.use(logger('dev'))

// Creating express app and configuring middleware needed for authentication
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('src/public'))

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workouts', { useNewUrlParser: true })

// app.use(require('../routes/html-routes.js'))
// app.use(require('../routes/db-routes.js'))

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`)
})
