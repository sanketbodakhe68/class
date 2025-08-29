"use strict"
let orStr ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";





let str= prompt("enter the string");

console.log("your string is",str);


let key = +prompt("enter the key ");

let en=""



for(let i=0; i< str.length;i++){
    
    for( let j= 0 ;j<orStr.length; j++){
        if (str[i]== orStr[j]){
            //  en+= orStr[j+key]

            if(key+j<=orStr.length-1){
                en += orStr[j+key];
            }else{
                
            let total = key +j
            // console.log(total); // e 4
            let t = total % orStr.length;

            en += orStr[t]
            
            
            }
             
        }
    }
}
console.log("encripeted string",en);
console.log("------------------------------");

//  o - ABCDhdjhbcdfgz"
// FGHImiomghiklE 5



let encStr= en

en = ""


for(let i=0; i< encStr.length;i++){
    
    for( let j= 0 ;j<orStr.length; j++ ){
        if (encStr[i]== orStr[j] ){
            //  en+= orStr[j+key]

            if(j-key<0){
  console.log(j-key);
  let t = (orStr.length-1) - (j-key)
  console.log(t);
  console.log(orStr[t-1]);

  en += orStr[t-1]

  
  

            }else{
  en += orStr[j-key];
            }

        

        }
        else{
           
             
        }

    }
}

console.log("decrepted string",en);








