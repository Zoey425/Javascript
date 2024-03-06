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
// let now = new Date();
// let year = now.getFullYear(); 


// Function declarations
// function calcAge1(birthYear) {
//   const age = year - birthYear;
//   return age;
// }

// const myAge = calcAge1(1992);
// console.log(myAge);


// // Function expressions
// const calcAge2 = function (birthYear) {
//   return year - birthYear;
// }

// const myAge2 = calcAge2(1993);
// console.log(myAge2);


// console.log(myAge, myAge2);

// function은 사실 식이다
// 식들은 값을 생성하고 이 전체 값을 변수에 할당하고
// 변수는 함수 값을 가지고 있으니 값을 반환함.
// 그래서 함수는 값이니 변수에 할당 가능.



// Arrow function
// const calcAge3 = birthYear => year - birthYear;
// const age3 = calcAge3(1989);
// console.log(age3);


// const yearUntilRetirement = (birthYear, firstName) => {
//   const age4 = year - birthYear;
//   const retirement = 65 - age4;
//   return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearUntilRetirement(1980, 'Sofie'));


// // Function calling other functions

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const  juice = `This juice with ${applePieces} apples and ${orangePieces} oranges.`;
//   return juice;
// }


// console.log(fruitProcessor(2, 3));


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



// const calcAverage = (a, b, c) => (a+b+c)/3

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 60, 99);

// function checkWinner(avgKoalas, avgDolphins){
//     if(avgDolphins >= 2 * avgKoalas) {
//        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     }else if(avgKoalas >= 2 * avgDolphins){
//        console.log(`Dolphins win (${avgKoalas} vs. ${avgDolphins})`);
//     }else{
//         console.log('No team wins...');
//     }
// }

// checkWinner(scoreDolphins, scoreKoalas);




// Introduction to Arrays

// const friend1 = 'Mike';
// const friend2 = 'Steven';
// const friend3 = 'Samuel';

// // We use most this way.
// const friends = ['Mike', 'Steven', 'Samuel'];
// console.log(friends);


// // Another way
// const years1 = new Array(1992, 1993, 1994, 1995);
// console.log(years1);


// console.log(friends[0]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);
// // 길이(3)에서 -1 되어서 2번째인 samuel이 나오게됨.

// friends[2] = 'Jay';
// console.log(friends);

// const firstName = 'Park';
// const Jonas = [firstName, 'Zoey', year - 1991, 'developer', friends];

// console.log(Jonas);

// const years2 = [1990, 1967, 2002, 2010, 2020];
// console.log(calcAge2(years2));

// const age11 = calcAge2(years2[0]);
// const age22 = calcAge2(years2[1]);
// const age33 = calcAge2(years2[years2.length - 1]);
// console.log(age11, age22, age33);

// const ages = [calcAge2(years2[0]), calcAge2(years2[1]), calcAge2(years2[years2.length - 1])];
// console.log(ages);


// // Basic Array Operations(Methods)
// const people = ['Jay', 'Chris', 'Peter'];

// //Add elements
// people.push('John');
// console.log(people);

// people.unshift('Steven');
// console.log(people);

// // Remove elements
// people.pop(); //last
// console.log(people);

// people.shift(); // first
// console.log(people);

// console.log(people.indexOf('Chris'));
// console.log(people.indexOf('Steven'));

// console.log(people.includes('Steven'));
// console.log(people.includes('Jay'));

// if(people.includes('Jay')){
//   console.log('You have a friend called Jay')
// }


// CHALLENGE #2
// Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
// Your tasks:
// Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to).
// Use the function type you like the most. Test the function using a bill value of 100.
// And now let's use arrays! So, create an array called bills containing the test data below.
// Create an array called tips containing the tip value for each bill, calculated from the function you created before.
// BONUS: Create an array totals containing the total values, so the bill + tip.

// TEST DATA: 125, 555, and 44.


// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bills = [125, 555, 44]; 
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[1]+tips[2]];
// console.log(bills, tips, totals);


// Object

// const jonasArray = [
//   'Jonas',
//   'Schmedthmann',
//   2037-1992,
//   'teacher',
//   ['Mike', 'Peter', 'Zoey']
// ];

// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedthmann',
//   age: 2037-1992,
//   job: 'teacher',
//   friends: ['Mike', 'Peter', 'Zoey']
// };

// 위에서 보듯이 키에 값을 할당 할 수 있다.
// Array에서는 불가능한 키에 값을 직업 할당 할 수 있다.
// 각각의 key(즉, firstName, lastName etc....)는 속성 'Jonas'는 Value
// 배열과 마찬가지로 다른 변수들을 객체로 분류하는데 객체를 사용
// 배열과 다르게 Object의 순서는 전혀 중요하지 않음.
// 배열은 순서가 중요하지만, 객체는 비구조적인 데이터에 사용하는 것이 좋다.


// Dot vs. Bracket Notation[]
// How to retreat to data from Object
// How to change to data from Object

// console.log(jonas);
// console.log(jonas.lastName) // used dot, actually Dot is the operator here.
// console.log(jonas['firstName']); // used bracket notation as Operation.

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

//But cant use with Dot.
//console.log(jonas.'last' + nameKey);
//Unexpected string (at script.js:298:19)

// What situation should we use Dot notation and when do we use bracket notation
// 속성을 먼저 검색해야 할 때, bracket notation 사용하는게 좋음.
// 그 이외에는 Dot notation 사용하는게 좋음 훨 깔끔하고 쉬움

// e.g
// const interestedIn = prompt(
//   'What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends'
// );


// if(jonas[interestedIn]){
//   console.log(jonas[interestedIn]);
//   // prompt에 정의되지 않은 key value를 넣으면 undefined 나옴.
// } else {
//   console.log("Wrong request! Please try again");
// }


// jonas.location = 'South Korea';
// jonas['instagram'] = '@hahahlw.s';
// console.log(jonas);

// console.log('Jonas has ' + jonas.friends.length + ' friends, and his best friend is called ' + jonas.friends[0]);
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);


// Object Method
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedthmann',
  birthYear: 1992,
  job: 'teacher',
  friends: ['Mike', 'Peter', 'Zoey'],
  hasDriverLicense: true,

  calcAge: function () {
    this.age = 2030 - this.birthYear;
    return this.age;
  },

  getSummary: function() {
    return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license.`
  }
};

// console.log(jonas.calcAge(1992));
// console.log(jonas['calcAge'](1992));
// console.log(jonas['calcAge'](jonas.birthYear));
// console.log(jonas.age);

console.log(jonas.getSummary());

// Challenge

 const mark = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI:  function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
   }
 }

 const john = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI:  function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
   }
 }

 console.log(mark.calcBMI());
 console.log(john.calcBMI());


 if(mark.bmi > john.bmi) {
    console.log(
      `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`
    )
 }else if(john.bmi > mark.bmi){
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`
  )
 }

 // Iteration: The for Loop

 for(let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
 }