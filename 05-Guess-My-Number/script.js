'use strict';

// console.log('text는? ' + document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '⭐️ Correct Number!';
// console.log('바뀐 text는? ' + document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 20;

// 게임 로직 구현
// 랜덤 숫자는 게임 시작 할 때 한번만 정의되어야 함.
// 1. 게임은 1에서 20사이의 숫자만 나옴
// 2. 랜덤 숫자와 사용자가 적은 숫자 값이 같을 때 정답처리
const randomNumber = parseInt(Math.random() * 20) + 1;
document.querySelector('.number').textContent = randomNumber;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //0은 논리적으로 false임.

    if (!guess) {
        // 조건문은 참을 반환하기 때문에 false인 0일때 값을 불러와야 하니까 !로 조건문을 참으로 만들어줌
        document.querySelector('.message').textContent = '⛔ No Number!';
    } else if (guess == randomNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Number!';
    } else if (guess > randomNumber) {
        document.querySelector('.message').textContent = '📈 Too high';
    } else if (guess < randomNumber) {
        document.querySelector('.message').textContent = '📉 Too low';
    }
});
