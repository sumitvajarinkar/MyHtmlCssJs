/*AJAX - asynchronous javaScript and XML
not programming language it is set of existing technologies
No page refresh, UI, interactive
modern websites use JSON instead or XML for data transfer
*/
// 
let fetchBtn = document.getElementById('fetchBtn')
fetchBtn.addEventListener('click',buttonClickHandler)


function buttonClickHandler(){
    console.log('You have clicked fetchButton')
    
    //Instantiate an xhr object
    const xhr = new XMLHttpRequest()

    //open the object
    //GET - URL and content
    //POST -URL and data, response
    // true(no block) - async

    // xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true); 

    xhr.open('POST','http://dummy.restapiexample.com/api/v1/create',true); //true(no block) - async
    xhr.getResponseHeader('content-type', 'application/x-www-from-urlencoded')

    //what to do on progress (optional)
    xhr.onprogress = function(){
        console.log('On progress')       
    }
    
    // xhr.onreadystatechange = function(){
    //     console.log('Ready state is',xhr.readyState)
    // }

    //what to do when responses is ready
    xhr.onload = function(){
        if(this.status === 200)
        {
            console.log(this.responseText)

        }
        else{
            console.log('Error')
        }
    }

    //send the request
    params = `{"name":"test","salary":"123","age":"23"}`;
    xhr.send(params);
    console.log('Done')
}

let popBtn = document.getElementById('popBtn')
popBtn.addEventListener('click',popHandler)


function popHandler(){
    console.log('You have clicked pop handler')
    
    //Instantiate an xhr object
    const xhr = new XMLHttpRequest()

    //open the object
    //GET - URL and content
    //POST -URL and data, response
    // true(no block) - async

    xhr.open('GET','http://dummy.restapiexample.com/api/v1/employee/1',true); 

    // xhr.open('POST','http://dummy.restapiexample.com/api/v1/create',true); //true(no block) - async
    // xhr.getResponseHeader('content-type', 'application/x-www-from-urlencoded')

    //what to do on progress (optional)
    // xhr.onprogress = function(){
    //     console.log('On progress')       
    // }
    
    // xhr.onreadystatechange = function(){
    //     console.log('Ready state is',xhr.readyState)
    // }

    //what to do when responses is ready
    xhr.onload = function(){
        if(this.status === 200)
        {
            let obj = JSON.parse(this.responseText)
            console.log(obj)
            let list = document.getElementById('list')
            str=''
            for(key in obj){
                str += `<li>${obj[key].employee_name} </li>`
            }
            list.innerHTML = str
        }
        else{
            console.log('Error')
        }
    }

    //send the request
    xhr.send();
    console.log('Done')
}