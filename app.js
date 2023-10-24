const express = require("express")
const { products } = require("./data.js")
const app = express()



app.get("/",(req,res)=>{
    res.json(products)
  
})

app.get("/products",(req,res)=>{
    const newProducts = products.map((product) =>{
        const {id, name} = product;
        return {id,name}

    })

    
    // console.log(newProducts)
    res.json(newProducts)
})




app.listen(5000,()=>{
    console.log("Server is listening on port 5000...")
})