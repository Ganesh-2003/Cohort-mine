const express = require("express");
const app = express();
const port = 3000;

function sum(n)
{
    let sum = 0;
    for(let i = 0;i<=n;i++)
    {
        sum = sum+i;
    }
    return sum;
}


app.get("/basic-server",function(req,res){
    const input = req.query.input;
    const output = sum(input);
    res.send("Ouput of Sum of Number till N is : " + output);
})

app.listen(port,()=>{
    console.log("Listening on Port : "+port);
})  