let op = prompt("Enter Operator sign", "+ - *  / %");
let num1 = prompt("Enter First number ", "Enter integer only");
let num2 = prompt("Enter second Number ", "Enter integer only");

let x = Number(num1);
let y = Number(num2);
if (op == "+" || op == "-" || op == "/" || op == "%") {
  if (op == "+") {
    alert(x + y);
  } else if (op == "-") {
    alert(x - y);
  } else if (op == "*") {
    alert(x * y);
  } else if (op == "/") {
    alert(x / y);
  } else if (op == "%") {
    alert(x % y);
  } else {
    alert("please enter valid operator");
  }
} else {
  alert("Enter valid operator sign");
}
console.log(typeof x);
console.log(typeof y);
