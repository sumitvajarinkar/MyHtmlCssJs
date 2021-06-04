console.log('New');
// Variables in JS
// var, let, const

var a = 10;
console.log(a);
var n = 'Sumit';
var chan
var m=123
console.log(n,chan,m);

// Rules for variables
/*
1. Cannot start with numbers
2. Can start with letters,numbers,_ or $
3. Are case sensative
*/
//Dont use _ because private variable in Modern OOP JS
// $ is confusing used in Jquery
var city='Pune';
console.log(city);

// Use let const most of the time 

// const must be initialised cannot just be declared
const myname = "Vajarinkar";
console.log(myname)


//let - block element scope
{
    let city = 'sangli';
    city = 'satara';
    console.log(city);
}
console.log(city);

// const cannot be redeclared, but can be add
const arr = [1,2,3,4,5];
arr.push(6,7,8);
console.log(arr);

// Most common programming case types

/*
1. camelCase = sumitVajarinkar (Best)
2. kabab-case = sumit-vajarinkar
3. snake_case = sumit_vajarinkar
4. PascalCase = SumitVajarinkar
*/