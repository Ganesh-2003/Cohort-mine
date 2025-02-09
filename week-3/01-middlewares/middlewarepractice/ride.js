const express = require('express');

const app = express();

function isOldEnoughMiddleware(req, res, next){

    const age = req.query.age

    if(age>=14){
        next();
    }
    else{
        res.json({
            msg: "You are underage for this ride"
        })
    }
}

app.post("/ride1", isOldEnoughMiddleware, function(req, res){

    res.status(200).json({
        msg:"You have successfully completed Ride 1"
    })

})

app.post("/ride2", isOldEnoughMiddleware, function(req,res){

    res.status(200).json({
        msg: "You have successfully completed Ride 2"
    })

})

app.listen(3000);