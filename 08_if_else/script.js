let minValue = parseInt(prompt('Минимальное знание числа для игры', '0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры', '100'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`


document.getElementById('btnRetry').addEventListener('click', function() {
    minValue = parseInt(prompt('Минимальное знание числа для игры', '0'));
    maxValue = parseInt(prompt('Максимальное знание числа для игры', '100'));
    orderNumber = 1;

    orderNumberField.innerText = orderNumber;
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber = Math.floor((minValue + maxValue) / 2);
    answerField.innerText = `Вы загадали число ${answerNumber }?`
    gameRun = true;

})

document.getElementById('btnOver').addEventListener('click', function() {
    if (gameRun) {
        if (minValue === maxValue && minValue > maxValue) {
            const phraseRandom = Math.round(Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;

            const phraseRandom = Math.round(Math.round(Math.random() * 2));
            answerField.innerText = (phraseRandom === 0) ?
                `Вы загадали число ${answerNumber }?` :
                (phraseRandom === 1) ?
                `Да это легко! Ты загадал ${answerNumber }?` :
                `Наверное, это число ${answerNumber }?`;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function() {
    if (gameRun) {
        if (minValue === maxValue && minValue > maxValue) {
            const phraseRandom = Math.round(Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber + 1;
            answerNumber = Math.floor((maxValue + minValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;

            const phraseRandom = Math.round(Math.round(Math.random() * 2));
            answerField.innerText = (phraseRandom === 0) ?
                `Вы загадали число ${answerNumber }?` :
                (phraseRandom === 1) ?
                `Да это легко! Ты загадал ${answerNumber }?` :
                `Наверное, это число ${answerNumber }?`;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function() {
    if (gameRun) {
        phraseRandom = Math.round(Math.round(Math.random() * 2));
        answerField.innerText = (phraseRandom === 0) ?
            `Супер!` :
            (phraseRandom === 1) ?
            `Это было просто!` :
            `Я всегда угадываю\n\u{1F60E}`;
        gameRun = false;
    }
})