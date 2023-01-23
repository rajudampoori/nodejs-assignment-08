const mongoose = require("mongoose")

const signUpSchema = new mongoose.Schema({
    name : {type : String,required : true},
    email : {type : String,required : true},
    gender : {type : String,required : true},
    phoneNumber : {type : Number,required : true},
    password : {type : String,required : true}
})

const SignUp = mongoose.model("SignUp",signUpSchema)

module.exports = SignUp;