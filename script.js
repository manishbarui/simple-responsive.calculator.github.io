/* script.js */
let resultField = document.getElementById('result');

function appendValue(value) {
  if (resultField.value === '0') {
    resultField.value = value;
  } else {
    resultField.value += value;
  }
}

function clearDisplay() {
  resultField.value = '0';
}

function backspace() {
  resultField.value = resultField.value.slice(0, -1) || '0';
}

function toggleSign() {
  resultField.value = -parseFloat(resultField.value);
}

function calculate() {
  try {
    const expression = resultField.value.replace('×', '*').replace('÷', '/');
        // Handle percentage operator by converting it to a fraction
    expression = expression.replace(/([0-9.]+)%/g, '($1/100)');
    const result = evaluateExpression(expression);
    resultField.value = result;
  } catch (e) {
    resultField.value = 'Error';
  }
}

function evaluateExpression(expression) {
  // Regular expression to validate input and prevent invalid characters
  const validCharacters = /^[0-9+\-*/.%() ]+$/;
  if (!validCharacters.test(expression)) {
    throw new Error('Invalid characters in expression');
  }

  // Use Function constructor to create a safe evaluator
  const safeFunction = new Function(`return (${expression})`);
  return safeFunction();
}
