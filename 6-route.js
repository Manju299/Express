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


//Dynamic routing to get specific product
app.get("/products/:prodid",(req,res)=>{
    const {prodid} = req.params;
    console.log(prodid)

    const singleProduct = products.find((product)=> product.id === Number(prodid))
    
    //Sending Error message if requested product does not present.
    if(!singleProduct){
        res.status(404).send("Product Does not Found")
    }
    console.log(singleProduct)
    res.json(singleProduct)
})


//Query routing
app.get("/api/products/query",(req,res)=>{
    // console.log(req.query)
    const {search,limit} = req.query
    let searchedProducts = [...products]
    
    //to get searched products localhost:5000/api/products/query?search=abc...
    if(search){
        searchedProducts = searchedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }

    //to get searched products localhost:5000/api/products/query?limit=1
    //to get searched products localhost:5000/api/products/query?search=abc&limit=1
    if(limit){
        searchedProducts = searchedProducts.slice(0,Number(limit))
    }

    res.status(200).json(searchedProducts)
    // res.send("Query Page")
})

app.listen(5000,()=>{
    console.log("Server is listening on port 5000...")
})