//typescript 
//Enum
//Enum is a kind of special class which represents the group of the constant value.
//By default enum start to initilize the variable with the 0 and then it will increase the count.
enum Customer_Group_1{
    William ,       // 0
    Clerk,          // 1
     John,          //2
     Andy,
     Mery
}


console.log("William number is : " + Customer_Group_1.William);    //0
console.log("Clerk number is : " + Customer_Group_1.Clerk);     //1

console.log("John number is : " + Customer_Group_1.John);    //0
console.log("Mery number is : " + Customer_Group_1.Mery);     //1



enum  Customers_Group_2{ 
     Willimam  = 101 ,    
     Clerk     = 201  ,      
     John      = 301 ,   
     Andy = 401,
     Mery = 501,
}

console.log("William number is : " + Customers_Group_2.Willimam);
console.log("Clerk number is : " + Customers_Group_2.Clerk);
console.log("John number is : " + Customers_Group_2.John);
console.log("Andy number is : " + Customers_Group_2.Andy);
console.log("Mery number is : " + Customers_Group_2.Mery);



enum  Customers_Group_3{ 
     Willimam  = "IND" ,     //0
     Clerk     = "US"  ,      //1
     John      ="Aus" ,   //2
     Andy = "UK",
     Mery = "SA",
}

console.log("William Location is : " + Customers_Group_3.Willimam);    //0
console.log("Clerk Location is : " + Customers_Group_3.Clerk);
console.log("John Location is : " + Customers_Group_3.John);
console.log("Andy Location is : " + Customers_Group_3.Andy);
console.log("Mery Location is : " + Customers_Group_3.Mery);



//Real time example


enum Roles {
    Admin    = 1,
    User     = 2,
    Viewer   = 3,
}

var MyRoleID = 1;

//case 1:
if(MyRoleID == 1){
    console.log("MY role is 1")
}

//case 2:
//1. Developer mentality we can easily understand the code 
if(MyRoleID == Roles.Admin){
console.log("MY role is Admin")
}






enum AlertMessages{
    Success = "Operation completed successfully.",
    Error   = "An error occurred during the operation.",
    Warning = "Please check your input.",
    Info    = "This is an informational message."
}



var apiMessage = "Operation completed successfully";  //think you are getting one message from api

if(apiMessage == AlertMessages.Success){
     ////Code
}




















