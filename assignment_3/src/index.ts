let Name: string = "Muhammad muzammil";
console.log("lowercase", Name.toLowerCase());
console.log("uppercase", Name.toUpperCase());

function toTitleCase(input: string): string {
  return input
    .toLowerCase()
    .replace(/(^|\s)\S/g, (match) => match.toUpperCase());
}

let titleCaseName: string = toTitleCase(Name);

console.log("titlecase", titleCaseName); // Output: "'Muzammil"
