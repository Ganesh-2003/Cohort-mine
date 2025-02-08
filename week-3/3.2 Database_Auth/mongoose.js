const express = require('express');

const app = express();

const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://ganeshpuppala:Ganesh2003@cluster0.ga8zi.mongodb.net/");

const User = mongoose.model('users',{name: String, email: String, password: String});

app.use(express.json());

app.post("/signin", async function(req, res) {

    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existingUser = await User.findOne({email: username});

    if(existingUser)
    {
        return res.status(400).json({
            msg:"User Already Existing in Database Please Sign in"
        })
    }

    const user = new User({
        name: name,
        email: username,
        password: password
    })

    user.save();

    res.json({
        msg: "User Successfully Created"
    })
});

app.listen(3000);




