// https://app.programiz.pro/community-challenges/challenge/javascript-blackjack-winner/info

function blackjackWinner(player1, player2) {
  sum1 = calcSum(player1);
  sum2 = calcSum(player2);
  if (sum1 === sum2) {
    return "Draw";
  }
  if (sum1 > sum2) {
    return "Player1";
  } else {
    return "Player2";
  }
}

function calcSum(arr) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    res += arr[i];
  }
  if (res > 21) {
    return -1;
  }
  return res;
}

console.log(blackjackWinner([11, 11], [4, 5]));
