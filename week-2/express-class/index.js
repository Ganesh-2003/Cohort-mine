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



app.get("/",function(req,res){
    let unHealthyKidneys = 0,noofHealthyKidneys = 0;
    let ganeshKidneys = users[0].kidneys;
    let noofKidneys = ganeshKidneys.length;
    for(let i=0;i<noofKidneys;i++)
    {
        console.log(ganeshKidneys[i].healthy)
        if(ganeshKidneys[i].healthy)
        {
            console.log(noofHealthyKidneys)
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

app.post("/",function(req,res){

})

app.put("/",function(req,res){

})

app.delete("/",function(req,res){

})

app.listen(3000);