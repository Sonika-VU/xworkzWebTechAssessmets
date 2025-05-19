var age =10;
let gender ='female';
const institute ='x-workz'
document.writeln(age)

console.log(age)

let emp1 = {id:12, empName : 'ss', salary:1000000}

let emp2 = new Object();
emp2.id=13;
emp2.empName = 'bb'
emp2.salary=120000;
emp2.id=14

function emp3(id, empName, salary){
    this.id = id;
    this.empName = empName;
    this.salary = salary
}