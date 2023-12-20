
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