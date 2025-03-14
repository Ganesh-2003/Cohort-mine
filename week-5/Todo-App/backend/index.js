const zod = require("zod")
const express = require("express");
const app = express();
const createTodo = require("../backend/types");
app.use(express.json());

/* body{
    title : string
    description : string 
}*/


app.post("/todo", function (req,res){
    
    const createPayload = req.body;
    const parsedPayload = createTodo.parse(createPayload);

    if(!parsedPayload.success) {
        res.status(404).json({
            msg: "Wrong Inputs"  
        })
        return;
    }
    else{
        res.status(200).json({
            msg: "Validation Successfull"
        })
    }
    //put it in mongoDB



})

app.get("/todos",function (req,res) {

})

app.put("/completed",idValidation,function(req,res) {

})

app.listen(3000);

