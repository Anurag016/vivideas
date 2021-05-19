const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const productSchema = new Schema({
    productid:{
        type:String
    },
    productname:{
        type:String
    },
    prodictimage:{
        type:String
    },
})
module.exports = mongoose.model("product_data",productSchema);