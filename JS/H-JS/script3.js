// type conversion and coercion
console.log('Welcome to JS')
let myvar;
myvar = String(34);
console.log(myvar);
console.log(myvar,(typeof myvar));

let booleanVar = String(true);
console.log(booleanVar,(typeof booleanVar));

let date = String(new Date());
console.log(date,(typeof date));

let arr = String([1,2,3,4]);
console.log(arr.length,(typeof arr));

let i = 8;
console.log(i)
console.log(i.toString())

let str = Number('3434');
console.log(str,(typeof str));

let num = parseInt('3.4')
console.log(num,(typeof num));

let num1 = parseFloat('3.4132562')
console.log(num1,(typeof num1));

console.log(num1.toFixed(4), typeof num1);

let m1 = Number('123');
let m2 = 456;
console.log(m1 + m2) //123456
//number : 579