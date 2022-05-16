//one click event stop triggering the button except the operation...
function disableButton(op) {
  var multiply = document.getElementById("multiply");
  var divide = document.getElementById("divide");
  var add = document.getElementById("add");
  var subtract = document.getElementById("subtract");

  btn.disabled = true;
}

//function that display value
function dis(val) {
  const flag_decimal = false;
  if (val === ".") {
    flag_decimal = true;
  }
  document.getElementById("display").value += val;
}

//function that evaluates the digit and return result
function solve() {
  let x = document.getElementById("display").value;
  let y = eval(x);
  console.log(y);
  document.getElementById("display").value = y;
}

//function that clear the display
function clr() {
  document.getElementById("display").value = "";
}
