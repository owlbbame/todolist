let input = document.querySelector(".input");
let addBtn = document.querySelector(".addBtn");
let list = document.querySelector(".list");
let left = document.querySelector('.left');
let completed = document.querySelector('.completed');
let countCompleted = 0;
let countLeft = 0;

// let idNum = 1;

//항목을 추가하는 함수 add
function add() {

    let newLi = document.createElement("div");
    let delBtn = document.createElement("button");
    let newline = document.createElement("br");

    // newLi.classList.add(`${idNum}`);
    // delBtn.classList.add(`${idNum++}`);

    // newLi.classList.add('todo');
    // delBtn.classList.add('button');


    newLi.innerText = input.value;
    delBtn.innerText = '❌';

    if (input.value != "") {
        list.appendChild(newLi);
        list.appendChild(delBtn);
        list.appendChild(newline);
        countLeft++;
    }
    else {
        alert("할 일을 입력하세요.");
    }

    input.value = "";


    //항목 삭제
    delBtn.addEventListener('click', function () {
        delBtn.remove();
        newLi.remove();
        newline.remove();
        countCompleted++;
        countLeft--;

        left.innerText = `해야할 일 : ${countLeft}개`;
        completed.innerText = `완료한 일 : ${countCompleted}개`;
    });


    left.innerText = `해야할 일 : ${countLeft}개`;
    completed.innerText = `완료한 일 : ${countCompleted}개`;

}


// 추가 버튼을 클릭했을 때 항목 추가하는 명령
addBtn.addEventListener("click", add);

//엔터키를 눌렀을 때 추가하는 명령
input.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
        add();
    }
});


window.onload = function () {
    var input = document.querySelector(".input").focus();
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
