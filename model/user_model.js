const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const userSchema = new Schema({
    email:{
        type:String
    },
    password:{
        type:String
    },
    fullname:{
        type:String
    },
    role:{
        type:String
    }
})
module.exports = mongoose.model("user_data",userSchema);