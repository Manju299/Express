const express = require("express")
const app = express()

app.get("/",(req,res)=>{
    res.json([{ name: 'Manjuanath',id: 1}, {name: 'Kumar',id: 2}])
})


app.listen(5000,()=>{
    console.log("Server is listening on port 5000...")
})