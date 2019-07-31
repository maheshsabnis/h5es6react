// 1. function having input parameters and processing
function doWork(x, y) {
    var res;
    if (x > y) {
        res = x - y;
    } else {
        res = y - x;
    }
    console.log("Result = " + res);
}
doWork(10, 20);
doWork(200, 100);
// function with parameters and return value
function changeCase(str, c) {
    switch (c) {
        case "U":
            str = str.toUpperCase(); // a function of string class
            break;
        case "L":
            str = str.toLowerCase(); // a function of string class    
    }
    return str;
}
console.log(changeCase('James Bond', "U"));
console.log(changeCase('James Bond', "L"));