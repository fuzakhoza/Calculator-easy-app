const display = document.querySelector('.display');

function appendDisplay(input) {
    display.value += input;
}


function clearDisplay() {
    display.value = "";
}


function calculate() {
    try {
        display.value = eval(display.value)
    } catch (error) {
        display.value = 'ERROR'
    }
    
}