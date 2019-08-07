// 1. load http and fs
var http = require('http');
var fs = require('fs');

// 2. create server
var server = http.createServer(function(req, resp) {
    if (req.url === "/home") {
        // 2a. read the file and then respons it
        fs.readFile('./views/home.html', function(err, data) {
            // 2b. error response
            if (err) {
                console.log(err.message);
                resp.writeHead(404, { 'Content-type': 'text/html' });
                resp.write(err.message);
                resp.end();
            } else {
                // 2c. success response
                resp.writeHead(200, { 'Content-type': 'text/html' });
                console.log('sending home page');
                resp.write(data);
                resp.end();
            }
            //  resp.end();
        });
    } else {
        if (req.url === "/about") {
            // 2a. read the file and then respons it
            fs.readFile('./views/about.html', function(err, data) {
                // 2b. error response
                if (err) {
                    console.log(err.message);
                    resp.writeHead(404, { 'Content-type': 'text/html' });
                    resp.write(err.message);
                    resp.end();
                } else {
                    // 2c. success response
                    resp.writeHead(200, { 'Content-type': 'text/html' });
                    resp.write(data);
                    resp.end();
                }
                // resp.end();
            });
        } else {
            resp.writeHead(404, { 'Content-type': 'text/html' });
            resp.write("Sorry ! Url is wrong");
            resp.end();
        }
    }
    //  resp.end();
});

// 3/ listen on server
server.listen(6008);
console.log('server started on 6008');