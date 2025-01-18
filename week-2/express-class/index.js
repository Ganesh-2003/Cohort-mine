const express = require("express");
const app = express();
const port = 3000;

app.get("/basic-server",function(req,res){
    res.send("Basic Http Server Running");
})

app.listen(port,()=>{
    console.log("Listening on Port : "+port);
})  