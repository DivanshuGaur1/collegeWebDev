const http= require('https');
http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World');
}).listen(8000);

console.log('Server running at http://localhost:8000/');c:\Users\HP\OneDrive\Desktop\File Module