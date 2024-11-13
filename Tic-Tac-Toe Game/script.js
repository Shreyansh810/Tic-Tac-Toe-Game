const btns = document.querySelectorAll('.btn');
const rstBtn = document.querySelector('#resetButton');
const msgContainer = document.querySelector('#msg-container');
const messageBox = document.querySelector('#message');
const startBtn = document.querySelector('#startGame')
let operation = true;

// possible winning scenerios
const winCond = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleClick(event) {
    if (operation === true && event.target.innerHTML === "") {
        event.target.innerHTML = 'O';
    } else if (operation === false && event.target.innerHTML === "") {
        event.target.innerHTML = 'X';
    }
    operation = !operation
    checkWinningCond();
}

// true == O, false == X
// event listener on buttons
function addListner() {
    btns.forEach((btn) => {
        btn.addEventListener('click', handleClick);
    });
}

addListner();


function showRes(msg) {
    msgContainer.style.display = "block";
    messageBox.innerHTML = msg;
}

// Check for winning symbol
function checkWinningCond() {
    for (const currCond of winCond) {
        if (btns[currCond[0]].innerHTML !== "" && btns[currCond[0]].innerHTML === btns[currCond[1]].innerHTML && btns[currCond[0]].innerHTML === btns[currCond[2]].innerHTML) {
            btns.forEach(btn => {
                btn.removeEventListener('click', handleClick);
            });
            showRes(`The Winner of this game is ${btns[currCond[0]].innerHTML}`);
        }
    }
}

function removeData() {
    btns.forEach((btn) => {
        btn.innerHTML = "";
    });
}

// event listener on reset button.
rstBtn.addEventListener('click', (event) => {
    removeData();
    operation = true;
    addListner();
    msgContainer.style.display = "none";
});

startBtn.addEventListener('click', (event) => {
    removeData();
    addListner();
    msgContainer.style.display = "none";
})
