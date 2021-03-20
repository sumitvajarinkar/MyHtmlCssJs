// const : when you dont want to update values
// let : temporal dead zone settings let is block scope
// var : keep it aside


// let & const declarations are hoisted(allocate memory)
// in the temporal dead zone
let a = 10; 
console.log(a);
var b = 100;
var b = 200;
// everything before initialisation of a is dead zone for a
// Let - Cannot access 'a' before initialization
//let is strict than var
//var allows duplicate declarations
console.log(c);
const c=1000;
//const is more strict than let than var
//const as constant must be at a time declare and initialize

//reference error :access element not found in let which is in temporal dead zone

//type error : assign other value to const of
// const b = 1000
// b = 100

//syntax error : const not initialize, duplicate declaration