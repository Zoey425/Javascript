// 'use strict';
// Strict mode
// JS의 의도치 않은 여러 잠재적인 오류를 막아줌. 최적화 작업에 문제를 일으킬 수 있는 코드에 대해 명시적인 에러 발생시킴.

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive');

// const interface = 'Audio';
// :: Uncaught SyntaxError: Unexpected strict mode reserved word (at script.js:11:7)

// const private = 5434;
// :: Uncaught SyntaxError: Unexpected strict mode reserved word (at script.js:14:7)

// const if = 23;
// :: Uncaught SyntaxError: Unexpected token 'if' (at script.js:17:7)



// FUNCTION 

// function logger() {
//   console.log('Hello this is the function');
// }

// calling / running / invoking function
// logger();
// logger();
// logger();
// we can use or call the function as much as I can.


// function fruitProcessor(apples, oranges) {
//   //console.log(apples, oranges);
//   const  juice = `This juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }


// fruitProcessor(4, 0);
// const appleJuice = fruitProcessor(6, 0);
// console.log(appleJuice);
// console.log(fruitProcessor(6, 0));

// Recap 
// fruitProcessor 함수에서 특정 값인 6,0을 파라미터로 받음
// 함수 파라미터의 실제 값은 apples, oranges
// fruitProcessor의 apples = 6, oranges = 0
// 파라미터의 값을 이용해서 juice라는 string을 만듬.
// fruitProcessor 함수에서 저 값을 return 즉, 호출한 결과가 방금 반환된 juice value임.
// juice's value를 저장해야하는데 그걸 appleJuice 변수로 저장
// 그리고 콘솔로 log 함
// 물론, 직접적으로 log도 가능함. console.log(fruitProcessor(6, 0));

// const appleOrangeJuice = fruitProcessor(3, 5);
// console.log(appleOrangeJuice);




// Function declarations vs Expressions
let now = new Date();
let year = now.getFullYear(); 


// Function declarations
function calcAge1(birthYear) {
  const age = year - birthYear;
  return age;
}

const myAge = calcAge1(1992);
console.log(myAge);


// Function expressions
const calcAge2 = function (birthYear) {
  return year - birthYear;
}

const myAge2 = calcAge2(1993);
console.log(myAge2);


console.log(myAge, myAge2);

// function은 사실 식이다
// 식들은 값을 생성하고 이 전체 값을 변수에 할당하고
// 변수는 함수 값을 가지고 있으니 값을 반환함.
// 그래서 함수는 값이니 변수에 할당 가능.