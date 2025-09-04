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
// let com = confirm("can you edit");

// if(com){
//     console.log(span);

    
// }





    let text = prompt('Enter your edith task',span.innerHTML)

    console.log(text);
    span.innerHTML = text
    


}


