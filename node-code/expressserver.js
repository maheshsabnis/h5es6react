var express = require('express');
var bodyParser = require('body-parser');
// define an instance of express
var instance = express();
// configure the bodyParser for Express
// the JSON formatter
// the user() method is called as middleware config method.
instance.use(bodyParser.json());
// read with URL Exncoding
instance.use(bodyParser.urlencoded({ extended: false }));
var Products = [{ ProductId: 101, ProductName: 'Laptop', Manufacturer: 'IBM', CategoryName: 'Electronics', Price: 120000 },
    { ProductId: 102, ProductName: 'Iron', Manufacturer: 'Bajaj', CategoryName: 'Electrical', Price: 1200 }
];

// using express methods for Http Processing
// the first parameter is url and second parameter
// is http request listener for Request and Response
instance.get('/api/products', function(req, resp) {
    resp.send(JSON.stringify(Products));
});
instance.get('/api/products/:id', function(req, resp) {
    var id = req.params.id;
    console.log(id);
    var data = Products.filter(function(v, i) {
        return v.ProductId == id;
    });
    resp.send(JSON.stringify(data));
});

instance.post('/api/products', function(req, resp) {
    // data will be send through body
    console.log(JSON.stringify(req.body));
    Products.push(req.body);
    resp.send(JSON.stringify(Products));
});
// search and update
instance.put('/api/products/:id', function(req, resp) {
    // logic for Update 
});

// start listeneing
instance.listen(6007, function() {
    console.log('Started on port 6007');
});