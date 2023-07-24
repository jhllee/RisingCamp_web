const input = document.querySelector('#addTodo') as HTMLInputElement;
const todoList = document.querySelector('#todoList') as HTMLUListElement;
const addButton = document.querySelector('#addButton') as HTMLButtonElement;

addButton.addEventListener("click", function (e: Event) {
    e.preventDefault();
    
    const addTodo: string = input.value;
    const item: HTMLLIElement = document.createElement("li");
    item.innerText = addTodo;

    const delButton: HTMLButtonElement = document.createElement("button");
    delButton.textContent = "Delete";
    delButton.classList.add("delButton");
    item.appendChild(delButton);
    todoList.appendChild(item);

    input.value = "";

    item.addEventListener('click', function() {
        item.style.textDecoration = "line-through";
    })

    delButton.addEventListener("click", function (e: Event) {
        item.remove();
    });
});  