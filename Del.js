let display = document.getElementById("display");

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Ошибка";
    }
}
function removeLastCharacter(){
display.value=display.value.slice(0,-1);
}
function toggleSign(){
    const currentValue=display.value;
    if(currentValue!==""){
      let currentValue=parseFloat(display.value);
      display.value=-currentValue;
        }
    }
    function calculateSqrt() {
        try {
            display.value  = eval(display.value);
            display.value  = Math.sqrt(value);
        } catch (error) {
            display.value  = 'Ошибка';
        }
    }
    function calculateTrig(operation) {
        try {
            var value = eval(display.value);
            display.value = eval(operation + value + ')');
        } catch (error) {
            display.value = 'Ошибка';
        }
    }
    function calculateLog(logFunction) {
        try {
            var inputValue = eval(display.value);
            if (inputValue <= 0) {
                display.value = 'Ошибка: недопустимый аргумент';
            } else {
                display.value = logFunction(inputValue);
            }
        } catch (error) {
            display.value = 'Ошибка';
        }
    }
    function calculateFactorial() {
        try {
            var inputValue = eval(display.value);
            var result = 1;
            for (var i = 2; i <= inputValue; i++) {
                result *= i;
            }
            display.value = result;
        } catch (error) {
            display.value = 'Ошибка';
        }
    }
    function calculateSqrt() {
        try {
            var inputValue = eval(display.value);
            if (inputValue < 0) {
                display.value = 'Ошибка: недопустимый аргумент';
            } else {
                display.value = Math.sqrt(inputValue);
            }
        } catch (error) {
            display.value = 'Ошибка';
        }
    }