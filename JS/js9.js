function outest(){
    var c = 20;
    function outer(b){
        function inner(){
            console.log(a,b,c);
        }
        let a = 10;
        return inner;
    }
    return outer;
}
// outer()("Hello"); //call and return inner function
var close = outest()("Hello");
close();