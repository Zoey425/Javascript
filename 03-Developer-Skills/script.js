// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = '23';
if (x === 23) console.log(23);

const calcAge = birthYear => 2035 - birthYear;

// PROBLEM 1:
// 온도에 진폭에 대해 계산하라, 에러 발생시 무시하고 진행
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) 문제에 대한 이해
//  온도에 진폭이란 무엇인가? - 최고 온도와 최저 온도의 차이
//  최대 온도와 최저 온도를 어떻게 비교해야하나?
//  센서 오류는 무엇이고 발생시 어떻게 발생하나

// 2) 문제를 작게 나눠보기
// - 어떻게 에러를 무시하나
// - 배열에서 가장 큰 값을 찾고
// - 배열에서 가장 작은 값을 찾아서
// - 최대값에서 최소값을 빼면 진폭이 나옴

const calcTempAmplitude = function (temps) {
  let max = temps[0]; // 시작점
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2:
// 배열이 두개일 경우에는 어떻게 구현할까?

// 1) 문제에 대한 이해
// 배열이 두개니까 두개 구현해야하나 - NOPE 그럴 필요 없음. 배열 두개를 합치자!
// 2) 문제를 작게 나눠보기
// 배열 두개를 어떻게 합치지?

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);

  let max = temps[0]; // 시작점
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew(
  [5, 3, 8, 10, -2, 'error'],
  [-1, -3, 42]
);
console.log(amplitudeNew);
console.log('-----------------------------------');

/////////////////////////////

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // 3. FIX
    //value: Number(prompt('Degrees celsius:')),
  };

  // 2. FIND
  console.log(measurement);
  console.log(typeof measurement.value, measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// 1. IDENTIFY
console.log(measureKelvin());
console.log('-----------------------------------');
console.log('-----------------------------------');

// Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);

  let max = temps[0]; // 시작점
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    debugger;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeNew([3, 5, 1], [4, 9, 42]);
console.log(amplitudeBug);

// PROBLEM 3:

// 1) 문제에 대한 이해
// Array를 string으로 변경해야하고 ...으로 나눠짐
// X days가 무엇인가? index + 1

// 2) 문제를 작게 나눠보기
// 어레이를 스트링으로 바꿔야함
// 각각 요소를 문자열+℃ 로 바꿔야함
// 문자열은 days를 포함해야함
// 그리고 ...로 각 요소를 연결시켜야함

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}℃ in ${i + 1} days ... `;
  }
  console.log('... ' + str);
};

printForecast(data2);
