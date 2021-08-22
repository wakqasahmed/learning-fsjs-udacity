// Concatenate two arrays

const concatArr = (arr1: (number[] | string[]), arr2: (number[] | string[])) => {
  return [...arr1, ...arr2];
};

// Add numbers in an array

const addArr = (arr: number[]) => {
  let total = 0;
  arr.forEach((x) => {
    total += x;
  });
  return total;
};

// Find the largest number in an array
const lgNum = (arr:number[]) => {
  let largest = 0;
  arr.forEach((x) => {
    if (x > largest) {
      largest = x;
    }
  });
  return largest;
};

// Remove the 3rd item from an array
const cut3 = (arr: number[] | string[]) => {
  arr.splice(2, 1);
  return arr;
};

module.exports = {
  concatArr,
  addArr,
  lgNum,
  cut3,
};
