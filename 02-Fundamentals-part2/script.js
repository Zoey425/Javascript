'use strict';
// Strict mode
// JS의 의도치 않은 여러 잠재적인 오류를 막아줌. 최적화 작업에 문제를 일으킬 수 있는 코드에 대해 명시적인 에러 발생시킴.

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');

// const interface = 'Audio';
// :: Uncaught SyntaxError: Unexpected strict mode reserved word (at script.js:11:7)

// const private = 5434;
// :: Uncaught SyntaxError: Unexpected strict mode reserved word (at script.js:14:7)

// const if = 23;
// :: Uncaught SyntaxError: Unexpected token 'if' (at script.js:17:7)