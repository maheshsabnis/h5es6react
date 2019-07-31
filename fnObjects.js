// using reference function as a class
var myObject = function(x) {
    // x will become global for the current scope
    function display() {
        console.log('I am a privare member');
    }
    // define children as function/property/member using 'this'
    // Note: Each member prefixed with 'this' is a public member.
    // these public members are separated by semi-colon (;)
    this.add = function(a, b) {
        return a + b + x;
    };
    this.sub = function(a, b) {
        return a - b + x;
    };
};
// define an instance of myObject
var obj = new myObject(10);
console.log('Add = ' + obj.add(4, 5));
console.log('Sub = ' + obj.sub(4, 5));
// obj.display();

// Creation of 'prototype'
myObject.prototype.mult = function(a, b) {
    return a * b;
};
console.log("Mult = " + obj.mult(30, 40));