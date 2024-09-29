const display = document.getElementById('display');
const backSpaceButton = document.getElementById('backspace');
backSpaceButton.addEventListener('click',backspace);
function appendToDisplay(input){
     display.value += input
}
function clearDisplay(){
    display.value = "";
}
function calculate(){
    display.value = eval(display.value);
}
function clearElement(){
    let currentValue = display.value;
    display.value = currentValue.substring( 0,currentValue.length-1);
}