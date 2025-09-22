//typescript 
//Enum
//Enum is a kind of special class which represents the group of the constant value.
//By default enum start to initilize the variable with the 0 and then it will increase the count.
var Customer_Group_1;
(function (Customer_Group_1) {
    Customer_Group_1[Customer_Group_1["William"] = 0] = "William";
    Customer_Group_1[Customer_Group_1["Clerk"] = 1] = "Clerk";
    Customer_Group_1[Customer_Group_1["John"] = 2] = "John";
    Customer_Group_1[Customer_Group_1["Andy"] = 3] = "Andy";
    Customer_Group_1[Customer_Group_1["Mery"] = 4] = "Mery";
})(Customer_Group_1 || (Customer_Group_1 = {}));
console.log("William number is : " + Customer_Group_1.William); //0
console.log("Clerk number is : " + Customer_Group_1.Clerk); //1
console.log("John number is : " + Customer_Group_1.John); //0
console.log("Mery number is : " + Customer_Group_1.Mery); //1
var Customers_Group_2;
(function (Customers_Group_2) {
    Customers_Group_2[Customers_Group_2["Willimam"] = 101] = "Willimam";
    Customers_Group_2[Customers_Group_2["Clerk"] = 201] = "Clerk";
    Customers_Group_2[Customers_Group_2["John"] = 301] = "John";
    Customers_Group_2[Customers_Group_2["Andy"] = 401] = "Andy";
    Customers_Group_2[Customers_Group_2["Mery"] = 501] = "Mery";
})(Customers_Group_2 || (Customers_Group_2 = {}));
console.log("William number is : " + Customers_Group_2.Willimam);
console.log("Clerk number is : " + Customers_Group_2.Clerk);
console.log("John number is : " + Customers_Group_2.John);
console.log("Andy number is : " + Customers_Group_2.Andy);
console.log("Mery number is : " + Customers_Group_2.Mery);
var Customers_Group_3;
(function (Customers_Group_3) {
    Customers_Group_3["Willimam"] = "IND";
    Customers_Group_3["Clerk"] = "US";
    Customers_Group_3["John"] = "Aus";
    Customers_Group_3["Andy"] = "UK";
    Customers_Group_3["Mery"] = "SA";
})(Customers_Group_3 || (Customers_Group_3 = {}));
console.log("William Location is : " + Customers_Group_3.Willimam); //0
console.log("Clerk Location is : " + Customers_Group_3.Clerk);
console.log("John Location is : " + Customers_Group_3.John);
console.log("Andy Location is : " + Customers_Group_3.Andy);
console.log("Mery Location is : " + Customers_Group_3.Mery);
//Real time example
var Roles;
(function (Roles) {
    Roles[Roles["Admin"] = 1] = "Admin";
    Roles[Roles["User"] = 2] = "User";
    Roles[Roles["Viewer"] = 3] = "Viewer";
})(Roles || (Roles = {}));
var MyRoleID = 1;
//case 1:
if (MyRoleID == 1) {
    console.log("MY role is 1");
}
//case 2:
//1. Developer mentality we can easily understand the code 
if (MyRoleID == Roles.Admin) {
    console.log("MY role is Admin");
}
var AlertMessages;
(function (AlertMessages) {
    AlertMessages["Success"] = "Operation completed successfully.";
    AlertMessages["Error"] = "An error occurred during the operation.";
    AlertMessages["Warning"] = "Please check your input.";
    AlertMessages["Info"] = "This is an informational message.";
})(AlertMessages || (AlertMessages = {}));
var apiMessage = "Operation completed successfully"; //think you are getting one message from api
if (apiMessage == AlertMessages.Success) {
    ////Code
}
