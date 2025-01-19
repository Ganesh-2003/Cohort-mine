const express = require("express")
const app = express();

var users = [{
    name:"Ganesh",
    kidneys:[{
        healthy:false
    },{
        healthy:true
    }]
}]

app.use(express.json())


//Finding Healthy and UnHealthy Kidneys

app.get("/",function(req,res){
    let unHealthyKidneys = 0,noofHealthyKidneys = 0;
    let ganeshKidneys = users[0].kidneys;
    let noofKidneys = ganeshKidneys.length;

    for(let i=0;i<noofKidneys;i++)
    {
        if(ganeshKidneys[i].healthy)
        {
            noofHealthyKidneys = noofHealthyKidneys+1;
        }
        else
        {
            unHealthyKidneys = unHealthyKidneys+1;
        }
    }

    res.json({
        noofKidneys,
        noofHealthyKidneys,
        unHealthyKidneys 
    });
})


//Pushing a Kindey into the user

app.post("/",function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy:isHealthy
    })

    res.json({
        msg:"Done!"
    })
})

//Making all the kidneys as healthy

app.put("/",function(req,res){

    if(AtleastOneUnHealthyKidney())
    {
       for(let i=0;i<users[0].kidneys.length;i++)
        {
            users[0].kidneys[i].healthy = true;
        }
        res.json({
            msg:"All Kidneys are now made Healthy"
        });
    }

    res.status(411).json({
        msg:"All Kidneys are Already Healthy"
    })
    
})

//Deleting all the unHealthy Kidneys

app.delete("/",function(req,res){

    if(AtleastOneUnHealthyKidney())
    {
        const newKidneys = [];
        for(let i = 0;i<users[0].kidneys.length;i++)
        {
            if(users[0].kidneys[i].healthy == true)
            {
                newKidneys.push({
                    healthy:true
                })
            }
        }

        users[0].kidneys = newKidneys;
        res.json({
            msg:"Done! Deletion"
        })
    }
    else{
        res.status(411).json({
            msg: "You Have No UnHealthy Kidneys"
        });
    }
})

function AtleastOneUnHealthyKidney()
{
    for(let i = 0;i<users[0].kidneys.length;i++)
    {
        if(users[0].kidneys[i].healthy == false)
        {
            return true;
        }
    }
    return false;
}



app.listen(3000);