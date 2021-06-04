// promise - resolve - reject - pending
/*
function fun1(){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            const error = true;
            if(error)
            {
                console.log(' Resolved')
                resolve();
            }
            else{
                console.log('Not resolved')
                reject('Sorry !')
            }
        }, 1000);
    })
}

fun1().then(function(){
    console.log('Thanks for resolving')
}).catch(function(error){
    console.log('No prolem Bro...' + error)
})
*/


// callback to promises
// callbacks - func inside func

const students = [
    {name: 'sumit',subject: 'JS'},
    {name: 'rahul',subject: 'CPP'}
]


function enrollStudent(student){
    return new Promise(function(resolve,reject){
        setTimeout(function() {
            students.push(student)
            console.log('Enrolled')
            const error = false
            if(!error){
                resolve();
            }
            else{
                reject()
            }
        }, 1000);
    })
}

function getStudents(){
    setTimeout(function() {
        let str = ''
        students.forEach(function(student){
            str += `<li>${student.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log('Fetched')
    }, 5000);

}


// function inside [then] is ran as - [resolve]
// function inside [catch] is ran as - [reject]

let newStudent = {name:'neha',subject:'C'}
enrollStudent(newStudent).then(getStudents)
.catch(function(){
    console.log('error')
})
