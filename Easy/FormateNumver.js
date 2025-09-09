// https://app.programiz.pro/community-challenges/challenge/javascript-fermat-numbers/info
function calculateFermatNumber(number) {
  console.log(power(2, power(2, number)) + 1);
}
calculateFermatNumber(3);

function power(base, ex) {
  let res = 1;
  for (let i = 0; i < ex; i++) {
    res *= base;
  }
  console.log(res);

  return res;
}
calculateFermatNumber(3);
// ! other kind of solution
// console.log(Math.pow(2, Math.pow(2, n)) + 1);
