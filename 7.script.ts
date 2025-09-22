//interface --> contract

/* Interface
  intrface is nothing but a  contract | Service .. where we are going to provide the methods into it.
*/


//{

   // methods

//}

interface IEmpService{
    getEmployee():string;   //method

    getMyname    :string;   //kind of field

    getEmployees():string[];

}

class Employee implements  IEmpService{

    getMyname: string = "John";

    getEmployee():string{
        return "Peter"
    }

    getEmployees(): string[] {
        return ["john" , "peter"];
    }
}

var emp = new Employee();
console.log(emp.getMyname);

let result = emp.getEmployee();
console.log(result);

let result1 = emp.getEmployees();
console.log(result1);


