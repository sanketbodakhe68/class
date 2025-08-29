"use strict"

let str=  prompt("enter the text")
let text = ` <h1 style="background-color: aqua;">enter string is ${str}</h1>`
document.writeln(text);

let temp=""
for(let i= str.length-1; i>=0;i--){
    // console.log(str[i]);
    temp += str[i];
}
let text2=`<h1 style="background-color: red;">Revers String string is ${temp}</h1> `
console.log(temp);
document.writeln(text2);