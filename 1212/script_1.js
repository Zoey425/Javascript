
// type conversion
const inputYear = '1991';
console.log(inputYear + 18);  // 199118
console.log(Number(inputYear) + 18); // 
console.log(Number(inputYear), inputYear); 

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion
console.log('I am' + 23 + 'years old');
console.log('23' - '10' - 3); // 10
console.log('23' / '2');


let n = '1' + 1;
n = n - 1;
console.log(n);



//  Truthy and Falsy Values

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if(money) {
  console.log("Don't spend it all");
} else {
  console.log('You should get a job');
}

let height;
if(height) {
  console.log("Yay! height is defined");
} else {
  console.log("Height is UNDEFINED");
}



// Equality Operators:: == vs. ===

const age = 18;
if (age === 18) console.log("You just become an adult :) (strict)");
if(age == 18) console.log("you just became and adult (loose)");
// == 는 문자열도 동등하게 본다


const favorite = Number(prompt("what is your favorite number?"));
// const favorite = prompt("what is your favorite number?");

console.log(favorite);
console.log(typeof favorite);

if(favorite == 23) { // '23' == 23
  console.log('Cool! 23 is an amazing number')
}


if(favorite === 23) { // '23' == 23
  console.log('Cool! 23 is an amazing number (number)');
} else if(favorite === 7) {
  console.log('7 is also a cool number');
} else {
  console.log('Number is not 23 or 7');
}


if(favorite !== 23) console.log("Why not 23?");