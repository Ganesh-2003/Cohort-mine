const express = require("express");
const port = 3000;
function sumtilln(n)
{
    let ans = 0;
    for(let i = 1;i<=n;i++)
    {
        ans = ans+i;
    }
    return ans;
}

const app = express();

app.get("/",function(req,res){
  
    const n = req.query.n;
    let ans = sumtilln(n);
    res.send("Sum of N Numbers is :"+ans);

})

app.listen(port);