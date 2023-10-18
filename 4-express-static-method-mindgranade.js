const express = require("express")
const path = require("path")
const app = express()

//set static and middleware
app.use(express.static("./Components"))

// app.get("/",(req,res) => {
//     res.sendFile(path.resolve(__dirname,"./Components/index.html"))
// })


app.all("*",(req,res) =>{
    res.status(404).send("Page not found")
})

app.listen(5000,()=>{
    console.log("Listening on the port 5000...")
})