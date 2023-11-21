const http=require('http')
const server=http.createServer( (req,res) => {
    if(req.url ==='/'){
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('Here is our short history')
    }
    res.end(`
    <h1>Oops!</h1> 
    <p>We can't seem to find the page you are looking for</p>
    <a href="/" >back home</a>
    `
    )
})
server.listen(5000)

/* 
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running at http://${hostname}:${port}/`);
}); */
