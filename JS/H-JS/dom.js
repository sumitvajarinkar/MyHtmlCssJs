console.log('Understanding DOM')
let a = document;
a = document.all;
// a = document.body; //gives body tag
// a = document.forms[0];gives forms tag
// a = document.forms; //gives forms tag

//all elements
// Array.from(a).forEach(element => {
//     console.log(element)
// });

// a = document.links[0].href;

// document img and scripts

// a = document.images[0];

// a = document.scripts[0]

a = document.links;
console.log(a)
Array.from(a).forEach(function(element){
    if(element.href.includes('code'))
    {
        console.log(element.href)
    }
});