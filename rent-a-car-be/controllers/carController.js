const Car = require('../models/car')

const car_index = (req, res) => {
    Car.find().sort({ createdAt: -1 })
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        })
}
const car_details = (req, res) => {
    const id = req.params.id;
    console.log(id);
    Car.findById(id)
        .then(result => {
            console.log(result);
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        })
}
const car_create_get = (req, res) => {
    const car = new Car({
        brand: 'c-class',
        model: 'mercedes',
        constructionYear: 2005,
        carType: 'economy',
        fuel: 'petrol',
        seats: 2,
        picture: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.auto-data.net%2Fen%2Fmercedes-benz-e-class-model-1393&psig=AOvVaw3k9YBsiTlyYljzAAw_mKE9&ust=1652210962627000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKDcp8-T0_cCFQAAAAAdAAAAABAD',
        pricePerDay: 100,
        carsAvailable: 3,
    })
    car.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        })
}
const car_delete = (req, res) => {
    const id = req.params.id
    Car.findByIdAndDelete(id)
        .then((result) => {
            res.send('deleted')
        })
        .catch((err) => {
            console.log(err);
        })
}
module.exports = {
    car_index,
    car_details,
    car_create_get,
    car_delete
}