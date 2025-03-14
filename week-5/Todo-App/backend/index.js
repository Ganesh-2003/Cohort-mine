const express = require("express");
const { createTodo } = require("../backend/types");
const { updateTodo } = require("../backend/types");
const { todo } = require("../backend/db")

const app = express();
app.use(express.json());

/* body{
    title : string
    description : string 
}*/


app.post("/todo", async function (req,res){
    
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

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
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        Completed: false
    })

    res.json({
        msg: "Todo Created Successfully"
    })

})

app.get("/todos", function (req,res) {

    todo.find({}).then((data)=>{
        res.json({
            todos: data
        })
    })
     
})

app.put("/completed", async function(req,res) {
    
    const id = req.body;
    const idValidation = updateTodo.safeParse(id);

    if(!idValidation.success) {
        res.json({
            msg: "Invalid ID provided"
        })
        return ;
    }
    else { // Mark it as complete in MongoDb
        await todo.update({
            _id: req.body.id  
        },{
            completed: true
        })
    }
})

app.listen(3000);

