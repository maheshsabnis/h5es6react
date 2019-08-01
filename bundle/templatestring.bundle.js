"use strict";

var fname = "Tejas";
var mname = "Mahesh";
var lname = "Sabnis";

// traditional concatination

var fullName = fname + mname + lname;
console.log(fullName);

// ES 6 template string

fullName = "Full Name is " + fname + " " + mname + " " + lname;
console.log("Using Templagte string \n            " + fullName);
