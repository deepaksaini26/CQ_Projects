let input=document.getElementById("inpt");
let btn=document.getElementById("btn");
let finallist=document.getElementById("Todolist");
let todos;
Window.onload=fetchData();
   // localStorage.clear();
   
  
   

// localStorage.removeItem(todokilist);
   // localStorage.clear();

function fetchData() {
   console.log("here")
   let data = localStorage.getItem('todos');
   if(data){
      todos=JSON.parse(data);
   }
   else{
      todos=[];
   }
   console.log(todos)
   todos.forEach((task)=>{
      console.log("here")
      createTodo(task)
   })
   
}


btn.addEventListener("click",addTask);

function addTask(){
   let num=Date.now();
   let task={
      id: num,
      value: input.value,
      ischecked: false
   };
   console.log(todos)
   createTodo(task);
   todos.push(task)
   setData(todos);
   
   input.value="";
   // let prevTask=JSON.stringify(task);
   // console.log(localStorage.getItem( "todokilist"));
   // if(localStorage.getItem( "todokilist")==null){
   //    localStorage.setItem("todokilist", "!@" );
   // }

   // else{
   //     localStorage.setItem("todokilist", localStorage.getItem( "todokilist") +  JSON.stringify(task)  + "!@" );
   // }

}


function createTodo(task){
   console.log("here2")

   let boxes=document.createElement("div");
   let item=document.createElement("li");
   let check=document.createElement("input");
  
   var bin = document.createElement('i');

   // Set style attribute
   bin.style.fontSize = '24px';
   
   // Set class attribute
   bin.className = 'fa';
   
   // Set inner HTML to the icon character (using its code)
   bin.innerHTML = '&#xf014;';
   
   // Append the <i> element to a container (replace 'containerId' with the ID of your container element)
  
   
   /*

   Now replacing REMOVE buttton by Iocn

      let remove=document.createElement("buttton");
      remove.innerText="Remove";
      remove.style.backgroundColor="red";
      remove.style.margin="3px"; 
      remove.style.width="10px";
      remove.style.height="10px";
      remove.addEventListener("click",deleteTask);
        boxes.appendChild(remove);

  
   */



   item.innerText=task.value;
   // item.style.listStyleType="none";
   check.setAttribute("type","checkbox");
   // check.addEventListener("click",changeStatus(task))
   // check.innerText="Incomplete";
  
   boxes.classList.add("listed");
   boxes.appendChild(item);
   boxes.appendChild(check);
   // boxes.appendChild(bin);
   boxes.appendChild(bin);
   finallist.appendChild(boxes);
   // console.log(finallist)

   // finallist.classList.add("listed");
   // finallist.appendChild(item);
   // finallist.appendChild(check);
   // finallist.appendChild(remove);
   item.style.textDecoration="none";
   
   // remove.style.="5px";
   check.style.backgroundColor="blue";
   check.style.width="25px";
   check.style.height="25px";
   check.style.position="relative";
   // boxes.style.position="relative";
   check.style.right="60px";
   // remove.style.position="relative";
  
   // remove.style.fontSize="10px";
   // remove.style.padding="13px";
   // check.style.right="10px";
  // check.style.position="fixed"  // top: 50%;;
   // check.style.top="80%";
   // check.style. transform="translateY(-50%)";
   // check.style.bottom="370px";
   // boxes.style.backgroundColor="blue";
   
   // check.style.margin="0px 0px 0px px";
   
   check.addEventListener("click", function(e){ 
      changeStatus(e,task); });  
  
   bin.addEventListener("click",deleteTask)

}

function deleteTask(e){
   let target=e.currentTarget.parentElement;
   console.log(target);
   // console.log(target.parentElement);
   // target.removeChild(target.child);
   target.parentElement.removeChild(target);


}

function changeStatus(e,task){
   
   if(e.target.checked)
   {
      task.ischecked=true;
   }

   else
   {
      task.ischecked=false;
   }

   updatedata(task)
   // let state=JSON.parse(localStorage.getItem("todokilist");
   // if(state.containsSubstring(str, substring)==true){

   // }



   // let state=


}


function setData(todos) {
  
   localStorage.setItem('todos',JSON.stringify(todos))
}


function updatedata(task) {
   todos.forEach(todo => {
      if(task.id==todo.id)
         // console.log(!ischecked)
         todo.ischecked=!todo.ischecked
   });
   setData(todos)
}