const display = document.getElementById("textArea");

const calculatorControls = document.querySelector(".calculator-controls");

let result = "";
// let justEqual = false;
calculatorControls.addEventListener("click", (e) => {
  const symbol = e.target.value;
  if (symbol !== undefined && !["=", "C"].includes(symbol)) {
    // if (
    //   !isNaN(display.value[display.value.length - 1]) &&
    //   !isNaN(symbol) &&
    //   justEqual
    // ) {
    //   display.value = "";
    //   result = "";
    //   justEqual = false;
    // }
    if (symbol === "x") result += "*";
    else result += symbol;

    display.value += symbol;
  }
  if (symbol === "=") {
    console.log(result);
    try {
      let res = eval(result);
      if (!Number.isInteger(res)) res = res.toFixed(5);
      // justEqual = true;
      display.value = res;
    } catch (error) {
      alert("bieu thuc khong hop le");
    }
  } else if (symbol === "C") {
    display.value = "";
    result = "";
  }
});
