// for-in - objrct
// for-of - with any

people = ['Sumit','Rahul','Neha']


// for (let index = 0; index < people.length; index++) {
//     const element = people[index];
//     console.log(element);   
// }

obj = {
    name:'sumit',
    language: 'JS',
    role:'SWE'
}
// console.log(obj);

// for (let index = 0; index < Object.keys(obj).length; index++) {
//     const element = obj[Object.keys(obj)[index]];
//     console.log(element);   
// }


// for-in use in object
for (let key in obj){
    // console.log(obj[key]); 
}

myString = 'I am Sumit'
for (let char in myString){
    // console.log(myString[char]); 
}
// I

// a
// m
 
// S
// u
// m
// i
// t


// for-of - with any
for(let name of people){
    console.log(name);
    
}