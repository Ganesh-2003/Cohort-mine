const express = require("express");
const { createTodo } = require("../backend/types");
const { updateTodo } = require("../backend/types");
const { todo } = require("../backend/db")
const cors = require("cors");

const app =  express();

app.use(express.json());
app.use(cors());

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
        await todo.create({
            title: createPayload.title,
            description: createPayload.description,
            Completed: false
        })
    
        res.status(200).json({
            msg: "Todo Created Successfully"
        })
    }
    //put it in mongoDB
    

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
        console.log(idValidation);
        res.json({
            msg: "Invalid ID provided"
        })
        return ;
    }
    else { // Mark it as complete in MongoDb
        await todo.updateOne({
            _id: req.body.id  
        },{
            Completed: true
        })

        res.status(200).json({
            msg: "Task Marked as Completed"
        })
    }
})

app.listen(3000);

