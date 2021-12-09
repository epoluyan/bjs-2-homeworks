"use strict";

// Задание 1
function getArrayParams(arr) {
  let min = Infinity, max = -Infinity, sum = 0, avg = 0;

  for (let item = 0; item<arr.length; item++){
    arr[item] > max ? max = arr[item] : max = max
    arr[item] < min ? min = arr[item] : min = min
    sum +=  arr[item];
  }
  avg = parseFloat((sum/arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  for (let item = 0; item<arr.length; item++){
    sum +=  arr[item];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;

  for (let item = 0; item<arrOfArr.length; item++){
    func(arrOfArr[item]) > max ? max = func(arrOfArr[item]) : max = max
  }
  
  return max;
}

// Задание 3
function worker2(arr) {
  let min = Infinity, max = -Infinity, diff = 0;

  for (let item = 0; item<arr.length; item++){
    arr[item] > max ? max = arr[item] : max = max
    arr[item] < min ? min = arr[item] : min = min
    diff = max - min;
  }

  return Math.abs(diff);
}


