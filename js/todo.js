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

        const items = TODOS.filter(someItems => !someItems.done);       
        const $count = document.querySelector('.todo-count');
        items.length === 1 ? $count.textContent = `${items.length} item left` : $count.textContent = `${items.length} items left`;        
        
        //this solution is shorter but it would not be readable for everyone. I like to do it like this, the first one is too long in my opinion.        

        // const x = TODOS.filter(I =>!I.done);
        // const c = document.querySelector('.todo-count');
        // x === 1 ? $c.textContent = `${x.length} item left` : $c.textContent = `${x.length} items left`;



    }
    document.querySelector(".main").style.display = "block";
}


function onToggleTodo(id){
  const todo = TODOS.find(todo => todo.id === id);
  /////////////////////
  todo.done = !todo.done;
  update();
}

// function onDeleteItem(id){
    
//     const deleteElement = TODOS.filter(deleteSomeItems => deleteItems.id)
// } still working on this

function onNewTodo(e){
    const title = e.target.value;
    console.log(title);
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

// const $deleteItem = document.querySelector(".destroy");
// $deleteItem.addEventListener('click', onDeleteItem); still working on this




