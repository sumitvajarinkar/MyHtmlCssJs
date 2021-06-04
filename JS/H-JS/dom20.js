// Regular expression

// Regular expression literal in JS
// let reg = /Sumit/g;
// console.log(reg);
// console.log(reg.source);


// let reg = /Sumit/g; // g - search globally
let reg = /Sumit/i; // i - case insensetive
let s ='Good morning sumit sumit'
// let s ='Good morning SuMIt Sumit'

// Functions to match expressions

// 1. exec() - an array for match or null for no match

let result = reg.exec(s)
// console.log(result);
// console.log(result.input);
// console.log(result.index);

// result = reg.exec(s)
// console.log(result);


// 2.  test() returns true or false
//  result = reg.test(s)
// console.log(result); //if true 


// 3. match() - return array of results or null

// result = reg.match(a) wrong
// result = s.match(reg) //right
// console.log(result);

// 4. search() - return index of 1st match else -1

// result = reg.search(a) wrong
// result = s.search(reg) // right
// console.log(result);


// 5. replace() - returns new replced string with all replcement global flag

result = s.replace(reg, 'rahul')
console.log(result);
