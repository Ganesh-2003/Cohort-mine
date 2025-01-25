const zod = require('zod');
const express = require('express')
const app = express()

app.use(express.json());

function validateinputArr(arr){
    const schema = zod.array(zod.number());

    const response = schema.safeParse(arr);

    console.log(response);
}

validateinputArr([1,2,3,4,5])

function validateinputObj(obj){
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().length(10)
    })

    const response = schema.safeParse(obj);
    return response
}

console.log(validateinputObj({
    email: "ganeshvsp12@gmail.com",
    password: "Ganesh2003"
}));

app.post("/login",function(req,res){
    const input = req.body;
    const response = validateinputObj(input);
    if(!response.success)
    {
        res.status(411).json({
            msg:"Invalid Input Given"
        })
    }
    else
    {
        res.status(200).json({
            msg: "Good Input"
        })
    }
})

app.listen(3000);