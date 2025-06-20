// console.log("we are learning server building")
import http from 'http'

//create server
const server = http.createServer((req,res)=>{
    res.end("requested sussesfully")
})
const port = 3000;
server.listen(port, ()=> console.log(`server is runing on port ${port}`))
