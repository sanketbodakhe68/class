"use sctrict"
let n =+prompt("enter the no");
text= `<h1> your no is:${n} <h1>`;
document.write(text);
let fact=1;


for(let i=n; i>=1; i--){
    fact=fact*i;
}
console.log("factoral of %d is %d ",n,fact);
document.write("factoral are ",fact);
