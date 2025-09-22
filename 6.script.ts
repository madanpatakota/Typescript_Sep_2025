 
 

 // one kind of a contract for class to make sure every member should be use in that class
 
 interface IpersonInfo{
    name     : string
    price    : number
    loc      : string
    isadmin  : boolean
 }


  interface IFamilyInfo{
    kidName : string,
    Mothername : string,
    fatherName : string
 }


 var PersonInfo : IpersonInfo = {
     name     : "JOhn",
     price    : 20000,
     loc      : "UK",
     isadmin  : true
 }

 
 var PersonFamilyInfo : IFamilyInfo = {
     kidName:"afasdas",
     Mothername:"afas",
     fatherName:"afa"
 }



 console.log(PersonInfo.name);