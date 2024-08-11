const http=require('http');


const server=http.createServer((req,res)=>{
    const url = req.url;
    if(url==='/home' || url==='/'){
        res.setHeader('Content-Type','text/html');
        res.write('<html><head><title>Home</title></head><body><h1> Welcome home</h1></body></html>');
        return res.end();
    }
    if(url==='/about'){
        res.setHeader('Content-Type','text/html');
        res.write('<html><head><title>About</title></head><body><h1> Welcome to About Us page</h1></body></html>');
        return res.end();
    }
    if(url==='/node'){
        res.setHeader('Content-Type','text/html');
        res.write('<html><head><title>Node</title></head><body><h1> Welcome to my Node Js project</h1></body></html>');
        return res.end();
    }
});
server.listen(4000);