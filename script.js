// Grab display and all buttons
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.calc-btn');

let currentInput = ""; // stores the expression

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const type = button.getAttribute('data-type');
        const value = button.getAttribute('data-value');

        if (type === 'digit' || type === 'op') {
            // Append digit or operator to current input
            currentInput += value;
            display.textContent = currentInput;
        } else if (type === 'clear') {
            // Clear input
            currentInput = "";
            display.textContent = "0";
        } else if (type === 'equals') {
            try {
                // Evaluate expression using JS eval
                // Replace '×' and '÷' with * and / for eval
                let expression = currentInput.replace(/×/g, '*').replace(/÷/g, '/');
                let result = eval(expression);
                display.textContent = result;
                currentInput = result.toString(); // allow chaining calculations
            } catch (err) {
                display.textContent = "Error!";
                currentInput = "";
            }
        }
    });
});
