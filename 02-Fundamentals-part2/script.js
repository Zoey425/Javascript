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



// Arrow function
const calcAge3 = birthYear => year - birthYear;
const age3 = calcAge3(1989);
console.log(age3);


const yearUntilRetirement = (birthYear, firstName) => {
  const age4 = year - birthYear;
  const retirement = 65 - age4;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearUntilRetirement(1980, 'Sofie'));


// Function calling other functions

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const  juice = `This juice with ${applePieces} apples and ${orangePieces} oranges.`;
  return juice;
}


console.log(fruitProcessor(2, 3));


// CODE TEST
// CHALLENGE #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!


// Your tasks:
// Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).
// Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).
// Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).
// Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.
// Ignore draws this time. Instead, log No team wins... to the console if there is no winner.

// TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.
// TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.



const calcAverage = (a, b, c) => (a+b+c)/3

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 60, 99);

function checkWinner(avgKoalas, avgDolphins){
    if(avgDolphins >= 2 * avgKoalas) {
       console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    }else if(avgKoalas >= 2 * avgDolphins){
       console.log(`Dolphins win (${avgKoalas} vs. ${avgDolphins})`);
    }else{
        console.log('No team wins...');
    }
}

checkWinner(scoreDolphins, scoreKoalas);