const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 4000;
const userRoute = require("./routes/userRoute");
const productRouter = require("./routes/productRoute");


app.use(express.urlencoded({extends: true}));
app.use(userRoute);
app.use(productRouter);



app.use((req,res)=>{
    res.send("<h1>404 page not found</h1>");
});

app.listen(port,()=>{
    console.log(`server is running http://localhost:${port}`);
});