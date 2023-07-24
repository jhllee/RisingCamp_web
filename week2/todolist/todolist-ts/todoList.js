var input = document.querySelector('#addTodo');
var todoList = document.querySelector('#todoList');
var addButton = document.querySelector('#addButton');
addButton.addEventListener("click", function (e) {
    e.preventDefault();
    var addTodo = input.value;
    var item = document.createElement("li");
    item.innerText = addTodo;
    var delButton = document.createElement("button");
    delButton.textContent = "Delete";
    delButton.classList.add("delButton");
    item.appendChild(delButton);
    todoList.appendChild(item);
    input.value = "";
    item.addEventListener('click', function () {
        item.style.textDecoration = "line-through";
    });
    delButton.addEventListener("click", function (e) {
        item.remove();
    });
});
