"use strict";


// let a = 10
// let b = 20






// console.log(a);
// console.log(b);

// a = a ^ b
// b = a ^ b
// a = a ^ b



// console.log(a);
// console.log(b);




// console.log(a,b, c);

// [a,c, b] = [b,a, c]
// console.log(a,b, c);




// let a= +prompt("enter the 1st number");
// let b= +prompt("enter the 2nd no");

// console.log(a);
// console.log(b);




// // let temp= a ;
// // a= b ;
// // b= temp;

// a= 




// console.log(a);
// console.log(b);


// let a =0;
// let b = 1;

// for(let i=0;i<=100;i++){

//     console.log(`${a} + ${b} = ${a+b}`);
//     document.writeln(`${a} + ${b} = ${a+b} <br>`)

//     let temp = b;
//     b = a+b
//     a = temp
    



 
// }


let a= 0;
let b=1;

 
for(let i=0; i<=100000;i++){
    console.log(BigInt(a)+BigInt(b))
    let temp= b;
    b= a+b;
    a= temp;   
}

