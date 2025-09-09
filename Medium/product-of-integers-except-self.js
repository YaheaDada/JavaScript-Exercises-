function productExceptSelf(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(getMultiply(arr, arr[i]));
  }
  console.log(result);
  return result;
}

function getMultiply(arr, number) {
  let res = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != number) {
      res *= arr[i];
    } else {
    }
  }
  return res;
}

productExceptSelf([2, 3, 4, 5]);
// !https://app.programiz.pro/community-challenges/challenge/javascript-product-of-integers-except-self/info
