const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
// == document.querySelector("#todoForm input")
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let todos = [];

function saveTodos() {
    // ["a", "b", "c"]
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event) {
    console.log(event);
    const li = event.target.parentElement;
    todos = todos.filter((todo) => todo.id != parseInt(li.id));
    li.remove();
    saveTodos();
}

function paintTodo(newTodoObj) {
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    span.innerHTML = newTodoObj.text;

    const button = document.createElement("button");
    // add icon inside of button
    const xIcon = document.createElement("i");
    xIcon.classList.add("fa-solid", "fa-x");
    button.appendChild(xIcon);

    button.addEventListener("click", deleteTodo);

    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        id: Date.now(),
        text: newTodo,
    };
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

function sayHello(item) {
    console.log(`this is the turn of ${item}`);
}

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos != null) {
    const parsedTodos = JSON.parse(savedTodos);
    parsedTodos.forEach(paintTodo);
    todos = parsedTodos;
}
