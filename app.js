const express = require("express") // imoorting the library
const app = express()

//const app = require("express")() other way of instance of server

// method we user
// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen

app.get("/", (req,res) => {
    res.status(200).send("Home page")
})

app.get("/About", (req,res) => {
    res.status(200).send("This is About page")
})

app.all("*", (req,res) => {
    res.status(404).send("<h1> This content seems to not available")
})
app.listen(5000,()=>{
    console.log("Server is listening on port 5000...")

})