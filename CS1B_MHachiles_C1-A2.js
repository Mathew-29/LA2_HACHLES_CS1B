// C1-A2: Mathematical and Comparison Operations, and Type Conversions

let b = 20;
let c = 12;
let d = "15"; 

const e = 15;

let sum = a + b + c + Number(d) + e;
console.log("Sum:", sum);

console.log("d > e:", Number(d) > e);
console.log("d < e:", Number(d) < e);
console.log("d >= e:", Number(d) >= e);
console.log("d <= e:", Number(d) <= e);
console.log("d === e:", Number(d) === e);

let difference = a - b - c - Number(d) - e;
console.log("Difference:", difference);

let product = (a * c) / e;
console.log("Product:", product);

let exponentResult = e ** c;
console.log("Exponent result:", exponentResult);

let newE = exponentResult;
console.log("New e:", newE);
