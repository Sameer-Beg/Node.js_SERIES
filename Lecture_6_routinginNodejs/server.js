import http from 'http'
const server  = http.createServer((req,res)=>{
    if(req.url === '/sameer'){
        res.end("developer")
    }else if(req.url === '/tanveer'){
        res.end("Accountend")
    }else{
        res.end("invalid url")
    }
})
const port = 3000;
server.listen(port,()=>console.log(`server is runijng onj port ${port}`))
