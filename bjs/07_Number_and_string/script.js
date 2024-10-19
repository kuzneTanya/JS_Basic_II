let lastOperand = 0;
let operation = null;

const inputWindow = document.querySelector('#inputWindow');


document.querySelector('#btn_1').addEventListener('click', function () {
    if (operation === 'calc') {
        inputWindow.value = '1';
        operation = null;
    } else {
        inputWindow.value += '1';
    }
})

document.querySelector('#btn_2').addEventListener('click', function () {
    if (operation === 'calc') {
        inputWindow.value = '2';
        operation = null;
    } else {    
        inputWindow.value += '2';
    }
})

document.querySelector('#btn_3').addEventListener('click', function () {
    if (operation === 'calc') {
        inputWindow.value = '3';
        operation = null;
    } else {    
        inputWindow.value += '3';
    }
})

document.querySelector('#btn_4').addEventListener('click', function () {
    if (operation === 'calc') {
        inputWindow.value = '4';
        operation = null;
    } else {    
        inputWindow.value += '4';
    }
})

document.querySelector('#btn_5').addEventListener('click', function () {
    if (operation === 'calc') {
        inputWindow.value = '5';
        operation = null;
    } else {    
        inputWindow.value += '5';
    }
})

document.querySelector('#btn_6').addEventListener('click', function () {
    if (operation === 'calc') {
        inputWindow.value = '6';
        operation = null;
    } else {    
        inputWindow.value += '6';
    }
})

document.querySelector('#btn_7').addEventListener('click', function () {
    if (operation === 'calc') {
        inputWindow.value = '7';
        operation = null;
    } else {    
        inputWindow.value += '7';
    }
})

document.querySelector('#btn_8').addEventListener('click', function () {
    if (operation === 'calc') {
        inputWindow.value = '8';
        operation = null;
    } else {    
        inputWindow.value += '8';
    }
})

document.querySelector('#btn_9').addEventListener('click', function () {
    if (operation === 'calc') {
        inputWindow.value = '9';
        operation = null;
    } else {    
        inputWindow.value += '9';
    }
})

document.querySelector('#btn_0').addEventListener('click', function () {
    if (operation === 'calc') {
        inputWindow.value = '0';
        operation = null;
    } else {    
        inputWindow.value += '0';
    }
})

document.querySelector('#btn_sum').addEventListener('click', function () {
    switch (operation) {
        case 'sum':
            lastOperand += parseInt(inputWindow.value);
            operation = 'sum';
            inputWindow.value = '';
            break;
        case 'def':
            lastOperand -= parseInt(inputWindow.value);
            operation = 'sum';
            inputWindow.value = '';
            break;
        case 'div':
            lastOperand /= parseInt(inputWindow.value);
            operation = 'sum';
            inputWindow.value = '';
            break;
        default:
            operation = 'sum';
            lastOperand = parseInt(inputWindow.value);
            inputWindow.value = '';
    }
})

document.querySelector('#btn_def').addEventListener('click', function () {
    switch (operation) {
        case 'sum':
            lastOperand += parseInt(inputWindow.value);
            operation = 'def';
            inputWindow.value = '';
            break;
        case 'def':
            lastOperand -= parseInt(inputWindow.value);
            operation = 'def';
            inputWindow.value = '';
            break;
        case 'div':
            lastOperand /= parseInt(inputWindow.value);
            operation = 'def';
            inputWindow.value = '';
            break;
        default:
            operation = 'def';
            lastOperand = parseInt(inputWindow.value);
            inputWindow.value = '';
    }
})

document.querySelector('#btn_div').addEventListener('click', function () {
    switch (operation) {
        case 'sum':
            lastOperand += parseInt(inputWindow.value);
            operation = 'div';
            inputWindow.value = '';
            break;
        case 'def':
            lastOperand -= parseInt(inputWindow.value);
            operation = 'div';
            inputWindow.value = '';
            break;
        case 'div':
            lastOperand /= parseInt(inputWindow.value);
            operation = 'div';
            inputWindow.value = '';
            break;
        default:
            operation = 'div';
            lastOperand = parseInt(inputWindow.value);
            inputWindow.value = '';
    }
})

document.querySelector('#btn_calc').addEventListener('click', function () {
    let result = inputWindow.value;
    switch (operation) {
        case 'sum':
            result = lastOperand + parseInt(inputWindow.value);
            operation = 'calc';
            lastOperand = 0;
            inputWindow.value = result;
            break;
        case 'def':
            result = lastOperand - parseInt(inputWindow.value);
            operation = 'calc';
            lastOperand = 0;
            inputWindow.value = result;
            break;
        case 'div':
            result = lastOperand / parseInt(inputWindow.value);
            operation = 'calc';
            lastOperand = 0;
            inputWindow.value = result;
            break;
        default:
            operation = 'calc';
            lastOperand = 0;
            inputWindow.value = result;
    }
})

document.querySelector('#btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
})

