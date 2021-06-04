let x =12;
let y = 3;
let z = x+y;
 z = x-y;
 z = x/y;
 z = x*y;
 
 // Math
 z=Math;
 z=Math.PI
 z=Math.E
 z=Math.floor(5.9)
 z=Math.ceil(-5.9)
 z=Math.round(5.6)
 z=Math.sqrt(25)
 z=Math.pow(2,4)
 z=Math.min(2,4)
 z=Math.max(2,4)
 z=Math.ceil(90 + (100-90)*Math.random())

//  console.log(z)


//  Date and time 
let today = new Date();
console.log(today) //object
// mm/dd/yy - valid form ()
let otherDate = new Date('7-17-2000 05:40:15')

console.log(otherDate)
let a;
a = otherDate.getDay()
// s m t w t f s
// 0 1 2 3 4 5 6
a = otherDate.getDate()
a = otherDate.getMinutes()
a = otherDate.getSeconds()
a = otherDate.getHours()
a = otherDate.getHours()
a = otherDate.getTime()
a = otherDate.getMilliseconds()
a = otherDate.getMonth()
// j f m a may dec
// 0 1 2 3 4   11
// console.log(a)
otherDate.setDate(23)
otherDate.setMonth(11)
otherDate.setYear(2000)
otherDate.setHours(2)
otherDate.setMinutes(45)
otherDate.setSeconds(15)
console.log(otherDate)
