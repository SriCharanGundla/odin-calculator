const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  if (b == 0) {
    alert("You can't divide by zero doofus");
    return 0;
  } else {
    return a / b;
  }
};

const operate = (operator, a, b) => {
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

let first_val = 0;
let second_val = 0;
let current_oper = "";
let oper_count = 0;
let result = 0;

let display = document.querySelector(".display");

display.innerHTML = "";

let digits = document.querySelectorAll(".digit");

digits.forEach((button) => {
  button.addEventListener("click", function () {
    if (result != 0) {
      display.innerHTML = "";
    }
    display.innerHTML += button.textContent;
    second_val = 0;
    if (current_oper == "") {
      first_val = first_val * 10 + parseFloat(button.textContent);
    } else if (oper_count > 1) {
      second_val = second_val * 10 + parseFloat(button.textContent);
      result = parseFloat(operate(current_oper, first_val, second_val));
      //display.innerHTML = result;
      display.innerHTML = Math.round(result * 10000000) / 10000000;
      first_val = result;
    } else {
      second_val = second_val * 10 + parseFloat(button.textContent);
      result = parseFloat(operate(current_oper, first_val, second_val));
      first_val = result;
    }

    console.log("\ndigits event");
    console.log("First val:" + first_val);
    console.log("Second val:" + second_val);
    console.log("Result:" + result);
    console.log("Current operator:" + current_oper);
    console.log("Operation Count:" + oper_count);
  });
});

let operators = document.querySelectorAll(".oper");

operators.forEach((button) => {
  button.addEventListener("click", function () {
    display.innerHTML = "";
    oper_count++;
    current_oper = "";
    current_oper += button.textContent;

    /*if (oper_count > 1) {
      console.log("\n inside the if condition");
      second_val = parseInt(display.innerHTML);
      console.log(
        `The first value is ${first_val} and second value is ${second_val}`
      );
      result = parseInt(operate(current_oper, first_val, second_val));
      display.innerHTML = result;
      first_val = result;
    }*/
    button.setAttribute("style", "font-weight:bold; opacity:90%;");

    console.log("\noperators event");
    console.log("First val:" + first_val);
    console.log("Second val:" + second_val);
    console.log("Result:" + result);
    console.log("Current operator:" + current_oper);
    console.log("Operation Count:" + oper_count);
  });
});

let equals = document.querySelector(".equal");

equals.addEventListener("click", function () {
  /*result = 0;
  result = parseInt(
    operate(current_oper, parseInt(first_val), parseInt(second_val))
  );*/

  //display.innerHTML = result;
  display.innerHTML = Math.round(result * 10000000) / 10000000;

  first_val = 0;
  second_val = 0;
  current_oper = "";

  console.log("\nanswer event");
  console.log("First val:" + first_val);
  console.log("Second val:" + second_val);
  console.log("Result:" + result);
  console.log("Current operator:" + current_oper);
  console.log("Operation Count:" + oper_count);
});

let clear = document.querySelector(".clear");

clear.addEventListener("click", function () {
  display.innerHTML = "";
  first_val = 0;
  second_val = 0;
  result = 0;
  current_oper = "";
  oper_count = 0;

  console.log("\nclear event");
  console.log("First val:" + first_val);
  console.log("Second val:" + second_val);
  console.log("Result:" + result);
  console.log("Current operator:" + current_oper);
  console.log("Operation Count:" + oper_count);
});

let perc = document.querySelector(".perc");

perc.addEventListener("click", function () {
  if (current_oper == "") {
    first_val /= 100;
    display.innerHTML = first_val;
  } else if (oper_count > 1) {
    second_val /= 100;
    result = parseFloat(operate(current_oper, first_val, second_val));
    //display.innerHTML = result;
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
    first_val *= -1;
    display.innerHTML = first_val;
  } else if (oper_count > 1) {
    second_val *= -1;
    result = parseFloat(operate(current_oper, first_val, second_val));
    //display.innerHTML = result;
    display.innerHTML = Math.round(result * 10000000) / 10000000;
    first_val = result;
  } else {
    second_val *= -1;
    result = parseFloat(operate(current_oper, first_val, second_val));
    first_val = result;
  }
});
