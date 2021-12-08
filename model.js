const { string } = require('joi');
const mongoose=require('mongoose');
//importing the schema method from mongoose
const schema=mongoose.Schema;
//creating the schema
const personSchema=new schema({
name:{
    type:String,
    required:true,
    unique:true
},
age:{
    type:Number
},
favoriteFood:{
    type:[{type:String}]
}
}) 
//expoting the model
module.exports=Person=mongoose.model('personlist',personSchema)
