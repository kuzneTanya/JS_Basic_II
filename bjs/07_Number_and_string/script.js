let lastOperand = 0;
let operation = null;

const inputWindow = document.querySelector('#inputWindow');

function calculation(sign) {
    if (sign === '=') {
        let result = inputWindow.value;
            switch (operation) {
                case '+':
                result = lastOperand + parseInt(inputWindow.value);
                operation = 'calc';
                lastOperand = 0;
                inputWindow.value = result;
                break;
            case '-':
                result = lastOperand - parseInt(inputWindow.value);
                operation = 'calc';
                lastOperand = 0;
                inputWindow.value = result;
                break;
            case '/':
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
    } else {
        switch (operation) {
            case '+':
                lastOperand += parseInt(inputWindow.value);
                operation = sign;
                inputWindow.value = '';
                break;
            case '-':
                lastOperand -= parseInt(inputWindow.value);
                operation = sign;
                inputWindow.value = '';
                break;
            case '/':
                lastOperand /= parseInt(inputWindow.value);
                operation = sign;
                inputWindow.value = '';
                break;
            default:
            operation = sign;
            lastOperand = parseInt(inputWindow.value);
            inputWindow.value = '';
        }
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

document.querySelector('#btn_calc').addEventListener('click', (e) => calculation(e.target.textContent))

document.querySelector('#btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
})

