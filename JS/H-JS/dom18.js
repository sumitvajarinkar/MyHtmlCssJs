// async & wait
// async return promise

async function sumit(){
    console.log('inside sumit func') //2
    const response = await fetch('https://api.github.com/users') //4
    console.log('before reponse') //6
    const users = await response.json()
    console.log('users resolved') //7
    return users

    // return 'sumit';
}
console.log('before calling sumit') //1
let a = sumit()
console.log('after calling sumit') //3
console.log(a)
a.then(data => console.log(data))
console.log('last line') //5