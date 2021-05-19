const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const uniquecodeSchema = new Schema({
    productid:{
        type:String
    },
    batchno:{
        type:String
    },
    expdate:{
        type:String
    },
    mfgdate:{
        type:String
    },
    code:{
        type:String
    }
})
module.exports = mongoose.model("uniquecodes_data",uniquecodeSchema);