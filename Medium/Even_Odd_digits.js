// https://app.programiz.pro/community-challenges/challenge/javascript-count-even-odd-digits-in-integers/info

function countEvenOddDigits(numStr) {
  let str = numStr.toString();
  let evenCounter = 0;
  let oddCounter = 0;
  let res = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] % 2 == 0) {
      console.log("this is even", str[i]);

      evenCounter++;
    } else {
      console.log("this is odd", str[i]);

      oddCounter++;
    }
  }
  res[0] = evenCounter;
  res[1] = oddCounter;
  console.log(res);
  return res;
}

function isEven(num) {
  if (num / 2 == 0) {
    return true;
  }
}
function isOdd(num) {
  if (num / 2 != 0) {
    return true;
  }
}

countEvenOddDigits(1234567890);
