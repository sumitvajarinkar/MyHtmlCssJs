console.log('Hi....')

//  ctrl + shift + r

/*div have head when some one click on div it convert it in editable item. whenevr user click away (blur) save note into local storage

*/
// create element 
let divElem = document.createElement('div')

//add text
let val = localStorage.getItem('text')
let text;
if(val==null){

    text = document.createTextNode('Click here to edit !')
}
else{
    text = document.createTextNode(val)
}
divElem.appendChild(text)
// give element id class style
divElem.setAttribute('id','elem')
divElem.setAttribute('class','elem')
divElem.setAttribute('style','border:2px solid black')
// grab main container
let container = document.querySelector('.container')
let first = document.getElementById('first')
// insert element before ID first
container.insertBefore(divElem,first)

console.log(divElem, container, first)
// add event listener to div element
divElem.addEventListener('click', function(){
    let noTextAreas = document.getElementsByClassName('textarea').length;
    if(noTextAreas == 0){
    let html = elem.innerHTML;
    divElem.innerHTML = `<textarea class='textarea' id='textarea' rows='3'>${html}</textarea>`;
    }
    // listen for blur event on textarea
    let textarea = document.getElementById('textarea')
    textarea.addEventListener('blur',function(){
        elem.innerHTML = textarea.value;
        localStorage.setItem('text',textarea.value)
    })
});