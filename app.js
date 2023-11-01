const express = require("express")
const app =  express()
let { people } = require("./data")


//to access the component folder
app.use(express.static("./Components"))
app.use(express.urlencoded({extended:false}))


app.get("/", (req,res)=>{
    res.status(200).json({success:true, data:people})
})

// display the entered data 
app.post("/login",(req,res)=>{
    console.log(req.body)
    res.send("Post")

})

app.listen(5000,()=>{
    console.log("Server is listening on the server 5000")
})