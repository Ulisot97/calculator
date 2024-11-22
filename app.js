const containerNumbers = document.getElementById("container-numbers");
const btnNumbers = [...containerNumbers.getElementsByTagName("button")];
const containerOperations = document.getElementById("container-operations");
const btnOperations = [...containerOperations.querySelectorAll("button")];
const btnClear = document.querySelector("#container-clear");
const entry = document.querySelector("input");
const equal = document.querySelector("#container-equal");

let n1;
let n2;
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
    case "+":
      return n1 + n2;
    case "-":
      return n1 - n2;
    case "*":
      return n1 * n2;
    case "/":
      return n1 / n2;
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
    setInput(element.innerText);
  });
});

equal.addEventListener("click", () => {
  let expresion = entry.value;
  [n1, n2] = expresion.split(/[+-\/\*]/);
  n1 = parseInt(n1);
  n2 = parseInt(n2);
  op = Array.from(expresion.split(/[0-9]/)).join("");
  result = operate();
  setInput(result);
});
