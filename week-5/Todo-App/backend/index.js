const express = require("express");
const app = express();
const taskValidation = require("../backend/middleware")
app.use(express.json());

/* body{
    title : string
    description : string 
}*/


app.post("/todo",taskValidation,function (req,res){
    

})

app.get("/todos",function (req,res) {

})

app.put("/completed",function(req,res) {

})

app.listen(3000);

