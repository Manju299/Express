const http = require('http')

const server =http.createServer((req,res)=>{
    console.log("You hit server")
    res.end("This my Express page")
})

server.listen(5000)