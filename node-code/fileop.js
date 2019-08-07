// 1. load the fs module
var fs = require('fs');
// 2. synchronous write. File will be created is not exist
// fs.writeFileSync('myfile.txt', 'The data is written synchronously');
// console.log('File is written');
// var data = fs.readFileSync('myfile.txt');
// console.log(data.toString());
// console.log('File is read');

// 3. implementing async code
fs.writeFile('myfile.txt', 'Data is Written ASynchronously', function(err) {
    if (err) {
        console.log('error occured ' + err.message);
        return;
    }
    console.log('Data is Written');
});
console.log('done');

// 4 read data async
fs.readFile('myfile1.txt', function(err, data) {
    if (err) {
        console.log('error occured ' + err.message);
        return;
    }
    console.log(data.toString());
});
console.log('read done');