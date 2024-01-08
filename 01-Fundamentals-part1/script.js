

const age = 15;
const isOldEnough = age >= 18;

if(isOldEnough) {
  console.log('Sarah can start driving license 🚗');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young to get driving license. 
  Wait another ${yearsLeft} years`);
}

const birthYear = 1991;
if(birthYear <= 2000) {
  let century = 20;
} else {
  let century = 21;
}


console.log(century);



// TEST

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = parseFloat(massMark / (heightMark * heightMark));
const BMIJohn = parseFloat(massJohn / (heightJohn * heightJohn));
console.log(BMIMark, BMIJohn);

/* Write your code below. Good luck! 🙂 */

const MarkHigh = BMIMark > BMIJohn;

if(MarkHigh) {
    console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`);
    } else {
        console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`);
    }
