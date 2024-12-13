const containerNumbers = document.getElementById("container-numbers");
const btnNumbers = [...containerNumbers.getElementsByTagName("button")];
const containerOperations = document.getElementById("container-operations");
const btnOperations = [...containerOperations.querySelectorAll("button")];
const btnClear = document.querySelector("#container-clear");
const entry = document.querySelector("input");
const equal = document.querySelector("#container-equal");

let n1 = 0;
let n2 = 0;
let op;
let result;

function setInput(text) {
  entry.value += text;
}

function clearInput() {
  entry.value = "";
}

function operate() {
  clearInput();
  switch (op) {
    case "+/-":
      return n1 * -1;
    case "+":
      return n1 + n2;
    case "-":
      return n1 - n2;
    case "*":
      return n1 * n2;
    case "/":
      if (n1 / n2 === Infinity) return "Error: Division by cero";
      return n1 / n2;
    default:
      return "";
  }
}

btnNumbers.forEach((element) => {
  element.addEventListener("click", () => {
    setInput(element.innerText);
  });
});

btnClear.addEventListener("click", () => {
  clearInput();
});

btnOperations.forEach((element) => {
  element.addEventListener("click", () => {
    op = element.innerText;
    if (entry.value !== "") n1 = parseInt(entry.value);
    clearInput();
  });
});

equal.addEventListener("click", () => {
  if (entry.value !== "") n2 = parseInt(entry.value);
  console.log(n1, n2);
  result = operate();
  setInput(result);
});
