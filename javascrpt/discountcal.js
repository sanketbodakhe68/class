"use strict"
let n = +prompt("enter the ammount ");




if(n>=1001){
    let dis=n*0.10;
    let tp= n-dis;
    console.log("total payble ammount is ", tp);
    // document.writeln("total payble ammount is ", tp);

    let text = `
    <h1> total payble ammount is: ${tp} </h1>
    `
    document.writeln(text);
}
else if(n >= 500){
    let dis=n*0.05;
    let tp= n-dis;
    console.log("Total payble ammount is ", tp);
    // document.writeln("total payble ammount is ", tp);
    let text =` <h1> Total payable ammount is ${tp} </h1> `
    document.writeln(text);

}
 else{
    
   console.log("total payble ammount is ", n);
    // document.writeln("total payble ammount is ", n);
    let text =` <h1> Total payable ammount is ${n} </h1> `
    document.write(text);
 }