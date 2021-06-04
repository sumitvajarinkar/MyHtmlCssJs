// callbacks - func inside func

const students = [
    {name: 'sumit',subject: 'JS'},
    {name: 'rahul',subject: 'CPP'}
]


function enrollStudent(student,callback){
    setTimeout(function() {
        students.push(student)
        console.log('Enrolled')
        callback();
    }, 1000);
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


let newStudent = {name:'neha',subject:'C'}
enrollStudent(newStudent, getStudents)
// getStudents()