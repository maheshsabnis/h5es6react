"use strict";

function testScope(x) {
    if (x) {
        var _y = 10;
        console.log(_y);
    } else {
        console.log(y);
    }
    console.log(y);
}

testScope(true);
testScope(false);
