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

let first_val = 0; //Left operand
let second_val = 0; //Right operand
let current_oper = ""; //Current operator
let oper_count = 0; //Number of operations done before clearing the memory
let result = 0; //Result of the concurrent iterations

let display = document.querySelector(".display");

display.innerHTML = "";

let digits = document.querySelectorAll(".digit");

digits.forEach((button) => {
  button.addEventListener("click", function () {
    if (result != 0) {
      display.innerHTML = ""; //Empty the display when making new calculations
    }
    display.innerHTML += button.textContent; //Add the digits of the number one by one
    second_val = 0; //Initialise second value to 0
    if (current_oper == "") {
      //If this is the first calculation, add the current value to left operand
      first_val = first_val * 10 + parseFloat(button.textContent);
    } else if (oper_count > 1) {
      //If a calculation(s) had been done prior, add the current value to right operand
      second_val = second_val * 10 + parseFloat(button.textContent);
      result = parseFloat(operate(current_oper, first_val, second_val)); //Calculate the result

      display.innerHTML = Math.round(result * 10000000) / 10000000; //Round the result to maximum 7 decimal digits
      first_val = result; //Assign result as the left operand of next iteration
    } else {
      //If this is the first calculation, add the current value to right operand
      second_val = second_val * 10 + parseFloat(button.textContent);
      result = parseFloat(operate(current_oper, first_val, second_val)); //Calculate the result
      first_val = result; //Assign result as the left operand of next iteration
    }
  });
});

let operators = document.querySelectorAll(".oper");

operators.forEach((button) => {
  button.addEventListener("click", function () {
    display.innerHTML = ""; //Empty the display
    oper_count++; //Increase the operator count
    current_oper = ""; //Empty the current operator string from previous iteration
    current_oper += button.textContent; //Add the operator value to current operator

    //button.setAttribute("style", "font-weight:bold; opacity:90%;"); //When the operator is selected change its css
  });
});

let equals = document.querySelector(".equal");

equals.addEventListener("click", function () {
  display.innerHTML = Math.round(result * 10000000) / 10000000; //Round the result to maximum 7 decimal digits

  first_val = 0; //Make the values as 0 to prepare them for next iterations
  second_val = 0;
  current_oper = "";
});

let clear = document.querySelector(".clear");

clear.addEventListener("click", function () {
  //Return all the variables to 0 and empty so the user can start fresh
  display.innerHTML = "";
  first_val = 0;
  second_val = 0;
  result = 0;
  current_oper = "";
  oper_count = 0;
});

let perc = document.querySelector(".perc");

perc.addEventListener("click", function () {
  if (current_oper == "") {
    //Same as the digits function in event handler
    first_val /= 100;
    display.innerHTML = first_val;
  } else if (oper_count > 1) {
    second_val /= 100;
    result = parseFloat(operate(current_oper, first_val, second_val));

    display.innerHTML = Math.round(result * 10000000) / 10000000;
    first_val = result;
  } else {
    second_val /= 100;
    result = parseFloat(operate(current_oper, first_val, second_val));
    first_val = result;
  }
});

let neg = document.querySelector(".neg");

neg.addEventListener("click", function () {
  if (current_oper == "") {
    //Same as the digits function in event handler
    first_val *= -1;
    display.innerHTML = first_val;
  } else if (oper_count > 1) {
    second_val *= -1;
    result = parseFloat(operate(current_oper, first_val, second_val));

    display.innerHTML = Math.round(result * 10000000) / 10000000;
    first_val = result;
  } else {
    second_val *= -1;
    result = parseFloat(operate(current_oper, first_val, second_val));
    first_val = result;
  }
});
