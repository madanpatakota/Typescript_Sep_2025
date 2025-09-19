//tuple  : A tuple is nothting but a named Array.
var customerDetails = [1, "John", 20, false];
console.log(customerDetails[0]); //1
console.log(customerDetails[1]); //John 
console.log(customerDetails[2]); //20 
console.log(customerDetails[3]); //false 
var customerDetails_2 = [12222222, "adafsfasdasdfas", true];
console.log(customerDetails_2[0]); //12222222
console.log(customerDetails_2[1]); //adafsfasdasdfas 
console.log(customerDetails_2[2]); //true
var customerDetails_3 = ["helo", "world", true];
// Destructuring
// Extract the values from array or object to the variable(s)  
//Zip ---> 
//Extract files
//array destructuring
var [cusotmerID, custoemrname, customerage] = [1, "John", 20];
console.log(cusotmerID); //1
console.log(custoemrname); //John 
console.log(customerage); //20 
var person = { cusname: 'John', age: 30 };
console.log(person.cusname); //'John'
console.log(person.age); //30
//object destructuring
// Example : 1
var { cusname, age } = person;
console.log(cusname);
console.log(age);
var person1 = { cusname1: 'John', age1: 30, loc1: "bengolore" };
var { cusname1, age1, loc1 } = person1;
console.log(cusname1);
console.log(age1);
console.log(loc1);
//object
var cusomer_deails_1 = { cusname1: "john", age1: 30, loc1: "bengolore" };
console.log(cusomer_deails_1.cusname1); //john
console.log(cusomer_deails_1.age1); //30
console.log(cusomer_deails_1.loc1); //"bengoroe"
var obj = {
    studentId: 1
};
//this is best practice
var obj1 = {
    "studentId": 1
};
var obj2 = {
    "studentId": 1,
    "location": "Hyd"
};
//Q: can i set the last key as a optional ?
var obj3 = {
    "studentId": 1,
    "location": "ban"
};
