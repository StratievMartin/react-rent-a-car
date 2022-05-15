const Rent = require('../models/rent')

const rent_index = (req, res) => {
    Rent.find().sort({ createdAt: -1 })
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        })
}
const rent_details = (req, res) => {
    const id = req.params.id;
    console.log(id);
    Rent.findById(id).populate('car').populate('customer').exec((err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            res.send(result)
        }
    })

}
const rent_create_get = (req, res) => {
    const rent = new Rent({
        startDate: '11.11.2022',
        endDate: '22.11.2022',
        car: '62815746aa25130cd3606db1',
        customer: '62815756aa25130cd3606db6'
    })
    rent.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        })
}
const rent_delete = (req, res) => {
    const id = req.params.id
    Rent.findByIdAndDelete(id)
        .then((result) => {
            res.send('deleted')
        })
        .catch((err) => {
            console.log(err);
        })
}
module.exports = {
    rent_index,
    rent_details,
    rent_create_get,
    rent_delete
}