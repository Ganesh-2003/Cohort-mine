const express = require('express');
const zod = require('zod');
const app = express();


app.use(express.json());

schema = zod.object({
    email: zod.string(),
    password: zod.string(),
    country: zod.literal("IN").or(zod.literal("US")),
    Kidneys: zod.array(zod.number())
})

app.post("/health-checkup", function(req,res){
    const Kidneys = req.body.Kidneys;
    const response = schema.safeParse(Kidneys);
    if(!response.success)
    {
        res.status(411).json({
            msg:"Input is Inalid"
        })
    }
    else{
        res.status(200).send({
            response
        })
    }
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