const User = require('../models/user')

const user_index = (req, res) => {
    User.find().sort({ createdAt: -1 })
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        })
}
const user_details = (req, res) => {
    const id = req.params.id;
    console.log(id);
    User.findById(id)
        .then(result => {
            console.log(result);
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        })
}
const user_create_get = (req, res) => {
    const user = new User({
        fullName: 'Martin Stratiev',
        email: 'martinstratiev@gmail.com',
        phone: 3591231231,
        role: 'customer',
    })
    user.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        })
}
const user_delete = (req, res) => {
    const id = req.params.id
    User.findByIdAndDelete(id)
        .then((result) => {
            res.send('deleted')
        })
        .catch((err) => {
            console.log(err);
        })
}
module.exports = {
    user_index,
    user_details,
    user_create_get,
    user_delete
}