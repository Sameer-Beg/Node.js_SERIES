// console.log("we are learning routing in node js ")
import http from 'http'
//create server
const server = http.createServer((req,res)=>{
    // console.log(req.url)
    // res.end('<h1>sameer beg</h1>')

    if(req.url === '/sam'){
        res.end("u r wellcome in nodejsmastry course")
    }else if(req.url === '/juhi'){
        res.end("u r wellcome juhu")
    }else{
        res.end("Invalid url")
    }
});

const port = 1000;
server.listen(port,()=>console.log(`server is runing is on port ${port}`))