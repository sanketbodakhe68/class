"use strict"

let str=  prompt("enter the text")



let temp=""
for(let i= str.length-1; i>=0;i--){
   
    temp += str[i];

}
if(str==temp){
    console.log("string is paldrom"); 
}
else{
    console.log("string is not paldrom");
    

}
