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
            password: password
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

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.username;

    await User.updateOne({
        username: username
    },{
        "$push":{
            purchasedCourses: courseId
        }
    })

    res.json({
        msg: "Purchase Completed"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic

    const username = req.username;

    const user = await User.findOne({
        username: username
    })

    const courses = await Course.find({
        _id:{
            "$in": user.purchasedCourses
        }
    })

    res.json({
        courses: courses
    })
});

module.exports = router