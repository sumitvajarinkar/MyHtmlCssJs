// Object Oriented 

let car = {
    name : 'Alto 800',
    topSpeed:90,
    run : function(){
        console.log('Car is running')
    }
}

// constructor
// new Date(){}

// Constructor for car
function GeneralCar(givenName,givenSpeed){
    this.givenName = givenName;
    this.topSpeed=givenSpeed;
    this.run = function(){
        console.log(`${this.name} is running`)
    }
    this.analyze = function(){
        console.log(`This car is slower by ${200 - this.topSpeed} than Mercedes`)
    }
}
car1 = new GeneralCar('Thar',180)
car2 = new GeneralCar('Alto',100)
car3 = new GeneralCar('Mercedes',200)
console.log(car3)

// Object literal, object. prototype

let obj = {
    name:"sumit",
    channel:"Hogwarts",
    address:"space"
}

function Obj(givenName){
    this.name=givenName
}
Obj.prototype.getName = function(){
    return this.name;
}
Obj.prototype.setName = function(newName){
    this.name = newName;
}
let obj2 = new Obj('sumit raj')
console.log(obj2)