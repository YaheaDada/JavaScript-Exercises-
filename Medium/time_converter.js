// https://app.programiz.pro/community-challenges/challenge/javascript-car-timer/info

function carTimer(totalMinutes) {
  let hrs = totalMinutes / 60;
  let hours = HOURS(hrs);
  console.log("HOURS IS", hours);

  let mins = totalMinutes % 60;
  let minuts = Mins(mins);
  return `${hours}:${minuts}`;
}

console.log(carTimer(135));

function HOURS(num) {
  if (num < 9) {
    console.log("NIGGAS IS", num);
    return `0${Math.trunc(num)}`;
  } else {
    return num;
  }
}

function Mins(num) {
  if (num < 9) {
    return `0${Math.trunc(num)}`;
  } else {
    return num;
  }
}

// what could be usfull
//! Hourse = totalMinutes /60
//! Minuts = totalMinuts %60
