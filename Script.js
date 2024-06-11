
function display(val) {
    document.querySelector("#display").value += val;
  }

  function solve() {
    let x = document.querySelector("#display").value;
  let y = eval(x);
  document.querySelector("#display").value = y;
  }

  function clearDisplay() {
    document.querySelector("#display").value = "";
  }
