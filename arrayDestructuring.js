//  Destructuring - Modern JavaScript Syntaxes

var numbers = [1, 2, [3, 4, 10, 11], 5, 6]
var [, , [a,  ,b]] = numbers;

console.log(a, b);