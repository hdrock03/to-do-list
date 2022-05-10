const completion = document.querySelector(".completion");
const name = document.querySelector(".name");
const reset = document.querySelector(".reset");
const add = document.querySelector(".add");
const taskInput = document.querySelector(".task-input");
const taskList = document.querySelector(".task-lists")

add.addEventListener("click", addTask)
// console.log('9')
function addTask(){
// console.log('9')
const li = document.createElement('li');
li.className = 'task-item';
li.appendChild(document.createTextNode(taskInput.value))
taskList.appendChild(li);
storeTaskInLocalStorage(taskInput.value)
taskList.innerHTML= taskInput.value;

}

 function storeTaskInLocalStorage(task) {
     let tasks;
     if(localStorage.getItem(tasks) === null){
         tasks=[];
     } else {
         tasks = JSON.parse(localStorage.getItem('tasks'))
     }

     tasks.push(task)
     localStorage.setItem("tasks",json.stringify(tasks));
 }

 reset.addEventListener('click' , deleteTask );

 function deleteTask(){
    //  localStorage.removeItem()
 }