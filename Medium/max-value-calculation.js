// https://app.programiz.pro/community-challenges/challenge/javascript-max-value-calculation/info
function calculateMaxValue(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.push(Number(str[i]));
  }
  console.log(arr);
  let sum = adding(arr);
  let product = Mutliplying(arr);
  console.log("the sum is ", sum, " and the product is ", product);
  return Math.max(product,sum)
}


// ! summing function
function adding(arr) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        res += arr[i];
    }
    //   console.log(res);
    return res;
}
// ! multiplying function
function Mutliplying(arr) {
    let res = 1;
    for (let i = 0; i < arr.length; i++) {
        res *= arr[i];
    }
    //   console.log(res);
    return res;
}

calculateMaxValue("243");