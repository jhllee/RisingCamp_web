const input = document.querySelector('#addTodo');
const todoList = document.querySelector('#todoList');
const addButton = document.querySelector('#addButton');

addButton.addEventListener("click", function (e) {
    e.preventDefault();
    
    const addTodo = input.value;
    const item = document.createElement("li");
    item.innerText = addTodo;

    const delButton = document.createElement("button");
    delButton.textContent = "Delete";
    delButton.classList.add("delButton");
    item.appendChild(delButton);
    todoList.appendChild(item);

    input.value = "";

    item.addEventListener('click', function() {
        item.style.textDecoration = "line-through";
    })

    delButton.addEventListener("click", function (e) {
        item.remove();
    });
});  

// const input = document.querySelector('#addTodo');
// const todoList = document.querySelector('#todoList');
// const addButton = document.querySelector('#addButton');

// addButton.addEventListener("click", function (e) {
//     e.preventDefault();
    
//     const addTodo = input.value;
//     const item = document.createElement("li");
//     item.innerHTML = `${addTodo} <button class="delButton">Delete</button>`;
//     todoList.append(item);

//     input.value = "";

//     item.addEventListener('click', function() {
//         item.style.textDecoration = "line-through";
//     })

//     const delButtons = document.querySelectorAll(".delButton");

//     for(let delButton of delButtons) {
//         delButton.addEventListener("click", function () {
//             this.parentNode.remove();
//         });
//     }
// });