// Your code here
const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 5}px`;
    }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

  function moveDodgerRight(){
    const rightNumbers = dodger.style.left.replace("px","");
    console.log(`${rightNumbers}`)
    const right = parseInt(rightNumbers,  10);
    if(right < 360){
        dodger.style.left = `${right + 5}px`
    }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
        console.log('ArrowRight')
        moveDodgerRight();
    }
  });