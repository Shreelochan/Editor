const mongoose= require('mongoose');

let schema =mongoose.Schema;

let articleSchema = new schema({
    
    body:{
        type:String,
        required:true
    }
})
let Article=module.exports=mongoose.model("Article",articleSchema)