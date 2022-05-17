const User = require('../models/user')

const all_users = (req, res) => {
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
const create_user = (req, res) => {
    // {
    //     fullName: 'Martin Stratiev',
    //     email: 'martinstratiev@gmail.com',
    //     phone: 3591231231,
    //     role: 'customer',
    // }
    const data = req.body
    const user = new User(data)
    user.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        })
}
const update_user = (req, res) => {
    const id = req.params.id
    const data = req.body

    User.findByIdAndUpdate(id, data,
        { new: true },
        (err, result) => {
            if (err) return res.status(500).send(err);
            return res.send(result);
        })
    // .populate('car')
    // .populate('customer')
}
const delete_user = (req, res) => {
    const id = req.params.id
    User.findByIdAndDelete(id)
        .then((result) => {
            res.send('deleted')
        })
        .catch((err) => {
            console.log(err);
        })
}
const check_email = (req, res) => {
    User.findOne({ email: req.params.id })
        .then((result) => {
            result ? res.send(true) : res.send(false)
        })
        .catch((err) => {
            console.log(err);
        })
}
module.exports = {
    all_users,
    user_details,
    create_user,
    update_user,
    delete_user,
    check_email
}