// closures : a function along with lexical scope
// function x(){
//     var a = 7;
//     function y(){
//         console.log(a);
//     }
//     a = 10;
//     return y;
// }
// var z = x();
// console.log(z);
// //...
// z();

function z(){
    var b = 900;
    function x(){
        var a = 7;
        function y(){
            console.log(a,b);
        }
        y();
    }
    x();
}
z();