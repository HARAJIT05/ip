const http = require('http');

const PORT = 8080;

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write('Hello World server!');
    res.end();
})

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))