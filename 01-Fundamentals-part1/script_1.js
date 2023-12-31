
// // type conversion
// const inputYear = '1991';
// console.log(inputYear + 18);  // 199118
// console.log(Number(inputYear) + 18); // 
// console.log(Number(inputYear), inputYear); 

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23), 23);

// //type coercion
// console.log('I am' + 23 + 'years old');
// console.log('23' - '10' - 3); // 10
// console.log('23' / '2');


// let n = '1' + 1;
// n = n - 1;
// console.log(n);



// //  Truthy and Falsy Values

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 0;
// if(money) {
//   console.log("Don't spend it all");
// } else {
//   console.log('You should get a job');
// }

// let height;
// if(height) {
//   console.log("Yay! height is defined");
// } else {
//   console.log("Height is UNDEFINED");
// }



// // Equality Operators:: == vs. ===

// const age = 18;
// if (age === 18) console.log("You just become an adult :) (strict)");
// if(age == 18) console.log("you just became and adult (loose)");
// // == 는 문자열도 동등하게 본다


// const favorite = Number(prompt("what is your favorite number?"));
// // const favorite = prompt("what is your favorite number?");

// console.log(favorite);
// console.log(typeof favorite);

// if(favorite == 23) { // '23' == 23
//   console.log('Cool! 23 is an amazing number')
// }


// if(favorite === 23) { // '23' == 23
//   console.log('Cool! 23 is an amazing number (number)');
// } else if(favorite === 7) {
//   console.log('7 is also a cool number');
// } else {
//   console.log('Number is not 23 or 7');
// }


// if(favorite !== 23) console.log("Why not 23?");


// // Logical Operator 

// const hasDriverLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriverLicense && hasGoodVision);
// console.log(hasDriverLicense || hasGoodVision);
// console.log(!hasDriverLicense);

// const shouldDrive = hasDriverLicense && hasGoodVision;

// // if(shouldDrive) {
// //   console.log("Sarah is able to drive");
// // } else {
// //   console.log('Someone else should drive...');
// // }

// const isTired = false;
// console.log(hasDriverLicense && hasGoodVision && isTired);


// if(hasDriverLicense && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive");
// } else {
//   console.log('Someone else should drive...');
// }




// /* Write your code below. Good luck! 🙂 */

// const Dolphins = (96+108+89)/3;
// const Koalas = (88+91+110)/3;

// if(Dolphins < Koalas) {
//   console.log("Dolphins win the trophy");
// } else if(Koalas < Dolphins){
//   console.log("Koalas win the trophy");
// } else if(Dolphins === Koalas){
//   console.log("Both win the trophy");
// }


// if(Dolphins > Koalas && Dolphins >= 100) {
//   console.log("Dolphins win the trophy");
// } else if(Koalas > Dolphins && Koalas >= 100) {
//   console.log("Koalas win the trophy")
// } else if(Dolphins === Koalas && Dolphins >= 100 && Koalas >= 100) {
//   console.log("Both win the trophy");
// } else {
//   console.log("No one wins the trophy");
// }


// Switch Statement

// const day = 'monday';

// switch(day) {
//   case 'monday':
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
//     break;
//   case 'tuesday':
//     console.log('Prepare theory videos');
//     break;
//   case 'wednesday':
//   case 'thursday':
//     console.log('Write code examples');
//     break;
//   case 'saturday':
//   case 'sunday':
//     console.log('Enjoy the weekend :) ')
//   default:
//     console.log('Not a valid day!')
// }

// Conditional(Ternary) Operator

const age = 23;
age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if(age >= 18) {
  drink2 = 'wine';
} else {
  drink2 = 'water';
}

console.log(drink2);
console.log(`I like to drink ${age>=18 ? 'Soju' : 'water'}`);

const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
const totalBill = bill + tip;
console.log(`If the bill is ${bill}, the tip would be ${tip}, and total Bill would be ${totalBill}`);