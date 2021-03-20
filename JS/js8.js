//for var 6 will print  5 times after N JS - same memory location
// function x(){
//     for(var i = 1; i <= 5; i++)
//     {
//         setTimeout(function(){
//             console.log(i);
//         }, i * 1000);
//     }
    
//     console.log('Namasate JS');
// }
// x();


// extension problem we need to choose different memory for var
// function x(){
//     for(let i = 1; i <= 5; i++)
//     {
//         function close(j){

//             setTimeout(function(){
//                 console.log(j);
//             }, j * 1000);
//         }
//         close(i);
//     }
    
//     console.log('Namasate JS');
// }
// x();


//for let 1 to 5 will print after N JS - block scope, different memory
//1 will print after Namaste JS 3 sec
// function x(){
//     for(let i = 1; i <= 5; i++)
//     {
//         setTimeout(function(){
//             console.log(i);
//         }, i * 1000);
//     }
    
//     console.log('Namasate JS');
// }
// x();