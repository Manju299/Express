const http = require('http')

const server =http.createServer((req,res)=>{
    console.log("You hit server")
})

server.listen(5000)