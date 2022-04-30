let menuBtn = document.querySelector(".logo-img");
menuBtn.addEventListener("click", function(){
    console.log("working")
    let navBtn = document.querySelectorAll(".navBtn");
    for(let i = 0 ; i < navBtn.length; i++){
        navBtn[i].classList.toggle("expand");
        
    }
    
})

let incTaskBtn = document.getElementById("incTask");
incTaskBtn.addEventListener("click", function(e){
    let compTask = document.querySelector(".completedTask");
    compTask.style.height = 0;
    compTask.style.opacity = 0;
    e.target.classList.toggle("selected");
})
let finTaskBtn = document.getElementById("compTask");
finTaskBtn.addEventListener("click", function(e){
    let unfTask = document.querySelector(".incomingTask");
    unfTask.style.height = 0;
    unfTask.style.opacity = 0;
    e.target.classList.toggle("selected");
})

let allTaskBtn = document.getElementById("allTask");
allTaskBtn.addEventListener("click", function(e){
    let unfTask = document.querySelector(".incomingTask");
    let compTask = document.querySelector(".completedTask");
    unfTask.style.height = "45%";
    unfTask.style.opacity = 1;
    compTask.style.height = "45%";
    compTask.style.opacity = 1;
    e.target.classList.toggle("selected");
})

let deletButton = document.querySelectorAll(".delete-task");
function deleteTask(){
    
    for(let i = 0 ; i < deletButton.length; i++){
        deletButton[i].addEventListener("click", function(e){
            let parentTag = e.target.parentElement;
            parentTag.remove();
        })
    }
    
}
deleteTask();


function finishUnfinish(){
    let allCheckBox = document.querySelectorAll(".complete-task-check");
    for(let i = 0 ; i < allCheckBox.length; i++){
        allCheckBox[i].addEventListener("change", function(e){
            let completedTask = document.querySelector(".completedTask");
            let unFinishedTask = document.querySelector(".incomingTask");
            let name = e.target.name;
            if(name === "unfinished"){
                // e.target.parentElement.classList.add("dis");
                setTimeout(function(){
                    e.target.name = "finished";
                    completedTask.prepend(e.target.parentElement);
                    e.target.parentElement.classList.remove("dis");
                    e.target.parentElement.classList.add("app");
                    e.target.parentElement.classList.add("complited");
                    e.target.parentElement.style.backgroundColor = "#ffffff4c";
                    
                }, 100)
            }else{
                setTimeout(function(){
                    e.target.name = "unfinished";
                    unFinishedTask.appendChild(e.target.parentElement);
                    e.target.parentElement.classList.remove("app");
                    e.target.parentElement.classList.remove("complited");
                    e.target.parentElement.classList.add("dis");
                    e.target.parentElement.style.backgroundColor = "#e64e5ecc"
                     
                }, 100)
                
            }
            
        })
    }
}
finishUnfinish();

let newTaskAdder = document.getElementById("addBtn");
newTaskAdder.addEventListener("click", function(e){
    let newTask = document.getElementById("newTask").value;
    if(newTask === "") return;
    document.getElementById("newTask").value = "";
    let parentSuper = document.querySelector(".incomingTask");
    // make div container
    let div_task = document.createElement("div");
    div_task.classList.add("task");
    // make checkbox
    let input_finished = document.createElement("input");
    input_finished.classList.add("complete-task-check");
    input_finished.setAttribute("name", "unfinished");
    input_finished.setAttribute("type", "checkbox");
    // make delete btn
    let btn_delete = document.createElement("button");
    btn_delete.classList.add("delete-task");
    btn_delete.innerText = "X";
    // make span
    let span_txt = document.createElement("span");
    span_txt.classList.add("task-text");
    span_txt.innerText = newTask;
    
    div_task.appendChild(input_finished);
    div_task.appendChild(btn_delete);
    div_task.appendChild(span_txt);

    parentSuper.prepend(div_task);
    deletButton = document.querySelectorAll(".delete-task");
    deleteTask();
    allCheckBox = document.querySelectorAll(".complete-task-check");
    finishUnfinish();

})

{/* <div class="task">
    <input type="checkbox" name="finishd" class="complete-task-check">
    <button class="delete-task">X</button>
    <span class="task-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea et dolores maiores repellat ullam, veniam eos amet cum sed quisquam quo consequatur laudantium iste est! Mollitia architecto sed nobis quidem.</span>
</div> */}



