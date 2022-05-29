const express = require('express')
const cors = require('cors');
const app = express()
const port = 1111;

// routes
const carRoutes = require('./routes/carRoutes')
const userRoutes = require('./routes/userRoutes')
const rentRoutes = require('./routes/rentRoutes')

const mongoose = require('mongoose')
const morgan = require('morgan')

app.use(cors());
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

//mongoenv
const dbURI = `mongodb+srv://martin:rentacaruni@rent-a-car-uni.f9y07.mongodb.net/rent-a-car-uni?retryWrites=true&w=majority`
mongoose.connect(dbURI)
    .then((res) => {
        app.listen(port)
        console.log('Connected to db!');
    })
    .catch((err) => console.log(err))


app.get('/', (req, res) => {
    res.redirect('/cars')
})

app.use(carRoutes)
app.use(userRoutes)
app.use(rentRoutes)

app.use((req, res) => {
    res.status(404)
    res.send('<h2>Not Found</h2>')
})