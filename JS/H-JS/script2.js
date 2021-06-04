// Data types
/*
1. Primitive (stack) : string, numbers,boolean,null,        undefined,symbol
2. Reference (heap) : arrays, object literals, functions, dates
*/

// primitive
// string
var name = 'Sumit';
console.log("My name is "+ name);
console.log("Data type is "+ (typeof name ));

// numbers
let marks = 92;
console.log("My name is "+ marks);
console.log("Data type is "+ (typeof marks ));

// boolean
let isVote = true
console.log("Data type is "+ (typeof isVote ));

// null
let nullVar = null;
console.log("Data type is "+ (typeof nullVar )); //object

// undefined
let undef = undefined;
console.log("Data type is "+ (typeof undef ));//undefined

// Reference

//array
let arr = [1,2,3,false,'String'];
console.log("Data type is "+ (typeof arr));
//object

//object literals
let mark={
    sumit:92,
    rahul:89,
    neha:95
}
console.log(typeof mark)

// function
function fname() {
    
}
console.log(typeof fname)

//dates
let date = new Date();
console.log(typeof date)