
function sumit(){
    console.log('Hi....')
}
sumit()


const sumit1 = function (){
    console.log('Hi1....')
}
sumit1()

//ARROW Function

const sumit2 = ()=> {
    console.log('Hi2....')
}
sumit2()


const greet = () => {
    return 'Good_Morning'
}
console.log(greet())

// one liners do not need braces and return
const greet1 = () => 'Good_Afternoon'
console.log(greet1())


const greet2 =() => ({name:'sumit'})
console.log(greet2())

// single parameter do not need paranthesis
// Put paranthesis for multiple parameters
const greet3 = (name,end) => 'Good_Evening '+ name + end
console.log(greet3('Sumit',' Good Bye !'))