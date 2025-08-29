"use strict";

let i = 0


// while(i<0){

//     console.log(i++)

//     // continue
//     // break

// }

// do{
//     console.log(i++)

// }while(i<=0)


//1,2,3,5,7,11,13,17,19,23,29,31,37,41

//

for(let n=1;n<=100;n++){
    // let n = 6; 

let isPrime = true;

for(let i=2; i<n; i++){

    if(n % i === 0){
        isPrime = false
        break
    }

}

if(isPrime){
    // console.log("Number is prime");
    console.log(n);
    document.writeln(n)
    
}
    
// }else{
//     console.log("nOT PRIME");
    
// }
}