"use strict"
let p= +prompt("enter the amount");
let r= +prompt("Enter the Rate ");
let t= +prompt("enter the peroid");

let si = (p*r*t)/100;
let tp= si+p
console.log("total payable ammount is %d", tp)
document.writeln("total payable amount is ",tp)