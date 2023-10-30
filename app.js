const express = require("express")
const app = express()

// request => middleware => response
//Insted of adding the following lines of code in every request we call logger method
const logger = (req,res,next) => {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method,url,time)
    next()
}

app.get('/', logger,(req,res) =>{
    res.send("Home")
})

app.get('/about',logger,(req,res) =>{
    res.send("About")
})


app.listen(5000,()=>{
    console.log("Server is litening on Port 5000")
})