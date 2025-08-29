"use strict";
let n = +prompt("eneter the number");

let isPrime = true;

for(let i=2; i<n; i++){

    if(n % i === 0){
        isPrime = false
        break
    }

}
 let text =`<h1 style="color: green;"> ${n} is prime number </h1>`;
 let text2 =`<h1 style="color: red;"> ${n} is not prime number </h1>`

if(isPrime){
    console.log(" %d is prime",n );
    document.write(text);
}
else{
    console.log(" %d is not prime",n );
    document.write(text2);

}