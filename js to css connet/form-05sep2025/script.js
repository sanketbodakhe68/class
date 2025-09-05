"use strict"

function submit(){
    let fname= document.getElementById("fname").value;
    console.log("first name",fname);
    let mname= document.getElementById("mname").value;
    console.log("middle name",mname);
    let lname= document.getElementById("lname").value;
    console.log("last name",lname);
    let email= document.getElementById("email").value;
    console.log("last name",email);
    let phone = document.getElementById("phonno").value;
    console.log("last name",phone);
    let gender = document.getElementById("gender").value;
    console.log("gender is ",gender).value;

}



function mysubmit(e){

    console.dir(e);

    // let username = e.target.elements[0].value;



    // for(let res of e.target.elements){
    //     console.log(res.value);
        
    // }


    let radiom = e.target.elements[2].checked;
    let radiof = e.target.elements[3].checked;
    let finalRadio = (radiom)?true:false

    let GenValue;
    if(finalRadio){
        GenValue = e.target.elements[2].value
    }else{
            GenValue = e.target.elements[3].value
    }

    let obj = {
        "username":e.target.elements[0].value,
        "password":e.target.elements[1].value,
        "gen": GenValue
    }

    console.log(obj);
    



    return false;
    



}


let f = document.body.getElementsByTagName('form')[0];
f.addEventListener('submit', (e)=>{
    e.preventDefault()

    console.log(e);
    


} )