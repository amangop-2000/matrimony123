let Schema = mongoose.Schema

let messSchema = new Schema({
   
    mess:String, 
    uid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
     
    
    // uid:String
  
},{timestamps:true})
let mess= mongoose.model("messUser",messSchema)
module.exports=mess
