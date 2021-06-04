// let btn = document.getElementById('btn')
// btn.addEventListener('click',func1)
// btn.addEventListener('dblclick',func2)
// // btn.addEventListener('mousedown',func3)
// function func1(e) {
//     // console.log('Thanks',e)
//     e.preventDefault()
// }
// function func2(e) {
//     console.log('Thanks 2',e)
//     e.preventDefault()
// }
// function func3(e) {
//     console.log('Thanks 3',e)
//     e.preventDefault()
// }

// document.querySelector('.no').addEventListener('mouseenter',function(){
//     console.log('You entered NO')
// })
// document.querySelector('.no').addEventListener('mouseleave',function(){
//     console.log('You exited NO')
// })
document.querySelector('.container').addEventListener('mousemove',function(e){
    console.log(e.offsetX,e.offsetY)
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetX},${e.offsetY},50)`
    console.log('You triggered mousemove')
})

