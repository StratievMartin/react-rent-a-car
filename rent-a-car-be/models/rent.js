// Business rules:
// When a vehicle is rented the number of available vehicles should be updated
// If the rental period is:
// More than 3 days - 5% discount
// More than 5 days - 7% discount
// More than 10 days - 10% discount
// If a customer has rented a vehicle more than 3 times in the last 60 days, they would be designated as
// VIP customers and get a discount of 15%.const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const rentalEvent = new Schema({
    startDate: {
        type: String,
        required: true
    },
    endDate: {
        type: String,
        required: true
    },
    //relationship with car
    car: {
        type: String,
        required: true
    },
    //relationship with user.customer
    customer: {
        type: String,
        required: true
    },
}, { timestamps: true })
