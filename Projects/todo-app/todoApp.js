let List = localStorage.getItem('todoList');

let todoList = List ? JSON.parse(List) : [];
displayItems()

function addTodo() {
    let inputElement = document.querySelector('#todo-input');
    let todoItem = inputElement.value;
    todoList.push(todoItem);
    inputElement.value = "";
    storage()

}
function storage() {
    localStorage.setItem('todoList', JSON.stringify(todoList));
    displayItems();
}

function displayItems() {
    let containerElement = document.querySelector('.todo-container');

    let newHtml = '';

    for (let i = 0; i < todoList.length; i++) {
        newHtml += `<div>
        <span>${todoList[i]}</span>
        <button onclick="todoList.splice('${i}',1); storage()">Delete</button>
        </div>`

    }
    containerElement.innerHTML = newHtml;
}