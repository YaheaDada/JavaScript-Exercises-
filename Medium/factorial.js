// https://app.programiz.pro/community-challenges/challenge/javascript-factorial-digit-sum/info

function factorialDigitSum(num) {
  let arr = [];
  let str = factorial(num).toString();
  for (let i = 0; i < str.length; i++) {
    arr.push(str[i]);
  }
  //   console.log(arr);
  let finalResult = sum(arr);
  return finalResult;
}

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

function sum(arr) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    res += Number(arr[i]);
  }
  return res;
}
console.log(factorialDigitSum(5));
