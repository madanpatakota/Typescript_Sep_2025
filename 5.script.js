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
var empName1 = "John";
// empName1.___________________
var customername = "John";
var customername_1 = "John";
var JohnAge1 = 20;
var JohnAge = 20;
var employee_one_age = 20;
var employee_one_salary = 12000;
var employee_one_status = true;
//  var cusotmerdeails_6 : { name : string , price : number , loc:string , isadmin:boolean} = {
//     name : "John",
//     price : 20000,
//     loc : "London",
//     isadmin: true
//  }
var cusotmerdeails_6 = {
    name: "John",
    price: 20000,
    loc: "London",
    isadmin: true
};
var cusotmerdeails_7 = {
    name: "John",
    price: 20000,
    loc: "London",
    isadmin: true
};
console.log(cusotmerdeails_7.name); //John
//  class Person : PersonInfo{
//  }
