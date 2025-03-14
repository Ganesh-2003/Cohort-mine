const zod = require("zod");
const createTodo = require("../backend/types");
const updateTodo = require("../backend/types");


function taskValidation(req,res,next) {

    try{
        const title = req.body.title;
        const description = req.body.description;

        const Validation = createTodo.parse({
            title: title,
            description: description
        })

        console.log("Validation", Validation);
        next();
    } catch(error) {
        if(error instanceof zod.ZodError)
        return res.status(404).json({
            msg: "Validation error",
            error: error.errors
        })
    }
}

function idValidation(req,res,next) {

    try{
        const id = req.body.id;

        const updateValidation = updateTodo.parse({
            id: id
        })   

        console.log(updateValidation);
        next();
    }
    catch(error){
        res.status(404).json({
            error: error
        })
    }
}

module.exports = {
    taskValidation,
    idValidation
}
