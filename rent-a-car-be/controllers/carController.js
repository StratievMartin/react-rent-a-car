const Car = require('../models/car');

const all_cars = (req, res) => {
    Car.find()
        .sort({ createdAt: -1 })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
};
const car_details = (req, res) => {
    const id = req.params.id;
    console.log(id);
    Car.findById(id)
        .then((result) => {
            console.log(result);
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
};
const create_car = (req, res) => {
    // {
    //     brand: 's-class',
    //     model: 'mercedes',
    //     constructionYear: 2005,
    //     carType: 'economy',
    //     fuel: 'petrol',
    //     seats: 2,
    //     picture: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.auto-data.net%2Fen%2Fmercedes-benz-e-class-model-1393&psig=AOvVaw3k9YBsiTlyYljzAAw_mKE9&ust=1652210962627000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKDcp8-T0_cCFQAAAAAdAAAAABAD',
    //     pricePerDay: 100,
    //     carsAvailable: 3,
    // }
    const data = req.body;
    const car = new Car(data);
    car.save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
};
const update_car = (req, res) => {
    const id = req.params.id;
    const data = req.body;

    Car.findByIdAndUpdate(id, data, { new: true }, (err, result) => {
        if (err) {
            console.log('FFFF',err);
            return res.status(500).send(err);
        } else {
            console.log('FCK', result);
            return res.send(result);
        }
    })
};
const delete_car = (req, res) => {
    const id = req.params.id;
    Car.findByIdAndDelete(id)
        .then((result) => {
            res.send('deleted');
        })
        .catch((err) => {
            console.log(err);
        });
};
module.exports = {
    all_cars,
    car_details,
    create_car,
    update_car,
    delete_car,
};
