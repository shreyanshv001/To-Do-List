const input=document.querySelector("input");
const btn=document.querySelector("button");
const listContainer=document.querySelector(".list-container");

btn.addEventListener("click",()=>{
    if(input.value==="") alert("Field cannot be empty");
    else{
        let li=document.createElement("li");
        li.innerText=input.value;
        listContainer.append(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.append(span);
    }
    input.value="";
    saveData()
});

listContainer.addEventListener("click",(e)=>{
    if(e.target.tagName==="LI") {
        e.target.classList.toggle("checked");
        saveData()
    }
    if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
});

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();