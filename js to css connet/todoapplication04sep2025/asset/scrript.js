"use strict"
let tasklist= document.getElementById("tasklist");

let countid = 1;

function add(){

    let temp = document.getElementById("task").value ;

    // console.log(temp);

    let li = document.createElement("li");
    // li.innerHTML = `<input type="checkbox">
    //              <span>${temp}</span>
    //             <button>Edith</button>
    //             <button>Delete</button>`

    li.innerHTML = `
  
                <input type="checkbox" onchange="scrach('countid${countid}')">
                <span id="text">${temp}</span>
                <button onclick="edit('countid${countid}')">Edit</button>
                <button onclick="DeleteItem('countid${countid}')">Delete</button>
                
  
    `;

    li.setAttribute("id",`countid${countid++}`)

    tasklist.appendChild(li);  
}



function scrach(id){

    let li = document.getElementById(id);
    // console.log(li);

    let checkbox = document.body.querySelectorAll(`#${id}>input`);
    console.log(checkbox[0].checked);

    if(checkbox[0].checked){
            let span = document.body.querySelector(`#${id}>#text`)
            // console.log(span);

            span.setAttribute("class","scratch" )
        
    }else{
          let span = document.body.querySelector(`#${id}>#text`)
            // console.log(span);

            span.setAttribute("class","unscratch" )
    }


    
    



    






    // span.style.textDecoration = "line-through"
}

function DeleteItem(id){
document.getElementById(id).remove();
}


function edit(id){
let span = document.body.querySelector(`#${id}>#text`)
let btn = document.body.querySelectorAll(`#${id}>button`)
let com = confirm("can you edit");

if(com){
  
    console.log(span);
    // span.contentedith

    span.contentEditable = true;
    span.focus();

    if(btn[0].innerHTML == "Edit"){
        document.body.querySelectorAll(`#${id}>button`)[0].remove();
        let btn2 = document.createElement("button");
        btn2.innerHTML = "Save";

        

        btn2.addEventListener("click",function(){
            span.contentEditable = false;
            btn2.remove();
            let btn3 = document.createElement("button");
            btn3.innerHTML = "Edit";
            btn3.addEventListener("click",function(){
                edit(id)
            })
            document.getElementById(id).appendChild(btn3);
            // btn[0].innerHTML = "Edit"
        })

        document.getElementById(id).appendChild(btn2);

    //    document.getElementById(id).insertBefore(btn2,document.getElementById(id).children[2]);
    }



    
}





    // let text = prompt('Enter your edith task',span.innerHTML)

    // console.log(text);
    // span.innerHTML = text
    


}
// let btn = document.createElement("button");

// btn.innerHTML = "SAve"


// btn.addEventListener("click", ()=>{
//     alert("ok")
// })

// document.body.appendChild(btn);