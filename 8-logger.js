// request => middleware => response
//Insted of adding the following lines of code in every request we call logger method
const logger = (req,res,next) => {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method,url,time)
    next()
}
module.exports = logger