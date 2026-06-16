const mongoose = require("mongoose");

const connectDB = async ()=>{
    try {
        let res = mongoose.connect("mongodb://0.0.0.0/product");
        console.log("Db is connected");

    } catch (error) {
        console.log("Error in db", error);

    }
}

module.exports = connectDB;
