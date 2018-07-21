//Hello frederik, there are some bugs I could not fix I can no get all of them once I get done items for exmple I can not get them back
let TODOS = [];

function update(){
    const $todoList = document.querySelector(".todo-list");
    $todoList.innerHTML = " ";
    for(const item of TODOS){
       
        const $li = document.createElement("li");
        $todoList.appendChild($li);
        if(item.done){
            $li.classList.add("completed");
        }
        //toggle button
        const $toggle = document.createElement('input');
        $li.appendChild($toggle);
        $toggle.setAttribute('class', 'toggle');
        $toggle.setAttribute('type', 'checkbox');
        
       
        if(item.done){
            $toggle.setAttribute('checked', 'checked');
        }

        $toggle.addEventListener('change', onToggleTodo.bind(null, item.id));

        //label 
        const $label = document.createElement("label");
        $label.innerHTML = item.title;
        $li.appendChild($label);

        //delete button

        const $button = document.createElement("button");
        $button.className = "destroy";
        $li.appendChild($button);
             
        // BIND THING 
        $button.addEventListener('click', onDeleteItem.bind(null, item.id));

        //dbclick
        $li.addEventListener('dblclick', onDbClickButton.bind(null, item.id));

    }
    //// ITEM COUNTER
    const items = TODOS.filter(someItems =>  !someItems.done);       
    const $count = document.querySelector('.todo-count');
    items.length === 1 ? $count.textContent = `${items.length} item left` : $count.textContent = `${items.length} items left`;  
    

    if(items.length === 0 ){
        document.querySelector(".footer").style.display = "none";
    
        } else if(items.length === 1){
        document.querySelector(".footer").style.display = "block";

        }
        document.querySelector(".main").style.display = "block";

}

function onDeleteItem(id){
     TODOS = TODOS.filter(removeItems => removeItems.id !== id);
    update();
}

function onToggleTodo(id){
  const todo = TODOS.find(todo => todo.id === id);

  todo.done = !todo.done;
  update();
}

// on allselected button
function onSelectedButton(){
    
    TODOS = TODOS.filter(function (selected){
    
            if(selected.done === false && selected.done === true){
                return selected.id;
            } 
        }) 
       update();
    console.log("yes");
}
// on active button 
function onActiveButton(){
    TODOS = TODOS.filter(function (active){
        if(active.done === false){
            return active.title;
        } 
    }) 
   update();
}

//on completed button
function completedButton(){
    TODOS = TODOS.filter(function (completed){
        if(completed.done === true){
            return completed.done;
        } 
    })
    update();   
}

//clear completed button 
function clearCompleted(){
    TODOS = TODOS.filter(function (todo){
        if(todo.done === false){
            return true;
        } 
    })   
       update();
}
//on dbclick button
function onDbClickButton(){
    //I tried this one, I had this idea but it did not work I will what i can do 
    // TODOS = TODOS.filter(function (todo){
    //     if(todo.id === true){
                
    //     const li = document.querySelector("label").value;

    //     li.setAttribute("input", "text");
    //     } else {return true}
    // })   
    console.log("db clkicked")
 
}


function onNewTodo(e){
    const title = e.target.value;
    //same as this line :
    //const title = document.querySelector('.new-todo').value;
    TODOS.push({
        id: Date.now(),
        title,
        done: false
    });
    update();
    e.target.value = "";
   
}

// Select the new todo input input field
const $newTodo = document.querySelector(".new-todo");
$newTodo.addEventListener('change', onNewTodo);
//select three buttons 
const $clearButton = document.querySelector(".clear-completed");
$clearButton.addEventListener('click', clearCompleted);
// completed button
const $completedButton = document.querySelector('.filters a:nth-child(3)');
$completedButton.addEventListener('click', completedButton);
// active button 
const $activeButton = document.querySelector(".filters a:nth-child(2)");
$activeButton.addEventListener('click', onActiveButton);
// select all button 
const $selectedButton = document.querySelector(".selected");
$selectedButton.addEventListener('click', onSelectedButton);










