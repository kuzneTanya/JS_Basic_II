let minValue;
let maxValue;
let answerNumber;
let answerNumberText;
let answerPhrase;
let phraseRandom;
let orderNumber;
let gameRun;

const orderNumberField = document.querySelector('#orderNumberField');
const answerField = document.querySelector('#answerField');

function answerNumberToText(num) {
    let result = '';
    let hundreds = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];
    let dozens = ['', 'десять', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяноста'];
    let tenToTwelve = ['десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать']
    let digits = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
    if (num < 0) {
        result = 'минус ';
        num = parseInt(num.toString().replace('-', ''));
    }
    num = num % 1000;
    if (num.toString().length == 3) {
        result += hundreds[num.toString()[0]];
        num = num % 100;
        if (num.toString().length == 2) {
            if (num.toString()[0] == 1) {
                result += ' ' + tenToTwelve[num.toString()[1]];
            } else {
                result += ' ' + dozens[num.toString()[0]];
                num = num % 10;
                if (num != 0) {
                    result += ' ' + digits[num];
                }
            }
        } else {
            result += ' ' + digits[num];
        }
    } else if (num.toString().length == 2) {
        if (num.toString()[0] == 1) {
            result += tenToTwelve[num.toString()[1]];
        } else {
            result += dozens[num.toString()[0]];
            num = num % 10;
            if (num != 0) {
                result += ' ' + digits[num];
            }
        }
    } else {
        if (num == 0) {
            result = 0;
        } else {
            result += digits[num];
        }
    }
    if (result.length > 20) {
        result = answerNumber;
    }
    return result;
}

function randomAnswerPhrase() {
    if (gameRun === false) {
        answerField.innerText = 'Начните игру сначала';
    } else {   
        phraseRandom = Math.round(Math.random()*2);
            switch (phraseRandom) {
                case 0:
                    answerPhrase = 'Возможно, это число ';
                    break;
                case 1:
                    answerPhrase = 'Вы загадали число ';
                    break;
                case 2:
                    answerPhrase = 'Всё просто. Это число ';
                    break;
            }
        answerField.innerText = `${answerPhrase} ${answerNumberText}?`;
    }
}

function startTheGame() {
    minValue = parseInt(document.querySelector('#minValue').value);
    maxValue = parseInt(document.querySelector('#maxValue').value);
    if (minValue >= maxValue) {
        alert(`Попробуйте ещё раз. Минимальное значение должно быть меньше максимального`);
        gameRun = false;
    } else if (isNaN(minValue) || isNaN(maxValue)) {
        if (isNaN(minValue)) {
            minValue = 0;
        }
        if (isNaN(maxValue)) {
            maxValue = 100;
        }
        gameRun = true;
    } else {
        minValue = (minValue < -999) ? -999 : minValue;
        maxValue = (maxValue > 999) ? 999 : maxValue;
        document.querySelector('#minValue').value = minValue;
        document.querySelector('#maxValue').value = maxValue;
        gameRun = true;
    }
    answerNumber = Math.floor((minValue + maxValue) / 2);
    answerNumberText = answerNumberToText(answerNumber);
    orderNumber = 1;
    orderNumberField.innerText = orderNumber;
    randomAnswerPhrase();
}

document.querySelector('#btnStart').addEventListener('click', startTheGame);

document.querySelector('#btnRetry').addEventListener('click', function () {
    orderNumber = 0;
    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Введите минимальное и максимальное значения и загадайте число\n\u{1F609}`;
})

document.querySelector('#btnOver').addEventListener('click', function () {
        if (minValue === maxValue){
            phraseRandom = Math.round(Math.random());
            answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            document.querySelector("#minValue").value = minValue;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            answerNumberText = answerNumberToText(answerNumber);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            randomAnswerPhrase();
        }
})

document.querySelector('#btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            phraseRandom = Math.round(Math.random());
            answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            document.querySelector("#maxValue").value = maxValue;
            answerNumber = Math.ceil((minValue + maxValue) / 2);
            answerNumberText = answerNumberToText(answerNumber);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            randomAnswerPhrase();
        }
    }
})

document.querySelector('#btnEqual').addEventListener('click', function () {
    if (gameRun){
        phraseRandom = Math.round(Math.random()*2);
            switch (phraseRandom) {
                case 0:
                    answerPhrase = 'Я всегда угадываю\n\u{1F60E}';
                    break;
                case 1:
                    answerPhrase = 'Так и знал\n\u{1F60E}';
                    break;
                case 2:
                    answerPhrase = 'Это было просто. Ещё раз?';
                    break;
            }
        answerField.innerText = `${answerPhrase}`;
        gameRun = false;
    }
})

