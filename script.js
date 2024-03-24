let boxes=document.querySelectorAll(".boxes");
let reset_btn=document.querySelector(".reset");
let new_btn=document.querySelector(".new");
let msgCont = document.querySelector(".msg-container");
let win_msg =document.querySelector(".win");

let turn_X=true;
const patterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
boxes.forEach((boxes)=>{
    boxes.addEventListener("click",()=>{
        if(turn_X){
            boxes.innerText="X";
            turn_X=false;
        }else{
            boxes.innerText="O";
            turn_X=true;
        }
        boxes.disabled=true;

        check_win();
    });
});

const disablebtns=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enablebtns=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showWin=(win)=>{
    win_msg.innerText=`Congratulations , winner is ${win}`;
    msgCont.classList.remove("hide")
}

const check_win=()=>{
    for(let pattern of patterns){
        let postition_1=boxes[pattern[0]].innerText;
        let postition_2=boxes[pattern[1]].innerText;
        let postition_3=boxes[pattern[2]].innerText;

        if(postition_1!="" && postition_2!="" &&postition_3!=""){
            if(postition_1===postition_2 && postition_2===postition_3){
                showWin(postition_1);
            }
        }
    }
}

const resetGame=()=>{
    turn_X=true;
    enablebtns();
    msgCont.classList.add("hide");
}

new_btn.addEventListener("click",resetGame);
reset_btn.addEventListener("click",resetGame);