const http = require('http');

const server = http.createServer((req, res) => {

    res.writeHead(200, {"Content-Type": "text/plain"});

    switch(req.method) {

        case "GET":
            res.write("Request Method: GET");
            break;

        case "POST":
            res.write("Request Method: POST");
            break;

        case "PUT":
            res.write("Request Method: PUT");
            break;

        case "DELETE":
            res.write("Request Method: DELETE");
            break;

        default:
            res.write("Unknown Method");
    }

    res.end();
});

server.listen(8080, () => {
    console.log("Server running on http://localhost:8080");
});