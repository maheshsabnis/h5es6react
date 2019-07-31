// variable declaration using 'var' keyword
var x = 'Mahesh'; // type infer of x to string
console.log(x + " " + typeof(x));
x = 10; // the reusability of x for other types
console.log(x + " " + typeof(x));

x = [10, 20, 30];
console.log(x + " " + typeof(x));

x = new Date();
console.log(x + " " + typeof(x));

x = {}; // The Object Literal aka JSON object
// we can add dynamic contents on the object as Key:Value pairs 
// separated by comma (,)
x.Id = 100; // Id is key having value as 100
x.Name = "Mahesh"; // Name is kay having value is Mahesh
console.log(x + " " + typeof(x));
// iterate over the object x to read its properties
for (var p in x) {
    console.log(p);
}
console.log(x.Id + " " + x.Name);
// x will be used as Reference function that contains a body
x = function() {
    console.log('Function Called');
};
x();
console.log(x + " " + typeof(x));
// reference function with parameter
x = function(y) {
    console.log('Function Called with parameter' + y);
};
x([10, 20, "10"]);