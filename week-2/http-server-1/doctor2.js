const express = require("express");
const app = express();
const port = 3001;

function calculateSum2nos(a,b)
{
    return a+b;
}

app.get("/calculateSum",function(req,res) {
    const a = req.query.a;
    const b = req.query.b;

    const sum = calculateSum2nos(a,b);
    res.send("Sum of two Number "+sum);
})

app.listen(port,()=>{
    console.log("Listening to port no : "+ port);
});