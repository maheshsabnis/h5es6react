let names = ["sean", "roger", "george", "trimothy", "pierce", "daniel", "senior", "saggy"];

// 1. the forEach method

// names.forEach(function(v, i) {
//     console.log('value at index ' + i + 'is ' + v);
// });

// names.forEach((v, i) => {
//     console.log('value at index ' + i + 'is ' + v);
// });

// names.map((v, i) => {
//     console.log('value at index ' + i + 'is ' + v);
// });
let s = "ddd";

// names.forEach((v, i) => {
//     if (v.startsWith('s')) {
//         console.log('value at index ' + i + 'is ' + v);
//     }
// });

let output = names.filter((v, i) => {
    return v.startsWith('s'); // return the record if the condition is true
});

output.forEach((v, i) => {
    console.log('value at index ' + i + 'is ' + v);
});