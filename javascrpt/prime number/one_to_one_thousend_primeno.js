"use strict"

for(let j=1;j<=1000000;j++){
    

let isPrime = true;

for(let i=2; i<j; i++){

    if(j % i === 0){
        isPrime = false
        break;
    }

}
 let text=`<h1> ${j} </h1>`;
if(isPrime){
   
    console.log(j);
    document.writeln(text)
   
    
}
 
}