// Everything is not inside function is Global space.
var a = 10;
var x = 10;
function b(){
}
console.log(window.a);
console.log(a);
console.log(this.a)
console.log(x) //not defined not x in global space