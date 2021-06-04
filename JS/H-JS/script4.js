// Strings properties

// +, .concat, .length, toLowerCase(), toUpperCase()
//indexing start with 0

//str.indexOf() .lastIndexOf() .charAt() .endsWith() .includes():0,1
//str.substring(_,_) _ to _-1
//str.slice(_,_)
//str.split(_)
//str.replace(_,_)

// Template literals
// let fruit1 = 'Orange';
// let fruit2 = 'Apple';
// let myHtml = `Hello
//             <h1> This is heading </h1>
//             <p> You like ${fruit1} and ${fruit2}</p>`;

// document.body.innerHTML = myHtml;  

// if else
// === and !== check data type
let c='23';
if(c === 23){
    console.log('Yes')
}
else{
    console.log('No')
}

if(typeof c !== 5){
    console.log('Not same')
}
else{
    console.log('same')
}

// switch case
let key =10 
switch (key) {
    case 5:
        console.log('Its 5')
        break;
    case 10:
        console.log('Its 10')
        break;

    default:
        console.log('Default')
        break;
}







// array iteration

// let arr = [10,20,30,40,50,60];
// arr.forEach(function(element){
//     console.log(element)
// })
// let arra= [10,20,30,40,50,60];
// arra.forEach(function(element,index,array){
//     console.log(element,index,array)
// })
// for(let i=0;i<arr.length;i++)
// {
//     const element = arr[i]
//     console.log(element)

// }

// let obj = {
//     name:'rahul',
//     age:21,
//     type:'rude',
//     os:'ubuntu'
// }
// for(let key in obj){
//     console.log(`${key} of object is ${obj[key]}`)
// }