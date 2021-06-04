let cont = document.querySelector('.no')
cont = document.querySelector('.container')
let nodename = cont.childNodes[5].nodeName;
console.log(nodename) //div
// nodeTypes
// 1-element 2 attribute 3 text 8 comment 9 document 10 doctype
// let nodeType = cont.childNodes[0].nodeType;
// nodeType = cont.childNodes[0];
// console.log(nodeType) //3


// childNode :get all-text, comments
//children :get only elements-div, h1, li, ui

nodename = cont.childNodes[5].nodeName;
// console.log(nodename) //div
nodename = cont.children[5].nodeName;
// console.log(nodename) //div
// console.log(cont.childNodes)
// console.log(cont.children) 

// children of children
let container = document.querySelector('div.container')
// console.log(container.children[1].children[0].children)
console.log(container.firstChild)
console.log(container.lastChild)
console.log(container.firstElementChild)
console.log(container.lastElementChild)
console.log(container.childElementCount) //6
console.log(container.children)//6

console.log(container.firstElementChild.parentNode)
console.log(container.firstElementChild.nextElementSibling)
console.log(container.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling)
