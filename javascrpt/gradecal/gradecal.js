"use strict"
// let grade = +prompt("enter the peracantage are ");
let grade = document.getElementById('per').value;
let a;
// let text = (a)=>{
//  return ` <h1> greade is: ${a}</h1>`
// }
 
function text(a){
   
 let temp = ` <h1> greade is: ${a}</h1>`

//  document.writeln(temp)
let h = document.createElement("h1");
h.innerHTML = temp
document.body.appendChild(h)
 console.log(`grede is %c ${a} ` , "background-color: red; font-size: 40px;")

 
}


function btn(){
grade = Number(document.getElementById('per').value);
  if(grade>=95){
    a= "A++";
text(a)
  
}
else if(grade>=90){
    a= "A";
 text(a)
 
} 
else if(grade>=85){
    a= "B++";
  document.writeln(text(a))
 
} 
else if(grade>=80){
    a= "B";
  document.writeln(text(a))
 
} 
else if(grade>=75){
    a= "C++";
  document.writeln(text(a))
 
} 
else if(grade>=65){
    a= "C";
  document.writeln(text(a))
 
} 
else if(grade>=55){
    a= "D++";
  document.writeln(text(a))
 
} 
else if(grade>=35){
    a= "D";
  document.writeln(text(a))
 
} 
else{
    a= "fail";
    document.writeln(text(a))
}


}









