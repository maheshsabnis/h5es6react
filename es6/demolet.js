function testScope(x) {
    if (x) {
        let y = 10;
        console.log(y);
    } else {
        console.log(y);
    }
    console.log(y);

}

testScope(true);
testScope(false);