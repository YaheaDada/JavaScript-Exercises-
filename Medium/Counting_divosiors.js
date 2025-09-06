function calculateDivisors(num) {
  let counter = 2;
  // the 1 and the number itself.
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      console.log("num is ", num, "i is ", i);
      counter++;
    }
  }
  console.log(counter);
  return counter;
  
}

calculateDivisors(12);

// https://app.programiz.pro/community-challenges/challenge/javascript-counting-divisors/info
//! done and another 50 XP 