'use strict';

// console.log('text는? ' + document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '⭐️ Correct Number!';
// console.log('바뀐 text는? ' + document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 20;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //0은 논리적으로 false임.

    if (!guess) {
        // 조건문은 참을 반환하기 때문에 false인 0일때 값을 불러와야 하니까 !로 조건문을 참으로 만들어줌
        document.querySelector('.message').textContent = '⛔ No Number!';
    }
});
