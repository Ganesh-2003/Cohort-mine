const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../db");
const { Course } = require("../db")
const router = Router();

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

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic

    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;

    const CourseObject = await Course.create({
        title: title,
        description: description,
        price: price,
        imageLink: imageLink
    })

    console.log(CourseObject)

    res.status(200).json({
        msg: "Course has been created",CourseId: CourseObject._id
    })

});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic

    const response = await Course.find({});
    
    res.status(200).json({
        courses: response
    })

});

module.exports = router;