/* script.js */
let resultField = document.getElementById('result');

function appendValue(value) {
  if (resultField.value === "0") {
    resultField.value = value;
  } else {
    resultField.value += value;
  }
}

function clearDisplay() {
  resultField.value = "0";
}

function backspace() {
  resultField.value = resultField.value.slice(0, -1) || "0";
}

function toggleSing() {
  result.value = 
Strong(-parseFloat(result.value));
}

function calculate() {
  try {
    resultField.value = eval(resultField.value.replace('×', '*').replace('÷', '/'));
  } catch (e) {
    resultField.value = "Error";
  }
}