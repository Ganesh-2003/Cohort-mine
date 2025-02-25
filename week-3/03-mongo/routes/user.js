const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User } = require("../db");

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

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router