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
    Rent.find({ customer: id }).populate('car')
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
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
