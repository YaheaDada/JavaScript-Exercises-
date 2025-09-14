function checkStraightLine(coordinates) {
  let slopsArr = [];
  for (let i = 0; i < coordinates.length - 1; i++) {
    let res = slop_between_two_points(coordinates[i], coordinates[i + 1]);
    slopsArr.push(res);
  }
  console.log("the slops array between nodes", slopsArr);
  if (check_slops(slopsArr) == true) {
    // console.log("stright");
    return true;
  } else {
    //   console.log("not Straight");
    return false;
  }
}

function slop_between_two_points(arr1, arr2) {
  if (arr1.length != 2 && arr2.length != 2) {
    return "each point must have exactly two Coordinates";
  } else {
    // console.log((arr2[1] - arr1[1]) / (arr2[0] - arr1[0]));
    return (arr2[1] - arr1[1]) / (arr2[0] - arr1[0]);
  }
}

function check_slops(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] != arr[i + 1]) {
      //   console.log("there is diffreence, and not all slops are the same");
      return false;
    }
  }
  //   console.log(" all the slops are the same ");
  return true;
}

// check_slops([1, 1, 1, 1, 1]);

checkStraightLine([
  [1, 2, 3],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
]);

// 10 js proplems
// trapping water
// anime.js when i get back its nice to be learnet
// https://barba.js.org/docs/getstarted/basic-transition/
// https://animejs.com/
