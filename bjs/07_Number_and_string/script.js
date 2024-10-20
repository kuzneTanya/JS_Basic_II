let lastOperand = 0;
let operation = null;

const inputWindow = document.querySelector('#inputWindow');

function calculation(sign) {
    if (sign === '=') {
        let result = inputWindow.value;
        if (operation === '+') {
            result = lastOperand + parseInt(inputWindow.value);
        } else if (operation === '-') {
            result = lastOperand - parseInt(inputWindow.value);
        } else if (operation === '*') {
            result = lastOperand * parseInt(inputWindow.value);
        } else if (operation === '/') {
            result = lastOperand / parseInt(inputWindow.value);
        }
        operation = 'calc';
        lastOperand = 0;
        inputWindow.value = result;
    } else {
        if (operation === '+') {
            lastOperand += parseInt(inputWindow.value);
        } else if (operation === '-') {
            lastOperand -= parseInt(inputWindow.value);
        } else if (operation === '*') {
            lastOperand *= parseInt(inputWindow.value);
        } else if (operation === '/') {
            lastOperand /= parseInt(inputWindow.value);
        } else {
            lastOperand = parseInt(inputWindow.value);
        }
        operation = sign;
        inputWindow.value = '';
    }
}


inputWindow.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        calculation('=');
    } else if (isNaN(parseInt(e.key)) === true) {
        e.preventDefault();
        calculation(e.key);
    }
})

document.querySelectorAll('.numpad').forEach(element => {
    element.addEventListener('click', function (e) {
        if (operation === 'calc') {
            inputWindow.value = e.target.textContent;
            operation = null;
        } else {
            inputWindow.value += e.target.textContent;
        }
    });
})

document.querySelector('#btn_sum').addEventListener('click', (e) => calculation(e.target.textContent))

document.querySelector('#btn_def').addEventListener('click', (e) => calculation(e.target.textContent))

document.querySelector('#btn_div').addEventListener('click', (e) => calculation(e.target.textContent))

document.querySelector('#btn_mult').addEventListener('click', (e) => calculation(e.target.textContent))

document.querySelector('#btn_calc').addEventListener('click', (e) => calculation(e.target.textContent))

document.querySelector('#btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
})

