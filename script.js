const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    handleInput(button.textContent, button.className);
  });
});

let display = document.querySelector("div.display");
let firstValue = "";
let secondValue = "";
let operation = "";

const handleInput = (content, className) => {
  console.log(operation);
  if (className === "num") {
    if (operation === "") {
      firstValue += content;
      console.log(firstValue);
      display.innerHTML = `${firstValue}`;
    } else if (operation != "") {
      secondValue += content;
      console.log(secondValue);
      display.innerHTML = `${firstValue}${operation}${secondValue}`;
    }
  } else if (className === "operation") {
    if (firstValue != "") {
      operation = content;
      console.log(firstValue);
      console.log(operation);
      display.innerHTML = `${firstValue}${operation}`;
      secondValue = "";
    }
  } else if (className === "equal") {
    if (secondValue != "") {
      if (operation === "+") {
        let result = add(firstValue, secondValue);
        display.innerHTML = result;
        firstValue = result;
        secondValue = "";
      } else if (operation === "-") {
        result = subtract(firstValue, secondValue);
        console.log(result);
        display.innerHTML = result;
        firstValue = result;
        secondValue = "";
      } else if (operation === "*") {
        result = multiply(firstValue, secondValue);
        display.innerHTML = result;
        firstValue = result;
        secondValue = "";
      } else if (operation === "/") {
        result = divide(firstValue, secondValue);
        display.innerHTML = result;
        firstValue = result;
        secondValue = "";
      }
    }
  } else if (className === "clear") {
    firstValue = "";
    secondValue = "";
    operation = "";
    display.innerHTML = "";
  }
};

const add = function (num1, num2) {
  return parseInt(num1) + parseInt(num2);
};

const subtract = function (num1, num2) {
  return parseInt(num1) - parseInt(num2);
};

const multiply = function (num1, num2) {
  return parseInt(num1) * parseInt(num2);
};

const divide = function (num1, num2) {
  if (secondValue === 0) {
    return "ERR";
  } else {
    return parseInt(num1) / parseInt(num2);
  }
};
