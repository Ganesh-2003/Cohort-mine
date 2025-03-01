const { Router } = require("express");
const router = Router();
const jwt = require("jsonwebtoken");
const userMiddleware = require("../middleware/user");
const { User, Admin, Course } = require("../db");
const { JWT_secret } = require("../config");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic

    const username = req.body.username;
    const password = req.body.password;

    const response = await User.findOne({
        username: username
    })

    if(response){
        res.status(404).json({
            msg: "User Already Exists"
        })
    }
    else{

        User.create({
            username: username,
            passwordd: password
        }).then(function(value){
            res.status(200).json({
                msg: "User Successfully created"
            })
        })

    }
});

router.post('/signin', async (req, res) => {
    // Implement User signin logic

    const username = req.body.username;
    const password = req.body.password;

    const response = await User.findOne({
        username: username,
        password: password
    })

    if(response){
        const jwtToken = jwt.sign({username},JWT_secret);

        res.status(200).json({
            token: jwtToken
        })

    }else{
        res.status(404).json({
            msg: "Invalid User Credentials"
        })
    }

    
    
});

router.get('/courses', userMiddleware, async (req, res) => {
    // Implement listing all courses logic
    const courses =  await Course.find({});

    res.status(200).json({
        courses: courses
    })
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router