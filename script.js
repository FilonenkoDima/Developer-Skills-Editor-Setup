"use strict";
/*
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (t1, t2) {
  const temps = t1.concat(t2);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures, [3, 18, 0]);
console.log(amplitude);


const measureKelvin = function () {
  const measurment = {
    type: "temp",
    unit: "celsius",

    // C) FIX
    //  value: Number(prompt("Degrees celsius:")),
    value: 10,
  };

  // B) FIND
  console.table(measurment);

  //   console.log(measurment.value);
  //   console.warn(measurment.value);
  //   console.error(measurment.value);
  const kelvin = measurment.value + 273;
  return kelvin;
};

// A) IDENTIFY
console.log(measureKelvin());

// Using a debugger

const temperatures = [3, 2, 6, 1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;
    debugger;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug(temperatures, [3, 18, 0]);
// A) IDENTIFY
console.log(amplitudeBug);
*/

const printForecast = (arr) => {
  let result = `...`;
  for (let i = 0; i < arr.length; i++) {
    result += ` ${arr[i]}C in ${i + 1} days ...`;
  }
  console.log(result);
};

printForecast([17, 21, 23]);
