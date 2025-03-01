
// Middleware for handling auth
const jwt = require("jsonwebtoken")
const { JWT_secret } = require("../config");

function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    const token = req.headers.authorization;

    const words = token.split(" ");
    const jwtToken = words[1];
    console.log(jwtToken);
    console.log(JWT_secret);

    const decodedValue = jwt.verify(jwtToken,JWT_secret);
    if(decodedValue.username){
        next();
    }
    else{
        res.status(404).json({
            msg: "You are not authenticated"
        })
    }

}

module.exports = adminMiddleware;