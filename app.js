let boxes=document.querySelectorAll(".btn");
let turn=0;
let msg_container= document.querySelector(".msg-container")
let msg= document.getElementById("msg");
let reset_btn=document.querySelector(".reset_btn");
let winningpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


let enable_buttons=() => {
    boxes.forEach((box)=>{
        box.disabled=false;
    })
}
let disable_buttons=() => {
    boxes.forEach((box)=>{
        box.disabled=true;
    })
}

let clearall= () => {
    enable_buttons();
    boxes.forEach( (box) => {
        box.innerText='';
    })
    turn=0;
    msg.innerText='';
    msg_container.classList.add("hide");
}

reset_btn.addEventListener('click', () => {
    clearall();
})

let checkwinner = () => {
    for (pattern of winningpattern) {
        val1=boxes[pattern[0]].innerText;
        val2=boxes[pattern[1]].innerText;
        val3=boxes[pattern[2]].innerText;
        if (val1!='' && val2!='' && val3!='' && val1==val2 && val2==val3) {
            console.log("winner is", val1);
            msg_container.classList.remove("hide");
            msg.innerText=`winner is ${val1}`;
            disable_buttons();
        }

    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText=='') {
            if (turn%2==0){
                box.innerText='0';
            }else {
                box.innerText='X';
            }
            turn+=1;
        }
        checkwinner();

    })
})