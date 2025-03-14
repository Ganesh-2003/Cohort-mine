const zod = require("zod");
const express = require("express");
/*
    Schema 1
    {
        title: String,
        description: String
    }

    Schema 2
    {
        id: String
    }
*/

//Defining the Schema

const createTodo = zod.object({ 
    title: zod.string(),
    description: zod.string()
})

const updateTodo  = zod.object({
    id: zod.string()
}) 

module.exports = {
    createTodo: createTodo,
    updateTdod: updateTodo
}
