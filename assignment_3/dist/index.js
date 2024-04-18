"use strict";
let Name = "Muhammad muzammil";
console.log("lowercase", Name.toLowerCase());
console.log("uppercase", Name.toUpperCase());
function toTitleCase(input) {
    return input
        .toLowerCase()
        .replace(/(^|\s)\S/g, (match) => match.toUpperCase());
}
let titleCaseName = toTitleCase(Name);
console.log("titlecase", titleCaseName); // Output: "'Muzammil"
