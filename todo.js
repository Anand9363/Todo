let form = document.querySelector("#task-form")
let taskInput = document.querySelector("#task")
let taskList = document.querySelector(".collection")
let clearbtn = document.querySelector(".clear-task")
loadEventListener()
function loadEventListener() {
    //add task
    form.addEventListener("submit", addTask)
    //remove task
    taskList.addEventListener("click",removeTask)
    //clear task 
    clearbtn.addEventListener("click",clearTask)
}
function addTask(e) {
    e.preventDefault();
    //validate
    if(taskInput.value===""){
        alert("Please fill the form")
        return
    }
       let exitingtasks=document.querySelectorAll(".collection-item")
       for(let task of exitingtasks){
        if(task.innerText.trim().toUpperCase()===taskInput.value.trim().toUpperCase()){
            alert("Already exit")
            return
        }
       }
        let li=document.createElement("li")
        li.className="collection-item"
        li.appendChild(document.createTextNode(taskInput.value))
        let link=document.createElement("a")
        link.className="delete-item secondary-content"
        li.appendChild(link)
        link.innerHTML=<i class="fa fa-remove"></i>
        taskList.appendChild(li)
        taskInput.value=""
   
}
function removeTask(event){
    if(event.target.parentElement.classList[0]==="delete-item"){
        event.target.parentElement.parentElement.remove()
    }
}
function clearTask(){
    console.log(taskList.children);
    let changeToArr=Array.from(taskList.children);
    changeToArr.forEach(function(element){
        element.remove()
    })
}
let productList=document.querySelector(".collection")
let pl=productList.querySelectorAll("li")
let se=document.getElementById("tasktwo")

let exitingtasks=document.querySelectorAll(".collection-item")

se.addEventListener("keyup",function(){
    let env=event.target.value.toUpperCase()
    console.log(env);
    for(let task of exitingtasks){
        console.log(task);
        if(task.innerText.trim().toUpperCase().indexOf(env)<0)
            {
                task.style.display="none"
            }
            else{
                task.style.display="block"
            }
    }
    
})
// let pc=document.getElementById("product")
// let se=document.getElementById("search")
// let pl=pc.querySelectorAll("div")
// se.addEventListener("keyup",function(){
//     let env=event.target.value.toUpperCase()
//     for(count=0;count<pl.length;count=count+1){
//         let pn=pl[count].querySelector("p").textContent
//         if(pn.toUpperCase().indexOf(env)<0){
//             pl[count].style.display="none"
//         }
//         else{
//             pl[count].style.display="block"
//         }
//     }
// })