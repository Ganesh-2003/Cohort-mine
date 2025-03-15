const mongoose = require("mongoose")

//MongoDB url
//Url : mongodb+srv://ganeshpuppala:Ganesh2003@cluster0.ga8zi.mongodb.net/

mongoose.connect("mongodb+srv://ganeshpuppala:Ganesh2003@cluster0.ga8zi.mongodb.net/todos");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    Completed: Boolean
})

const todo = mongoose.model('todos',todoSchema);

module.exports = {
    todo
}