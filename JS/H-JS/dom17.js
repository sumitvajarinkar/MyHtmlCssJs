
let myBtn = document.getElementById('myBtn')

let content = document.getElementById('content')

// function getData(){
//     console.log('Started getData')
//     url="sumit.txt"
//     fetch(url).then((response)=>{  //run in background - async
//         console.log('Inside first then')
//         return response.text()
//     }).then((data)=>{
//         console.log('Inside second then')
//         console.log(data)
//     })
// }

// function getData(){
//     console.log('Started getData')
//     url="https://api.github.com/users"
//     fetch(url).then((response)=>{  //run in background - async
//         console.log('Inside first then')
//         return response.json()
//     }).then((data)=>{
//         console.log('Inside second then')
//         console.log(data)
//     })
// }


function postData(){
    url = "http://dummy.restapiexample.com/api/v1/create";
    data = '{"name":"sumitv","salary":"123","age":"23"}'
    params = {
        method:'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    }
    fetch(url, params).then(response=> response.json())
    .then(data => console.log(data)
    )
}

postData()

/*
Before getData
Started getData
After getData
Inside first then
Inside second then
*/