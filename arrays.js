// in ES 3,4,5 the array is the only data structure
var names = ["sean", "roger", "george", "trimothy", "piercce", "daniel"];

// simple iteration using for loop
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// simplification of for loop  in ES 4 aka standard JavaScript
// in is the indexed based read operator from array 
for (var n in names) {
    console.log(n + " " + names[n]);
}

// array methods push() is used to append
names.push("connary");
names.push("moore");
names.push("luznaby");
for (var n in names) {
    console.log(n + " " + names[n]);
}
var name = names.pop();
for (var n in names) {
    console.log(n + " " + names[n]);
}