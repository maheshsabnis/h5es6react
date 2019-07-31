function checkValue(x) {
    if (x) {
        console.log('x is true');
    } else {
        console.log('x is false');
    }
}

checkValue(true);
checkValue(false);

// note: === is type and value equality
function checkEvenOdd(x) {
    if (x % 2 === 0) {
        console.log('x is even');
    } else {
        console.log('x is odd');
    }
}
checkEvenOdd(10);
checkEvenOdd(9);

console.log(1 == 1); // true
console.log(1 == "1"); // true, just the parsed-value check
console.log(1 === 1); // true with type and value
console.log(1 === "1"); // false because of type

console.log();
console.log("Compare Objects");
var obj = {
    n1: 0
};
obj1 = obj;
console.log(obj == obj1);
console.log(obj === obj1);