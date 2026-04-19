const http = require('http');

const server = http.createServer((req, res) => {

    const method = req.method;
    const url = req.url;

    const message = `Method: ${method}, URL: ${url}`;

    // კონსოლში გამოტანა
    console.log(message);

    // response headers
    res.writeHead(200, { "Content-Type": "text/plain" });

    // writable stream
    res.write("Hello from Node.js server\n");
    res.write(message + "\n");

    res.end("Request processed");
});

server.listen(8080, () => {
    console.log("Server running at http://localhost:8080");
});