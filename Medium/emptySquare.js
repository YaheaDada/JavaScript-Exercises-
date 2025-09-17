// https://app.programiz.pro/community-challenges/challenge/javascript-empty-square-sequence/info

function generateEmptySquareSequence(n) {
  let res = [];
  for (let i = 1; i <= n; i++) {
    res.push(calc(i));
  }
  return res
}

function calc(number){
    return  (Math.pow(number,2)-1)
}


console.log(generateEmptySquareSequence(5));
