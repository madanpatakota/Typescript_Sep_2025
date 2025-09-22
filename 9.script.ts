function PrintMessage() : void{
    console.log("Message print");
}

function PrintMessage1(id:number , name:string) : void{

    //code.............by using id and name
    console.log("Message print");
}

PrintMessage1(1,"JOhn");

function GetMessage() : number{
    return 1;
}

function GetMessage1(id:number , name:string) : string{
    //code.............by using id and name
    return "Message-1";
}

GetMessage1(1,"JOhn");
let cusomerPrice1 : number ;
cusomerPrice1 = 10000;


let cusomerPrice2 : number | string;
cusomerPrice2  = 1000;
cusomerPrice2  = "1000";


//as useful for convert to one type to another type
//ex : unknown to number
var productNumber : unknown = 1;  // i do't know which datatpe this is.
let id = productNumber as number; //now ts compiler can understand you are saying its a number
//Here id is 1 and ts compiler aware of the id is the number


let productName : unknown = "Samsung";
// ts compiler thinking that productName is the unknowsn

let pName = productName as string;
//ex : unknown to string
// Now ts compiler thinking that productName is the string

