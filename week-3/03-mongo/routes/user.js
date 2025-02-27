const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    const response = await User.findOne({
        username: username,
        password: password
    })

    if(response) {
        res.status(403).json({
            msg: "User Already Exists"
        })
    }
    
    else {
        User.create({
            username,
            password
        }).then(()=>{
            res.status(200).json({
                msg: "User Created Successfully"
            })
        })
    }

});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic

    const response  = await Course.find({});

    res.status(200).json({
        courses: response
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic

    const courseId = req.params.courseId;
    const username = req.headers.username;
    
    await User.updateOne({
        username: username
    },{
        "$push":{
            purchasedCourses: courseId
        }
    })

    res.status(200).json({
        msg: "Purchase Complete" 
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic

    const username = req.headers.username;

    const response = await User.findOne({
        username: username
    })

    console.log(response.purchasedCourses);

    const courses = await Course.find({
        _id: {
            "$in": response.purchasedCourses
        }
    });

    res.status(200).json({
        courses: courses
    })

});

module.exports = router