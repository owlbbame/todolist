let input = document.querySelector(".input");
let addBtn = document.querySelector(".addBtn");
let list = document.querySelector(".list");
let idNum = 1;


//항목을 추가하는 함수 add
function add() {
    let newLi = document.createElement("span");
    let delBtn = document.createElement("button");

    newLi.classList.add(`${idNum}`);
    delBtn.classList.add(`${idNum++}`);

    // newLi.classList.add('todo');
    // delBtn.classList.add('button');


    newLi.innerText = input.value;
    delBtn.innerText = '❌';

    list.appendChild(newLi);
    list.appendChild(delBtn);

    input.value = "";

    let newline = document.createElement("div");
    list.appendChild(newline);


}

// 추가 버튼을 클릭했을 때 항목 추가하는 명령
addBtn.addEventListener("click", add);

//엔터키를 눌렀을 때 추가하는 명령
input.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
        add();
    }
});

//X 버튼을 눌렀을 때 deletelist 함수 호출


let deleteBtn = document.querySelector(".1")

deleteBtn.addEventListener("click", deleteList);

function deleteList() {
    // var deleteBtn = document.querySelector(".1");
    deleteBtn.parentNode.removeChild(deleteBtn);

}


































// let inputBox = document.getElementById('inputBox');
// let addButton = document.getElementById('addButton');
// let ToDoList = document.getElementById('ToDoList');

// addButton.addEventListener('click', function () {
//     var list = document.createElement('li')
//     list.innerText = inputBox.value;
//     ToDoList.appendChild(list);
//     inputBox.value = "";
//     list.addEventListener('click', function () {
//         list.style.textDecoration = "line-through";
//     })
//     list.addEventListener('dblclick', function () {
//         ToDoList.removeChild(list);
//     })
// })