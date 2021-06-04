// Element Selector 

// 1.single Element Selector 

let element = document.getElementById('heading')
// element = element.className; //head
// element = element.childNodes; //print text in it
// element = element.parentNode; //print which it in
// <h1 id="heading">Welcome!</h1>
// element.style.color = 'red'
// console.log(element)
element.innerText='Sumit'
// console.log(element.innerText);
element.innerHTML='<b>VAjarinkar</b>'
// console.log(element.innerHTML);

let sel = document.querySelector('#heading') //id
sel = document.querySelector('.head') //class
sel = document.querySelector('form') //1st occurence
sel.style.color = 'green'
// console.log(sel)

// Multi element selector
let ele = document.getElementsByClassName('child')
// ele = document.getElementsByClassName('container')
// ele =document.getElementsByTagName('div')

// Array.from(ele).forEach(element => {
    //     console.log(element);
    // });
    
    for (let index = 0; index < ele.length; index++) {
        const element = ele[index];
        console.log(element)
            element.style.color = 'pink'
}