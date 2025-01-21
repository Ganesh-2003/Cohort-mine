const express = require('express');

const app = express();

app.use(express.json());

app.post("/health-checkup", function(req,res){
    const Kidneys = req.body.Kidneys;
    const kidneyLength = Kidneys.length;

    res.send("You have " + kidneyLength +  " kidneys")
})

// global catches
let errorCount = 0;
app.use(function(err,req,res,next){
    errorCount++;
    res.status(403).json({
        msg : "Sorry Something is up with your Server"
    })
})

app.listen(3000);