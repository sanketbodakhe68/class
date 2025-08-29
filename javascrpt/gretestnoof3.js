"use strict"

let a = +prompt("enter the 1st no");
let b = +prompt("enter the secoun no");
let c = +prompt("enter theh 3rd no ");
let fn=` <h2> enter 1st no id: ${a} </h2>`;
let sn=` <h2> enter 2nd no id: ${b} </h2>`;
let tn=` <h2> enter 3rd no id: ${c} </h2>`;
document.writeln(fn);
document.writeln(sn);
document.writeln(tn);

if(a>b && b>c){
    console.log(" grestest no is ",a)
    let gtn=` <h1> gretest mo is : ${a} </h1>`
    document.writeln(gtn)
}
else if (b>a && b>c){
     console.log(" grestest no is ",b)
     let btn=` <h1> gretest mo is : ${b} </h1>`
    document.writeln(btn)

}
else{
     console.log(" grestest no is ",c)
    let ctn=` <h1> gretest no is : ${c} </h1>`
    document.writeln(ctn)

}