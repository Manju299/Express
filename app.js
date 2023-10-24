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

app.get("/products/:prodid",(req,res)=>{
    const {prodid} = req.params;
    console.log(prodid)

    const singleProduct = products.find((product)=> product.id === Number(prodid))
    console.log(singleProduct)
    res.json(singleProduct)
})




app.listen(5000,()=>{
    console.log("Server is listening on port 5000...")
})