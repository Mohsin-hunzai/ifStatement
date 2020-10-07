let op = prompt("Enter Operator sign", "+ - *  / %");
let num1 = prompt("Enter First number ", "Enter integer only");
let num2 = prompt("Enter second Number ", "Enter integer only");

let x = Number(num1);
let y = Number(num2);

switch (op) {
  case "+":
    alert(x + y);
    break;
  case "-":
    alert(x - y);
    break;
  case "*":
    alert(x * y);
    break;
  case "/":
    alert(x / y);
    break;
  case "%":
    alert(x % y);
    break;
  default:
    alert("invalid");
}
