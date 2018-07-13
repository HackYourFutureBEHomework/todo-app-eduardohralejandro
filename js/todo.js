
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
             ////////NEW  count
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

        //// ITEM COUNTER

        const items = TODOS.filter(someItems =>  !someItems.done);       
        const $count = document.querySelector('.todo-count');
        items.length === 1 ? $count.textContent = `${items.length} item left` : $count.textContent = `${items.length} items left`;        
        // BIND THING 
        $button.addEventListener('click', onDeleteItem.bind(null, item.id));

        //this solution is shorter but it would not be readable for everyone. I like to do it like this, the first one is too long in my opinion.        

        // const x = TODOS.filter(I =>!I.done);
        // const c = document.querySelector('.todo-count');
        // x === 1 ? $c.textContent = `${x.length} item left` : $c.textContent = `${x.length} items left`;
        // const deleteItem = document.get
        // $button.addEventListener('click', onDeleteItem);s

    }
    document.querySelector(".main").style.display = "block";
}

function onDeleteItem(id){
     TODOS = TODOS.filter(removeItems => removeItems.id !== id);
    ///////////////////// but I still have 1 item left, this is not working well :/ I just pasted your code, it's almost the same as toggle to see the difference
     // second I tried this  but It did almost the same thing 
    // $button.addEventListener('click', onDeleteItem);

        // function onDeleteItem(e){
        //     e.target.parentElement.remove()
  
        // }
             //https://www.youtube.com/watch?v=GhbhD1HR5vk I found this video to understand a little bit more

    update();
}

function onToggleTodo(id){
  const todo = TODOS.find(todo => todo.id === id);
  /////////////////////
  todo.done = !todo.done;
  update();
}

function onNewTodo(e){
    const title = e.target.value;
    //same as this line :
    //const title = document.querySelector('.new-todo').value;

    // console.log(e.target.value);

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

