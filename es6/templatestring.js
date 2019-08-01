let fname = "Tejas";
let mname = "Mahesh";
let lname = "Sabnis";

// traditional concatination

let fullName = fname + mname + lname;
console.log(fullName);

// ES 6 template string

fullName = `Full Name is ${fname} ${mname} ${lname}`;
console.log(`Using Templagte string 
            ${fullName}`);