//Map Filter Arrow

//Arrow Functions

const sum = (a,b)=>{
    return a+b;
}

console.log(sum(2,3))

//Map Function 
const input = [1,2,3,4,5]

function mutiplyby2(i)
{
    return i*2;
}

const ans = input.map(mutiplyby2); //Each and every element in Array input is multiplied by 2s
console.log(ans);

//Even Numbers in an arr

const res = [];

for(let i = 0;i<input.length;i++)
{
    if(input[i]%2 == 0)
    {
        res.push(input[i]);
    }
}   

console.log(res);

//Using Filter

function filteringLogic(i)
{
    if(i%2 == 0) {
        return true;
    }
    else {
        return false;
    }
}

const res2 = input.filter(filteringLogic);
console.log(res2);
