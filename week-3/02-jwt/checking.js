const jwt = require('jsonwebtoken');
const zod = require('zod');
const jwtPassword = 'secret';



function signJwt(username, password) {
    // Your code here
    var token  = null;

    const schemaUsername = zod.string().email();
    const schemaPassword = zod.string().min(6);

    const responseUsername = schemaUsername.safeParse(username);
    const responsePassword = schemaPassword.safeParse(password);

    if(responseUsername.success == false || responsePassword.success == false)
    {
        return token
    }
    else{
        var token = jwt.sign({username}, jwtPassword);
        return token;
    }    
}

const ans = signJwt("Ganesh@gmail.com",111);
console.log(ans);