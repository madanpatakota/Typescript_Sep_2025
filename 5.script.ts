/***********How to use the 'type' Keyword in Typescript
 * 
 * type is the  keyword in Typescript useful for creates the custom name.
 * 
 * type can used in any data type like string , number , boolean , undefined , null 
 * ( these 3 are primitives means once you declared you cannot change)
 * and also used in complex data types like array, objects also
 * 
 * 
 */



type TCSEmpName = string;
type InfosisEmpName = string;


var empName1:TCSEmpName = "John";

// empName1.___________________




var customername : string = "John"; 
type name = string;
var customername_1 : name = "John";

var JohnAge1 : number = 20;
type age = number;
var JohnAge:age  = 20;

type salary = number;
type status = boolean;

var employee_one_age    : age    = 20;
var employee_one_salary : salary = 12000;
var employee_one_status : status = true;


//  var cusotmerdeails_6 : { name : string , price : number , loc:string , isadmin:boolean} = {
//     name : "John",
//     price : 20000,
//     loc : "London",
//     isadmin: true
//  }

 
 var cusotmerdeails_6 : { name :TCSEmpName , price : salary , loc:string , isadmin:status} = {
    name : "John",
    price : 20000,
    loc : "London",
    isadmin: true
 }

 type PersonInfo = {
     name :TCSEmpName , 
     price : salary ,
     loc:string , 
     isadmin:status
}


 var cusotmerdeails_7 : PersonInfo = {
    name : "John",
    price : 20000,
    loc : "London",
    isadmin: true
 }

 console.log(cusotmerdeails_7.name); //John


//  class Person : PersonInfo{

//  }