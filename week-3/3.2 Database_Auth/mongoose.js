const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://ganeshpuppala:Ganesh2003@cluster0.ga8zi.mongodb.net/");

const User = mongoose.model('users',{name: String, email: String, password: String});

const user = new User({
    name: 'Ganesh Puppala',
    email: 'ganesh@gmail.com',
    password: '123456'
})

user.save();