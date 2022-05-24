const Rent = require('../models/rent');

const all_rents = (req, res) => {
    Rent.find()
        .sort({ createdAt: -1 })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
};
const rent_details = (req, res) => {
    const id = req.params.id;
    console.log(id);
    Rent.findById(id)
        .populate('car')
        .populate('customer')
        .exec((err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
                res.send(result);
            }
        });
};
const user_rents = (req, res) => {
    const id = req.params.id;
    Rent.find({ customer: id })
        .populate('car')
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
};
const calcRentSum = () => {
    const vip = userRents.length >= 3;
    const pricePerDay = userRents[0].car.pricePerDay;
    const start = new Date(userRents[0].startDate).getTime();
    const end = new Date(userRents[0].endDate).getTime();
    const dif = end - start;
    const rentalDays = dif / (1000 * 60 * 60 * 24);
    let totalPrice = pricePerDay * rentalDays;

    console.log('before discount', totalPrice, '\n', 'days', rentalDays);
    if (vip) {
        totalPrice -= (totalPrice * 15) / 100;
        console.log('/vip/ -15%', totalPrice);
    } else {
        if (rentalDays > 3 && rentalDays < 5) {
            totalPrice -= (totalPrice * 5) / 100;
            console.log('-5%', totalPrice);
        } else if (rentalDays > 5 && rentalDays < 10) {
            totalPrice -= (totalPrice * 7) / 100;
            console.log('-7%', totalPrice);
        } else if (rentalDays > 10) {
            totalPrice -= (totalPrice * 10) / 100;
            console.log('-10%', totalPrice);
        }
    }
};
const create_rent = (req, res) => {
    // {
    //     startDate: '11.11.2022',
    //     endDate: '22.11.2022',
    //     car: '62815746aa25130cd3606db1',
    //     customer: '62815756aa25130cd3606db6'
    // }
    const data = req.body;
    const rent = new Rent(data);
    console.log('NEW RENT',data);
    rent.save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
};

const update_rent = (req, res) => {
    const id = req.params.id;
    const data = req.body;

    Rent.findByIdAndUpdate(id, data, { new: true }, (err, result) => {
        if (err) return res.status(500).send(err);
        return res.send(result);
    })
        .populate('car')
        .populate('customer');
};
const delete_rent = (req, res) => {
    const id = req.params.id;
    Rent.findOneAndDelete({ customer: id })
        .then((result) => {
            res.send('deleted');
        })
        .catch((err) => {
            console.log(err);
        });
};
module.exports = {
    all_rents,
    rent_details,
    create_rent,
    update_rent,
    delete_rent,
    user_rents,
};
