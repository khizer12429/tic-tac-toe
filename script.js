const boxes = document.querySelectorAll(".box");
const rst = document.getElementById("reset_btn");
const results = document.getElementById("result");
const msgX = document.getElementById("X_msg");
const msgO = document.getElementById("O_msg");

let turn0 = true;
// possiblity for wins
const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
 ];

 boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.textContent === "" && turn0) {
            msgX.innerText="Turn for O";
            box.textContent = "X";
            turn0 =false;
            checkWin();
        } else if(box.textContent === "" &&!turn0) {
            msgX.innerText="Turn for X";
            box.textContent = "O";
            turn0 =true;
            checkWin();
        }
    });
    
    
 });
 const disableboxes = () => {
    for (let no of boxes){
        box.disabled =  true;
        msgX.innerText="congratulations,Press Restart";
    }
 };
//  check win function
  const checkWin = () => {
    for (let pattern of winpattern){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1 !="" && pos2 !="" && pos3 !=""){
            if(pos1 ==pos2 && pos2==pos3){
            results.innerHTML = pos1 + "winner";
            disableboxes();
            }; 

    }

}
  };
// reset button function
  const resetform = (reset) => {
        boxes.forEach((box) => {
            box.innerText = "";
            results.innerText = "";
            msgX.innerText="";
        });
  }