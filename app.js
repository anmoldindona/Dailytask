let ul=document.querySelector("ul");
let btn=document.querySelector(".add");
let inp=document.querySelector("input");
ul.innerHTML = localStorage.getItem("tasks");

btn.addEventListener("click",function(event){
    event.preventDefault();
    let item=document.createElement("li");
    let span=document.createElement("span");
    
    //checkbox
    let check=document.createElement("input");
    check.type="checkbox";
    check.classList.add("checkbox");
    span.appendChild(check);

//textspan
let textSpan=document.createElement("span");
textSpan.innerText=inp.value;
span.appendChild(textSpan);
item.appendChild(span);

    //deletbtn
    let dltBtn=document.createElement("button");
    dltBtn.innerHTML='<i class="fa-solid fa-trash"></i>';
    dltBtn.classList.add("delete");
    item.appendChild(dltBtn);


    ul.appendChild(item);
    localStorage.setItem("tasks", ul.innerHTML);
    inp.value="";
})
ul.addEventListener("click",function(event){
    let button=event.target.closest("button");
    if(button && button.classList.contains("delete")){
       button.parentElement.remove();
       localStorage.setItem("tasks", ul.innerHTML);
    }
})
