const completion = document.querySelector(".completion");
const name = document.querySelector(".name");
const reset = document.querySelector(".reset");
const add = document.querySelector(".add");
const taskInput = document.querySelector(".task-input");
const taskList = document.querySelector(".task-lists");

function renderList(){
    // meko email chahiye jiska session on ho
    let sessionKey= sessionStorage.getItem('userEmail')
 
    let taskArray = JSON.parse(localStorage.getItem(sessionKey)).tasks // returns array of tasks
    

    taskList.innerHTML = ""


    let htmlString = ``

    taskArray.forEach(item => {
        htmlString += `<li id=${item.id}>${item.task}  

                        <div class="buttons">
                        <i id=${item.id} class="fa fa-remove"> </i> <i class="fa fa-edit"></i>   <i class="fa fa-trash"></i>
                        </div>
                    
                        </li>`
    })


    taskList.innerHTML = htmlString


    // for(let i=0; i <  taskArray.length ; i++) {
    //     const li = document.createElement('li');
    //     li.className = 'task-item';
    //     li.appendChild(document.createTextNode(taskArray[i].task))
    //     ul.appendChild(li)
    // }
}


renderList();

add.addEventListener("click", addTask);

function addTask(e){

// validation check
if(taskInput.value === ''){
    alert("Add a Task")
    return
};

// get value from input field
const taskValue = taskInput.value;  // "buy milk"


// format user input


const newTask = {
    id:  Math.floor( Math.random() * 1000), //math.random hmesa 0 se 1 tak value deta h to jab 1000 se multiply kie to 0-999 tk value dega 
    task : taskValue
}

// get email from session storage

const session= sessionStorage.getItem('userEmail');
const localls= JSON.parse(localStorage.getItem(session)); // json.parse // "{}" -->  {}


// console.log(localls, session);


const data = {  // new object
    ...localls, // spreading the whole object
    tasks:[newTask, ...localls.tasks],  // task ko override kiye qki phle se task present the object me aur usme jake new task add kr diye
}


localStorage.setItem(session,JSON.stringify(data)) // {} -->  "{}"
    renderList(); // render the new updated data
}

// target delete button

const deleteBtnNodelist = document.querySelectorAll(".fa-remove"); // meko yaha all lagana pada qki list baht sara h iske karan nodelist mila mko to foreach ke
                                                                   // sath mko lagana pda eventlistener

// console.log(deleteBtnNodelist);

deleteBtnNodelist.forEach(item => {
    item.addEventListener("click", remove);
})



function remove(e) {
    console.log("sex");   
    //  console.log(e.target.id)
    // console.log(e.target.id);
    e.target.parentElement.parentElement.remove();

    const sessionlist = sessionStorage.getItem('userEmail');
    // const listArray  = JSON.parse(localStorage.getItem(sessionlist)).tasks;
    const listArray  = JSON.parse(localStorage.getItem(sessionlist)) // yeh list array nh object hai 
    console.log(listArray);

    


    // use array.filter on tasks array and save it in a variable
    const filteredArray = listArray.tasks.filter((item)=> {

        return item.id != e.target.id; // hm harek element ko array me daal rhe hai jiska id match nh kr rha h
        //  if(item.id > 500) {
        //     console.log(item);
        // }
    }) 

    listArray.tasks = filteredArray; // yaha jo bhi filtered array hai usko taskilist ke task arrray me save kr rhe
    // yha again hmko local storage me data bhejna hga usko lie mko us user ka id khojna hga to uske liye session storage se email target krenge aur waha list array ko daal denge
    localStorage.setItem(sessionStorage.getItem('userEmail'), JSON.stringify(listArray))





    // console.log(filteredArray,"kakak")
    // function filterItem(idi){
    //     return idi > 300 ;
    // }
    // console.log(filteredArray)

    // put this variable in localstorage
    

    // call renderList function to render updated task list

}







