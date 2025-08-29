"use strict"
let list=[12,250000000,250000000,250000000,34,56,78,90,123,561,45,67,7,899,9,898,989,89,89,89,43,53,234,3,543546,5,6,54215454,65,7,567,67,7,6,756,7,5757,55,5,5,5,5,5,3,58888,4,234,25,3,4,3,989898,1]


// let list =[1,2,3,4,2,2,2,4,1,55,4]


for(let i=0; i<list.length; i++){
    // console.log(list[i]);
    for(let j=0; j<list.length; j++){
        
        if(list[i] == list[j] && i!=j){
         
            list.splice(i,1)
            i--;
            
        }
        
    }
    
}
console.table(list);





// let temp =[]

// for(let i =0; i<=list.length-1;i++){

//      for(let j=0; j<=temp;j++ ){
//         if(list[i]!=list[j] && i!=j){
//             temp.push(list[i]) 
//             console.log(list[i]);
            
           
        
//         }
//         else{
//              temp.push(list[i]);
          

            

//         }
        
//      }


// }
// console.log(temp);


// for( let i in list){
 
//     for(let j in list){
//         if(list[i]>list[j] && i!=j){
//             let temp= list[i];
//             list[i]= list[j];
//             list[j]= temp;
//         }
//     }
// }
// console.table(list);
// console.log(list[0]);
// console.log(list[list.length-1])











































// let numList = [11,4,5,1,3,2,7,6,8,9,10]

// for(let i in numList){

//     console.log(numList[i]);
//     for(let j in numList){
//         if(numList[i]<numList[j] && i!=j){
//             let temp = numList[i];
//             numList[i]=numList[j];
//             numList[j]=temp;
//         }
//     }
    
// }

// console.table(numList);













// addtion of list num
// let numberList= [5,10,15,20,25,100,30,35,40]


// let sum = 0;

// for(let i  in numberList) {
//     sum= sum + numberList[i];

// }

// console.log(sum);

//_------------------------------------------------------------------------
// user input of string 

// let list=["1000","1", "abc"];


// let intList = []
// let stringList = []


// for(let i in list){


    

//     // // console.log(typeof(i), i);

//     let n = Number(list[i])

//     if (!isNaN(n)){
//         list[i] = n
//     }

    
        

    // // console.log(n, typeof(n));
    // intList.push();

    // console.log(n);

    // if(isNaN(n)){
    //     stringList.push(i)
        
    // }else{
    //     intList.push(n)
    // }
    

    


// }

// console.log(list);


// console.log(stringList, intList);




// let numberlist ="0123456789";


// for(let i=0; i<=list.length -1 ; i++ ){

//     for( let j in list){
//         if(list[i]==numberlist[j]){
//             list[i]=Number(list[i]);
          
//         }
//     }
    
// }




// let size_of_list= +prompt("enter the size of list");



// for(let i=0;i<=size_of_list; i++){

//     list.push(prompt("enter value"));
// }
// console.log(list);


// let newList = []

//  for(let i of list){

//     let n = Number(i)

//     newList.push(n)
    
        
        

//  }
// console.log(newList);



// let seconList = []


// for(let i in newList){

//     console.log(newList[i], i);
//     if(newList[i] == NaN){
//         console.log("NAA----------");
        
//         seconList[i] = list[i]
//     }else{
//         seconList[i] = newList[i]
//     }
    
// }

// console.log(seconList);






// console.log(numberList.sort());


// let num = numberList.slice(2,5) // 15 20 25 30
// console.log(num);



// object methode

// push
// numberList.push(10)
// numberList.push(10)
// numberList.push(11)

// numberList.unshift(5)

// console.log(numberList)


// numberList.pop()
// numberList.shift()


// numberList.splice(1,1,100)
// numberList.splice(1,1)
// numberList.splice(1,2)



// console.log(numberList);
// console.table(numberList)
