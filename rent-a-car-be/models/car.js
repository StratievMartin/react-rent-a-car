const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carSchema = new Schema({
    carType: {
        type: String,
        enum: ['economy', 'estate', 'luxury', 'SUV', 'cargo'],
        // default: 'economy'
    },
    fuel: {
        type: String,
        enum: ['petrol', 'diesel', 'hybrid', 'electric'],
        // default: 'petrol'
    },
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    constructionYear: {
        type: Number,
        required: true
    },
    seats: {
        type: Number,
        required: true
    },
    picture: {
        type: String,
        required: true
    },
    pricePerDay: {
        type: Number,
        required: true
    },
    carsAvailable: {
        type: Number,
        required: true
    }

}, { timestamps: true })

const Car = mongoose.model('Car', carSchema)

module.exports = Car;
