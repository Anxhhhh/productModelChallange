
const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
    productname:{
        type:String,
        

    },
    price:{
        type:String,

    },
    currency:{
        type:String,


    },
    category:{
        type:String,


    },
    discription:{
        type:String,


    },
    images:{
        type:[String],


    },
    size:{
        type:[],


    },
    colors:{
        type:[],


    },

    
})

let productModel = mongoose.model("product", productSchema);
module.exports = productModel;
