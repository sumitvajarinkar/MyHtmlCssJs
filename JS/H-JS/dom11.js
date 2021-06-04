// ES 6 class inheritance

console.log('Yes')
class Employee{
    constructor(givenName,givenRole,givenSalary){
        this.name = givenName;
        this.role = givenRole;
        this.salary = givenSalary;
    }
    slogan(){
        return `i am ${this.name} and this company is the best !`
    }
    salaryFrom2019(){
        return this.salary - 90000;

    }
    //without object
    static add(a,b){
        return a+b;
    }
}
//Inherit
class programmer extends Employee{
   constructor(givenName,givenRole,givenSalary,givenLanguage,givenGithub){
       super(givenName,givenRole,givenSalary);
       this.language=givenLanguage;
       this.github=givenGithub;
   }
   favLang(){
       if(this.givenLanguage === 'C++'){
           return'C++';
       }
       else
        {
            return 'JS';
        }
   }
   static mul(a,b){
       return a*b;
   }
}
sumit = new Employee('sumit','SWE',100000);
// sumit = new Employee('rahul','SRE',120000);
// sumit = new Employee('neha','DE',130000);
// console.log(sumit)
// console.log('Salary hike of',sumit.salaryFrom2019())
// console.log(Employee.add(12,3))
neha = new programmer('Neha','SRE',120000,'C++','neha123')
console.log(neha)
console.log(neha.favLang())
console.log(programmer.mul(4,3))
