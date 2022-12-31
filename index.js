const add = (a, b) => {
  //Addition function
  return a + b;
};

const subtract = (a, b) => {
  //Subtraction function
  return a - b;
};

const multiply = (a, b) => {
  //Multiplication function
  return a * b;
};

const divide = (a, b) => {
  //Division function
  if (b == 0) {
    alert("You can't divide by zero doofus");
    return 0;
  } else {
    return a / b;
  }
};

const operate = (operator, a, b) => {
  //Function to compute the values using the given operator
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
};

const displayMethod = (displayValue) => {
  display.innerHTML = Math.round(displayValue * 10000000) / 10000000;
};

let displayValue = "";
let first_num = "";
let operator = "";

let display = document.querySelector(".display");

let digits = document.querySelectorAll(".digit");

let operators = document.querySelectorAll(".oper");

let equals = document.querySelector(".equal");

let clear = document.querySelector(".clear");

let percentage = document.querySelector(".perc");

let negative = document.querySelector(".neg");

let backspace = document.querySelector(".bkspc");

digits.forEach((button) => {
  button.addEventListener("click", function () {
    displayValue += button.textContent;
    displayMethod(displayValue);
  });
});

operators.forEach((button) => {
  button.addEventListener("click", function () {
    if (first_num == "") {
      operator = button.textContent;
      first_num = displayValue;
    } else {
      displayValue = operate(operator, Number(first_num), Number(displayValue));
      first_num = displayValue;
      operator = button.textContent;
    }
    displayMethod(displayValue);
    displayValue = "";
  });
});

equals.addEventListener("click", function () {
  displayValue = operate(operator, Number(first_num), Number(displayValue));
  displayMethod(displayValue);
});

clear.addEventListener("click", function () {
  //Return all the variables to 0 and empty so the user can start fresh
  display.innerHTML = "";
  displayValue = "";
  first_num = 0;
  operator = "";
});

percentage.addEventListener("click", function () {
  displayValue /= 100;
  displayMethod(displayValue);
});

negative.addEventListener("click", function () {
  displayValue *= -1;
  displayMethod(displayValue);
});

backspace.addEventListener("click", function () {
  displayValue = displayValue.slice(0, -1);
  console.log(displayValue);
  displayMethod(displayValue);
});

window.addEventListener("keypress", function (e) {
  e.preventDefault();
  const key = document.querySelector(`button[data-key='${e.key}']`);
  key.click();
});
