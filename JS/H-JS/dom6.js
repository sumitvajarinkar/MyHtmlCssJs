let str = 'python'
let links = document.links
// console.log(links)
let href
Array.from(links).forEach(function(element){
    href = element.href;
    // console.log(href)
if(href.includes(str)){
        console.log(href)
    }
})

let imp = ['adark','pyaz','gobi']
let name = (localStorage.getItem('sabzi'))
name = JSON.parse(localStorage.getItem('sabzi'))
console.log(name)

// localStorage.setItem('Name','Sumit')
// localStorage.setItem('Name1','Rahul')
// localStorage.setItem('sabzi',JSON.stringify(imp)

//add key value inside localStorage
sessionStorage.setItem('sessionName',"sSumit")
sessionStorage.setItem('sessionName1',"sRahul")
sessionStorage.setItem('sessionsabzi',JSON.stringify(imp))

// Clear particular
// localStorage.removeItem('Name')

// Retrieve an item from the local storage
// let name = localStorage.getItem('Name')
//  name = localStorage.getItem('Name1')
// console.log(name)


// NAMASTE JS