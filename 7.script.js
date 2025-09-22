//interface --> contract
class Employee {
    constructor() {
        this.getMyname = "John";
    }
    getEmployee() {
        return "Peter";
    }
    getEmployees() {
        return ["john", "peter"];
    }
}
var emp = new Employee();
console.log(emp.getMyname);
let result = emp.getEmployee();
console.log(result);
let result1 = emp.getEmployees();
console.log(result1);
