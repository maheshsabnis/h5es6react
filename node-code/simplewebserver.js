// 1. load the module for http
// require is the object to load and cache the module
var http = require('http');
var emps = [
    { EmpNo: 101, EmpName: 'A' },
    { EmpNo: 102, EmpName: 'B' },
    { EmpNo: 103, EmpName: 'C' },
    { EmpNo: 104, EmpName: 'D' },
];
// 2. create a web server
var server = http.createServer(function(req, resp) {
    // 1. define the request header
    resp.writeHead(200, { 'Content-Type': 'application/json' });
    // 2. send the response
    resp.write(JSON.stringify(emps));
    // 3. close ot end tne request
    resp.end();
});
// 3. start listening
server.listen(6007);
console.log('Server listening on port 6007');