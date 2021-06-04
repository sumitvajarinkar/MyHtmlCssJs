console.log('dom3')
let element = document.createElement('li')
//add className
element.className='chidul1'
element.id='createdLi';
element.setAttribute('title','mytitle')
// element.innerHTML ='<b>I created text in JS</b>'
// element.innerText ='<b>I created text in JS</b>'
let text = document.createTextNode('Im textNode')
element.appendChild(text)

// let ul=document.querySelector('ul.this')
// ul.appendChild(element)
// console.log(ul)
// console.log(element)

//Replace li with h3

let ele2 = document.createElement('h3')
ele2.id = 'ele2'
ele2.className = 'ele2'
let tnode = document.createTextNode('Created node ele2')
ele2.appendChild(tnode)

element.replaceWith(ele2)

// 
let myul = document.getElementById('myul')
myul.replaceChild(element,document.getElementById('fui'))
// myul.removeChild(document.getElementById('lui'))

// give attribute id class 
let pr = ele2.hasAttribute('a')
// console.log(pr)
ele2.removeAttribute('id')
ele2.setAttribute('title','mytitl2')
// console.log(ele2)

// create a heading with text go to cwh and create a tag outside it href=cwh
let me = document.createElement('a')
me.href ='www.codewithharry.com'
me.id ='harry'
me.className ='harry'
let node = document.createTextNode('Go to CWH')
me.appendChild(node)
console.log(me)
let ul = document.querySelector('ul')
ul.appendChild(me)