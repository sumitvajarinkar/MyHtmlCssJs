const proto = {
    slogan: function(){
        return `My company is best`;

    },
    changeName: function(newName){
        this.name = newName
    }
}
// Create sumit obj
/*
const sumit = Object.create(proto)
sumit.name='sumit'
sumit.role='web developer'
sumit.changeName('sumit1')
*/
// Create sumit obj
const sumit = Object.create(proto, {
    name:{value:'sumit', writable:true},
    role:{value:'web developer'}
})
sumit.changeName('sumit1')
console.log(sumit)

// employee constructor

function Employee(name,role,salary){
    this.name=name;
    this.role=role;
    this.salary=salary;
}
Employee.prototype.slogan =function(){
    return `My company is best, by ${this.name}`;
}
let sumitObj = new Employee('sumit', 'SWE', 100000);
console.log(sumitObj.slogan())

function programmer(name,role,salary, language){
    Employee.call(this,name,salary,role,language);
    this.language=language;

}
// Inherit the prototype
programmer.prototype = Object.create(Employee.prototype);

//Set constructor
programmer.prototype.constructor = programmer;

let rahul = new programmer('rahul','web dev',2000,'JS')
console.log(rahul)
console.log(rahul.slogan())