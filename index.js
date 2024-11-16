const http=require('http')
const path=require('path')
const fs=require('fs');
// const { url } = require('inspector');

const port=8080;


const server= http.createServer((req,res)=>{
if(req.url==='/'){
    fs.readFile(
        path.join(__dirname,'public','index.html'),
        (err,content)=>{
            if(err) throw err;
            res.writeHead(200,{'content-type':'text/html'});
            res.end(content);
        }
    );
}
else if(req.url==='/about'){
    fs.readFile(
        path.join(__dirname,'public','about.html'),
        (err,content)=>{
            if(err) throw err;
            res.writeHead(200,{'content-type':'text/html'});
            res.end(content);
        }
    )
}
else if(req.url==='/contact-me'){
    fs.readFile(
        path.join(__dirname,'public','contact-me.html'),
        (err,content)=>{
            if(err) throw err;
            res.writeHead(200,{'content-type':'text/html'});
            res.end(content);
        }
    )
}
else {
    fs.readFile(
        path.join(__dirname,'public','404.html'),
        (err,content)=>{
            if(err) throw err;
            res.writeHead(404,{'content-type':'text/html'});
            res.end(content);
        }
    )
}

})
server.listen(port,()=>console.log(`server is running on port${port}`));