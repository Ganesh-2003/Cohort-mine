const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const jwt = require("jsonwebtoken");
const JWT_secret = require("..");
const { Admin } = require("../db")

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic

    const username = req.body.username;
    const password = req.body.password;

    //Check if a user with the username already exists

    Admin.findOne({
        username: username,
        password: password
    }).then(function(value){
        if(value){
            res.status(403).json({
                msg: "Admin Already Exists"
            })
        }
        else{

            //Admin Creation

            Admin.create({
                username: username,
                password: password
            }).then(function(value){
                res.status(200).json({
                    msg: "Admin Created Successfully"
                })
            })
        }
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signin logic

    const username = req.body.username;
    const password = req.body.password;

    const isValidated = await Admin.findOne({
        username: username,
        password: password
    })

    if(isValidated)
    {
        const jwtToken = jwt.sign({username},JWT_secret);

        res.status(200).json({
            token: jwtToken
        })
    }
    else{
        res.status(411).json({
            msg: "Invalid User Credentials"
        })
    }
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;