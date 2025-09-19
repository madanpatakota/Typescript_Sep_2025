
// TS = Js + fewfeature

var customer_ID_one:number = 1;
    customer_ID_one        = 2;
    //customer_ID_one      = "John";
console.log(customer_ID_one);

var customer_one:string    = "12345";
    customer_one           = "adafasas";
console.log(customer_one);

var customer_one_status:boolean    = false
    customer_one_status            = true;
console.log(customer_one_status);


var customer_two:any = false;
    customer_two     = "JOHN";


var customer_three:unknown   = false;
    customer_three           = "JOHN";


let checking_one:string = customer_two;
//let checking_two:string = customer_three;


//Arrays

var customerIDs : number[]   = [ 1,2,3,4];
customerIDs.push(5);   //1,2,3,4,5


var customerNames:string[]  = ["JOhn" , "Roberrt" ];
customerNames.push("robert");


//readonly means you cann't modify the variable
var MgrNames:readonly string[]        = ["JOhn" , "Roberrt" ];
//MgrNames.push("robert");


var Companames:readonly string[]        = ["Misard" ];
//Companames.push("TCS");
