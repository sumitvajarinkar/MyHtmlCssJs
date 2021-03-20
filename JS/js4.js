// Scope chain
// where you access the variable in funcction
// lexical environment = local memory + lexical env. parent

function a(){
    var b = 10;
    c();
    function c(){
        console.log(b);
        
    }
}
a();