// close function returns an Object Literal aka JSON object
// that contains definition of all members to be publically accessible
function myFunction() {
    function display() {
        console.log('dddd');
    }
    // public functions
    return {
        add: function(a, b) {
            return a + b;
        },
        mult: function(a, b) {
            return a * b;
        }
    };
}

var obj = new myFunction();
console.log(obj.add(3, 4));
console.log(obj.mult(3, 4));
obj.display();