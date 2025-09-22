function PrintMessage() {
    console.log("Message print");
}
function PrintMessage1(id, name) {
    //code.............by using id and name
    console.log("Message print");
}
PrintMessage1(1, "JOhn");
function GetMessage() {
    return 1;
}
function GetMessage1(id, name) {
    //code.............by using id and name
    return "Message-1";
}
GetMessage1(1, "JOhn");
let cusomerPrice1;
cusomerPrice1 = 10000;
let cusomerPrice2;
cusomerPrice2 = 1000;
cusomerPrice2 = "1000";
//as useful for convert to one type to another type
//ex : unknown to number
var productNumber = 1; // i do't know which datatpe this is.
let id = productNumber; //now ts compiler can understand you are saying its a number
//Here id is 1 and ts compiler aware of the id is the number
let productName = "Samsung";
// ts compiler thinking that productName is the unknowsn
let pName = productName;
//ex : unknown to string
// Now ts compiler thinking that productName is the string
