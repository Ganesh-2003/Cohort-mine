const express = require("express")

const app = express();
//Dumb way doesnt help with Repetition

app.get("/health-checkup",function(req,res){
    
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;

    if(username != "Ganesh" || password != "Ganesh2003")
    {
        res.status(400).json({
            msg:"User Does not exists"
        })
        return ;
    }
    
    if(kidneyId != 1 || kidneyId != 2)
    {
        res.status(400).json({
            msg:"You have too many Kidneys"
        })
        return ;
    }

    res.send("You Heart is Healthy bro");
})

app.listen(3000);