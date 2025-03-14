const zod = require("zod");

/*
    {
        title: String,
        description: String
    }

    {
        id: String
    }
*/

const mySchema = zod.object({
    title: zod.string(),
    description: zod.string()
})

function inputValidation() {
    mySchema.parse()
}



