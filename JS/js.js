// Everything in JS happens inside an Execution Context
// It contains memory (variable environment) and code (thread of execution)
// JS is a synchronous single threaded language 
var n = 2;
function square (num){
    var ans = num * num;
    return ans;
}
var square2 = square(n);
var square4 = square(4);

// call stack maintains thr order of execution of execution contexts
// call stack knows as :
// Execution context stack
// program stack
// context stack
// runtime stack
// machhine stack