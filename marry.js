let mongoose = require("mongoose")

let Schema = mongoose.Schema;
let matrimonySchema = new Schema({
    name:String,
    age:String,
    gen:String,
    rel:String,
    pro:String,
    loc:String,
    inte:String,
    abo:String,
    pass:String
})
let matrimonymodel= mongoose.model("users",matrimonySchema)
module.exports=matrimonymodel
