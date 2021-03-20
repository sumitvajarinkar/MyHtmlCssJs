//block need to combine multiple cases

// if(true){
//     // compound statement
//     var a = 10;
//     console.log(a);
// }

// {
//     var a = 10; //var is in global block space
//     let b = 20; //local
//     const c = 30; //local
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a); //only prints var
// console.log(b);
// console.log(c);


// shadowing with var
// var a = 100; //global space
// {
//         var a = 10; //var is in global block space
//         let b = 20; //local
//         const c = 30; //local
//         console.log(a); //10
//         console.log(b); //20
//         console.log(c); //30
        
//     }
//     console.log(a); //still 10


// shadowing with let
// let b = 100; //global space
// {
//         var a = 10; 
//         let b = 20; //let is in global block space
//         const c = 30; //local
//         console.log(a); //10
//         console.log(b); //20
//         console.log(c); //30
        
//     }
//     console.log(b); //100 use global space shadowing


// shadowing with const
// const c = 100; //global space
// {
//         var a = 10; 
//         let b = 20; //local
//         const c = 30; //let is in global block space
//         console.log(a); //10
//         console.log(b); //20
//         console.log(c); //30
        
//     }
//     console.log(c); //100 use global space shadowing

// illegal shadowing

// can do
// var a = 20;
// {
//     var a =20;
// }

// cant do shadow
// let a = 20;
// {
//     var a =20;
// }

// can do
// var a = 20;
// {
//     let a =20;
// }
// let a = 20;
// {
//     let a =20;
// }

// lexical block scope
const a = 20;
{
    const a = 100;
    {
        const a = 200;
        console.log(a);
    }
}
// Block
// a: 200
// Block
// a: 100
// Script
// a: 20