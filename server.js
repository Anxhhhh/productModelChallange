const express = require("express");
const connectDB = require("./config/db");
const productModel = require("./model/product.model");



let app = express();
connectDB();

app.use(express.json());



app.get("/", (req, res) =>{
    res.send("This is home");



})

app.get("/health", (req, res) =>{
    res.send("health is good");



})


app.post("/addProduct", async (req, res) => {
  try {
    let { productname, price, currency, category,discription,images , size, colors } = req.body;
  
    let newUser = await productModel.create({
      productname,
      price,
      currency,
      category,
      discription,
      images,
      size,
      colors,


      
    });
    return res.send(newUser);
  } catch (error) {
    console.log(error),
    res.send("Ther is an error in register", error);

  }
}
)


app.listen(3000, ()=>{
    console.log("Running")
})